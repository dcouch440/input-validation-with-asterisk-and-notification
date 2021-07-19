import PropTypes from "prop-types";
import React from 'react';
import hasError from "../../functions/hasError";

import {
  Label,
  TextInput
} from './styles';

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
}) {

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
          onChange={onChange}
          {...props}
        />
      </label>
    </div>
  );
}

AppTextInput.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
};
