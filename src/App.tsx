import AppTextInput from './components/AppTextInput'
import React, { useState } from 'react'
import ShowErrors from './components/ShowErrors'
import AppSubmitButton from './components/AppSubmitButton'
import * as yup from 'yup'
import GlobalStyles from './GlobalStyles'

import {
  IErrors
} from './types'

interface IInput {
  testErrors: string
}

interface IExampleRules {
  name: string,
  displayName: string
}

export default function App (): JSX.Element {
  const [errors, setErrors] = useState<IErrors[]>([])
  const [input, setInput] = useState<IInput>({ testErrors: '' })

  const exampleRules = (
    { name, displayName }:
    IExampleRules
  ): any => yup.object().shape({
    [name]: yup
      .string()
      .required(() => ({
        message: `There was an error at ${displayName}`,
        name,
      }))
      .matches(/[0-9]/, () => ({
        message: `Only numbers allowed at ${displayName}`,
        name,
      }))
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleClick = async (): Promise<void> => {
    try {
      await exampleRules({ name: 'testErrors', displayName: 'Test Errors' })
        .validate(input)
    } catch (err) {
      console.log(err)
      if (err.name === 'ValidationError') {
        setErrors([...err.errors])
      }
    }
  }

  return (
    <div className='global-container'>
      <GlobalStyles />
      <ShowErrors errors={errors} />
      <AppTextInput
        name='testErrors'
        value={input.testErrors}
        onChange={handleChange}
        validatorErrors={errors}
        title='Please Enter A Number: '
      />
      <AppSubmitButton
        onClick={handleClick}
        text="Validate"
      />
    </div>
  )
}