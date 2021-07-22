/*
  This functions is to check if an array of errors contains the of the input
  // yup validation error
  for example: [{ name: 'firstName', message: 'There was an error at First Name'}]

  // there are other ways to retrieves name through the error itself but this way the error handling can come through one linier function system. For example, errors can store array of errors and can be mapped through safely as long as the writer of the yup error keeps a constant form

*/

import {
  IErrors
} from '../../types'

interface IHasError extends IErrors {
  name: string
}

const hasError = (
  { validationErrors, name }:
  IHasError
): boolean => {
  return validationErrors
    .map(validationError => validationError.name)
    .filter(n => n === name)
    .length !== 0
}

export default hasError