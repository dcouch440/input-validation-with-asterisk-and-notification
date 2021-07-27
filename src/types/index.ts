import React from 'react'

export interface IErrors {
  message: string
  name: string
}

export interface IHandleChange {
  handleChange: ({ name, value }: { name: string, value: any }) => void
}

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>

export type ClickEvent = React.MouseEvent<HTMLButtonElement>