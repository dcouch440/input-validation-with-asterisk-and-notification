import { IErrors } from '../../types';

import {
  ErrorListTitle,
  ErrorList
} from './styles';

interface Props {
  errors: IErrors[]
}

export default function ShowErrors ({ 
  errors
}: Props
): JSX.Element | null {
  if (errors.length) {
    return (
      <div>
        <ErrorListTitle>Your submission was not sent</ErrorListTitle>
        {
          errors.map(({ message }, i) => {
            return (
              <ErrorList key={i}>
              { message }
            </ErrorList>
            );
          })
        }
      </div>
    )
  } else {
    return null
  }
}
