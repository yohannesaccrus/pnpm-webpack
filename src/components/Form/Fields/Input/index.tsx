/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
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
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={clsx('field-input', value && 'filled')}
    />
  );
};

export default FieldInput;
