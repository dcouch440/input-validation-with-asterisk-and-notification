import CustomError from './index'

describe('CustomError', () => {
  it('Creates an object that throws an error', () => {
    const name: string = 'ValidationError'
    const nameOfObject: string = 'testErrors'
    const message: string = 'There was an Error'
    const pageIndex: number = 0
    const returnedError: {
      message: string
      name: string
    } = {
      message,
      name: nameOfObject
    }
    const checkIfError = () => {
      try {
        throw new CustomError({
          name,
          nameOfObject,
          message,
          pageIndex
        })
      } catch (err) {
        return err
      }
    }
    const error = checkIfError()
    expect(error.name).toEqual(name)
    expect(error.error).toEqual(returnedError)
    expect(error.message).toEqual(message)
    expect(error.pageIndex).toEqual(pageIndex)

  })
})