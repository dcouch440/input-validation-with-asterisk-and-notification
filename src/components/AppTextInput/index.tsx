import React, { ReactElement } from 'react';
import hasError from "../../functions/hasError";

import {
  IErrors
} from "../../types";

import {
  Label,
  TextInput
} from './styles';

interface Props {
  autoComplete?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
  placeholder?: string
  label?: string;
  name: string;
  title: string;
  validatorErrors: IErrors[];
  props?: any;
}

export default function AppTextInput ({
    autoComplete,
    onChange,
    value,
    type = 'text',
    placeholder,
    label,
    name,
    title,
    validatorErrors,
    ...props
}: Props
): JSX.Element {

  return (
    <div>
      {
        title &&
          <h3>
            { title }
            {
              hasError({ errors: validatorErrors, name }) &&
              <span style={{color: 'red', fontSize: '30px'}}> *</span>
            }
          </h3>
      }
      <label>
        <Label>{ label }</Label>
        <TextInput
          autoComplete={autoComplete}
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => {
              onChange(e);
            }
          }
          {...props}
        />
      </label>
    </div>
  );
}
