export interface IErrors {
  validationErrors: {
    message: string
    name: string
  }[]
}

export interface IHandleChange {
  handleChange: ({ name, value }: { name: string, value: any }) => void
}
