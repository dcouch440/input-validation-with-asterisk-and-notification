import CustomError from '../../classes/CustomError'
import mustSelectOne  from './index'

describe('mustSelectOne', () => {
  it('should return an error if none are selected', () => {
    const name: string = 'test'
    const obj: {
      test: {
        key1: boolean
        key2: boolean
      }
    } = {
      test: {
        key1: false,
        key2: false
      }
    }
    const testThrow = () => {
      try {
        mustSelectOne({ obj, name, pageIndex: 0 })
      } catch (err) {
        return err
      }
    }
    expect(testThrow()).toBeInstanceOf(CustomError)
  })
  it('should pass through errors if the users there at least one true', () => {
    const name: string = 'test'
    const obj: {
      test: {
        key1: boolean
        key2: boolean
      }
    } = {
      test: {
        key1: true,
        key2: false
      }
    }
    expect(mustSelectOne({ obj, name, pageIndex: 0 })).toEqual(undefined)
  })
})