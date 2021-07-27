import AppTextInput from './components/AppTextInput'
import AppMultipleChoice from './components/AppMultipleChoice'
import { useState } from 'react'
import ShowErrors from './components/ShowErrors'
import AppSubmitButton from './components/AppSubmitButton'
import * as yup from 'yup'
import GlobalStyles from './GlobalStyles'
import options from './data/options'
import mustSelectOne from './functions/mustSelectOne'
import { IErrors } from './types'

interface IInput {
  testErrors: string
  testMultipleChoice: {
    option1: boolean
    option2: boolean
  }
}

interface IExampleRules {
  name: string,
  displayName: string
  matches: RegExp
}

export default function App (): JSX.Element {
  const [errors, setErrors] = useState<IErrors[]>([])
  const [inputs, setInputs] = useState<IInput>({
    testErrors: '',
    testMultipleChoice: {
      option1: false,
      option2: false
    }
  })

  const regEx: RegExp = /[0-9]/

  const exampleRules = (
    { name, displayName, matches }:
    IExampleRules
  ) => yup.object().shape({
    [name]: yup
      .string()
      .required(() => ({
        message: `There was an error at ${displayName}`,
        name,
      }))
      .matches(matches, () => ({
        message: `Only numbers allowed at ${displayName}`,
        name,
      }))
  })

  const handleChange = (
    { name, value }:
    { name: string, value: string }
  ): void => {
    setInputs(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleValidateAllInputs = (
  ): void => {
    setErrors([]);
    [
      () => exampleRules({ name: 'testErrors', displayName: 'Test Errors', matches: regEx }).validate(inputs),
      () => mustSelectOne({ name: 'testMultipleChoice', obj: inputs })
    ].forEach(async ( validate: () => Promise<void> | (() => void)) => {
      try {
        await validate()
      } catch (err) {
        if (err.name === 'ValidationError') {
          setErrors(prev => [...prev, ...err.errors])
        } else if (err.name === 'CustomError') {
          setErrors(prev => [...prev, err.error])
        }
      }
    })
  }

  return (
    <div className='global-container'>
      <GlobalStyles />
      <ShowErrors validationErrors={errors} />
      <AppTextInput
        name='testErrors'
        value={inputs.testErrors}
        handleChange={handleChange}
        validationErrors={errors}
        title='Please Enter Number(s): '
      />
      <AppMultipleChoice
        title='Select At least One'
        obj={inputs}
        handleChange={handleChange}
        category='testMultipleChoice'
        optionsLabelsArray={options}
        validationErrors={errors}
        selectAllOption={true}
      />
      <AppSubmitButton
        onClick={handleValidateAllInputs}
        text="Validate"
      />
    </div>
  )
}