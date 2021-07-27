import NotifyInputError from '../NotifyInputError'

import {
  IErrors,
  IHandleChange
} from '../../types'

import {
  Label,
  TextInput
} from './styles'

interface Props extends IHandleChange {
  autoComplete?: string
  value: string
  type?: string
  placeholder?: string
  label?: string
  name: string
  title: string
  validationErrors: IErrors[]
}

export default function AppTextInput ({
    autoComplete,
    handleChange,
    value,
    type = 'text',
    placeholder,
    label,
    name,
    title,
    validationErrors
}: Props
): JSX.Element {

  return (
    <div>
      {
        title &&
          <h3>
            { title }
            <NotifyInputError
              required={true}
              validationErrors={validationErrors}
              name={name}
            />
          </h3>
      }
      <label>
        <Label>{ label }</Label>
        <TextInput
          autoComplete={autoComplete}
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target
            handleChange({ name, value })
          }}
        />
      </label>
    </div>
  )
}
