interface Props {
  name: string
  pageIndex?: number | undefined
  message: string
  nameOfObject: string
}

export default class CustomError extends Error {
  name: string
  pageIndex: number | undefined
  message: string
  date: object
  error: {
    name: string
    message: string
  }
  constructor (props: Props, ...params: any) {
    super(params)
    const { name, pageIndex, message, nameOfObject } = props

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError)
    }

    this.name = name || ''
    this.pageIndex = pageIndex
    this.message = message || ''
    this.date = new Date()
    this.error = {
      name: nameOfObject,
      message
    }
  }
}