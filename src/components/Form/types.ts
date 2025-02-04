/* eslint-disable no-unused-vars */
import React, { JSX } from 'react';

export type PropsFormField = {
  name?: string;
  type:
    | 'text'
    | 'email'
    | 'number'
    | 'textarea'
    | 'divide'
    | 'title'
    | 'custom';
  placeholder?: string;
  initialValue?: string;
  fieldLabel?: string;
  fieldLast?: boolean;
  fieldWidth?: 25 | 35 | 50 | 65 | 75;
  fieldIcon?: string;
  titleCaption?: string;
  titleInitial?: boolean;
  renderCustomInput?: (
    value: string,
    onChange: (e: React.ChangeEvent<any>) => void
  ) => JSX.Element;
};

export interface PropsFormComp {
  schema?: PropsFormField[];
  onSubmit?: (data: { [key: string]: string }) => void;
  hideSubmit?: boolean;
}
