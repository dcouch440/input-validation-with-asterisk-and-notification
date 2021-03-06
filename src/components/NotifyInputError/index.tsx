import hasError from '../../functions/hasError'
import ErrorIcon from '@material-ui/icons/Error'

import {
  IErrors
} from '../../types'

interface INotifyInputError {
  name: string
  required: boolean
  validationErrors: IErrors[]
}

export default function NotifyInputError ({
  validationErrors,
  name,
  required
}: INotifyInputError
): JSX.Element | null {
  return (
    hasError({ validationErrors, name }) ?
      <ErrorIcon style={{ color: 'red' }} />
      :
      required ?
        <span style={{ color: 'red', fontSize: '30px' }}> *</span>
        :
        null
  )
}
