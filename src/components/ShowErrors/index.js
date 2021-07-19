import React from 'react';

import {
  ErrorListTitle,
  ErrorList
} from './styles';

export default function ShowErrors ({ errors }) {
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
