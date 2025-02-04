/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import clsx from 'clsx';

import { PropsFormField } from '@components/Form/types';

const FieldInput = ({
  type,
  id,
  name,
  value,
  onChange,
  placeholder,
}: {
  type: PropsFormField['type'];
  id: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const formatInput = (inputValue: string) => {
    const numericValue = inputValue.replace(/\s/g, '').replace(/[^\d]/g, ''); // Remove non-numeric characters except spaces
    const containsNonNumeric = inputValue.replace(/\s/g, '') !== numericValue;

    const formattedValue = numericValue.match(/.{1,4}/g)?.join(' ') || '';

    return { formattedValue, containsNonNumeric };
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputValue = e.target.value;
    if (inputValue.length > 19) {
      return;
    }
    const { formattedValue, containsNonNumeric } = formatInput(inputValue);
    if (containsNonNumeric) {
      setErrorMessage('Please input only numbers');
    } else {
      setErrorMessage('');
      onChange({
        ...e,
        target: {
          ...e.target,
          name: name,
          value: formattedValue,
        },
      });
    }
  };
  return (
    <>
      {errorMessage && <p className="field-error">{errorMessage}</p>}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
        maxLength={19}
        className={clsx('field-input', value && 'filled')}
      />
    </>
  );
};

export default FieldInput;
