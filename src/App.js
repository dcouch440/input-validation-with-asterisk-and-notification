import AppTextInput from './components/AppTextInput'
import { useState } from 'react'
import ShowErrors from './components/ShowErrors'
import AppSubmitButton from './components/AppSubmitButton'
import * as yup from 'yup'
import GlobalStyles from './GlobalStyles'

export default function App () {
  const [errors, setErrors] = useState([])
  const [input, setInput] = useState({ testErrors: '' })

  const exampleRules = ({ name, displayName }) => yup.object().shape({
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

  const handleChange = ({ target: { name, value } }) => setInput(prev => ({
    ...prev,
    [name]: value
  }))

  const validate = async () => {
    try {
      await exampleRules({ name: 'testErrors', displayName: 'Test Errors' })
        .validate(input)
    } catch (err) {
      console.log(err)
      if (err.name === 'ValidationError') {
        setErrors([...err.errors]);
      }
    }
  }

  return (
    <div className='global-container'>
      <GlobalStyles />
      <ShowErrors errors={errors} />
      <AppTextInput
        name='testErrors'
        onChange={handleChange}
        validatorErrors={errors}
        title='Please Enter A Number'
      />
      <AppSubmitButton
        onClick={validate}
        text="Validate"
      />
    </div>
  );
}
