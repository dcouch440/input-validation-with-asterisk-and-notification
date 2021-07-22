import {
  IErrors
} from '../../types'

import {
  ErrorListTitle,
  ErrorList
} from './styles'

export default function ShowErrors ({
  validationErrors
}: IErrors
): JSX.Element | null {
  if (validationErrors.length) {
    return (
      <div>
        <ErrorListTitle>Your submission was not sent</ErrorListTitle>
        {
          validationErrors.map((
              { message }:
              { message: string }, i: number
            ) => {
              return (
                <ErrorList key={i}>
                { message }
                </ErrorList>
              )
            }
          )
        }
      </div>
    )
  } else {
    return null
  }
}
