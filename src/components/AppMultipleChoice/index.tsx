import React, { useState } from 'react'
import NotifyInputError from '../NotifyInputError'

import {
  ChangeEvent,
  IErrors,
  IHandleChange
} from '../../types'

import {
  CheckboxContainer,
  CheckboxList
} from './styles'

// SEE INTEREST IN PAGES

interface IMultipleChoice extends IHandleChange {
  obj: any
  category: string
  optionsLabelsArray: string[][]
  title: string
  selectAllOption?: boolean
  renderAdditional?: JSX.Element
  validationErrors: IErrors[]
}

export default function MultipleChoice ({
  obj,
  category,
  handleChange,
  optionsLabelsArray,
  title,
  selectAllOption,
  renderAdditional,
  validationErrors
}: IMultipleChoice
): JSX.Element {
  const [selectAll, setSelectAll] = useState(false)

  const handleSelectAll = () => {
    const changeAll = (
      { bool }:
      { bool: boolean }
    ) => {
      const objectConvertedToTrueArray = Object
        .keys(obj[category]).map(
          key => ({ [key]: bool })
        )
      return Object.assign(
        {},
        ...objectConvertedToTrueArray,
      )
    }

    if (selectAll === false) {
      setSelectAll(true)
      handleChange({
        name: category,
        value: changeAll({ bool: true })
      })
    } else {
      setSelectAll(false)
      handleChange({
        name: category,
        value: changeAll({ bool: false })
      })
    }
  }

  const handleCheckboxChange = (e: ChangeEvent) => {
    if (e.target.type === 'checkbox') {
      const { name, checked } = e.target
      const newData = {
        ...obj[category],
        [name]: checked
      }
      handleChange({
        name: category,
        value: newData
      })
    } else if (e.target.type === 'input') {
      const { name, value } = e.target
      const newData = {
        ...obj[category],
        [name]: value
      }
      handleChange({
        name: category,
        value: newData
      })
    }
  }

  const options = optionsLabelsArray.map(([option, label]: string[], i: number) => {
    return (
      <li key={i}>
        <input
            type="checkbox"
            name={option}
            checked={obj[category][option]}
            onChange={handleCheckboxChange}
          />
        { label }
      </li>
    )
  })

  return (
    <CheckboxContainer>
      <h3>
        { title }
        <NotifyInputError
          name={category}
          validationErrors={validationErrors}
          required={true}
        />
      </h3>
      <CheckboxList>
        { options }
        {/* addition stuff can be rendered here by putting them into the argument and they will work just if they where in the outside. this way this can be used for whatever */}
        { renderAdditional }
        {/* select all option - clicking will make all values true */}
        {
          selectAllOption &&
          <li>
            <input
              type='checkbox'
              checked={selectAll}
              onChange={handleSelectAll}
            />
            Select All
          </li>
        }
      </CheckboxList>
    </CheckboxContainer>
  )
}
