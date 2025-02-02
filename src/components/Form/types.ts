/* eslint-disable no-unused-vars */
import React, { JSX } from 'react';

export type PropsFormField = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'number' | 'textarea' | 'custom';
  placeholder: string;
  initialValue?: string;
  renderCustomInput?: (
    value: string,
    onChange: (e: React.ChangeEvent<any>) => void
  ) => JSX.Element;
};

export interface PropsFormComp {
  schema?: PropsFormField[];
  onSubmit?: (data: { [key: string]: string }) => void;
}
