import hasError  from './index'

describe('hasError', () => {
  it('should return true if the name is found in the list of errors', () => {
    const name: string = 'test1'
    const validationErrors: {
      message: string
      name: string
    }[] = [{
      message: 'There was an error',
      name: 'test1'
    }]
    expect(hasError({ name, validationErrors })).toEqual(true)
  })
  it('should return false if no errors are found', () => {
    const name: string = 'test2'
    const validationErrors: {
      message: string
      name: string
    }[] = [{
      message: 'There was an error',
      name: 'test1'
    }]
    expect(hasError({ name, validationErrors })).toEqual(false)
  })
})