/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import { setError } from '@store/formState';

import { PropsFormComp, PropsFormField } from '@components/Form/types';

import FieldInput from '@components/Form/Fields/Input';
import FieldInputCardNumber from '@components/Form/Fields/CardNumber';
import Divide from '@components/Form/Fields/Divide';
import Title from '@components/Form/Fields/Title';
import FieldIcon from '@components/Form/Fields/Icon';

import '@components/Form/style.scss';

const Form = ({ schema, hideSubmit, onSubmit }: PropsFormComp) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(
    schema?.reduce(
      (acc, field) => {
        acc[field.name || ''] = field.initialValue || '';
        return acc;
      },
      {} as { [key: string]: string }
    )
  );

  const convertRemoveEmptyKey = (obj: { [key: string]: string }) => {
    for (let key in obj) {
      if (key === '') {
        delete obj[key];
      }
    }
    return obj;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (formData && onSubmit) {
      e.preventDefault();
      onSubmit(convertRemoveEmptyKey(formData));
      console.log(convertRemoveEmptyKey(formData));
    }
  };

  const renderInput = (field: PropsFormField) => {
    if (formData) {
      switch (field.type) {
        case 'text':
        case 'email':
        case 'number':
          return (
            <FieldInput
              type={field.type}
              id={field.name || ''}
              name={field.name || ''}
              value={formData[field.name || ''] || ''}
              placeholder={field.placeholder || ''}
              onChange={handleChange}
            />
          );
        case 'card_number':
          return (
            <FieldInputCardNumber
              type={field.type}
              id={field.name || ''}
              name={field.name || ''}
              value={formData[field.name || ''] || ''}
              placeholder={field.placeholder || ''}
              onChange={handleChange}
            />
          );
        case 'divide':
          return <Divide />;
        case 'title':
          return (
            <Title caption={field.titleCaption} initial={field.titleInitial} />
          );
        case 'custom':
          return field.renderCustomInput
            ? field.renderCustomInput(formData[field.name || ''], handleChange)
            : null;
        default:
          return <input type="text" id={field.name} name={field.name} />;
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {/* {error && <p className="error">{error}</p>} */}

      {schema?.map((field: PropsFormField) => (
        <div
          key={field.name}
          className={clsx(
            'form-group',
            field.type,
            field.fieldLast && 'last',
            `width-${field.fieldWidth}`
          )}
        >
          {renderInput(field)}
          {field.fieldLabel && (
            <label htmlFor={field.name} className="field-label">
              {field.fieldLabel}
            </label>
          )}
          {field.fieldIcon && <FieldIcon icon={field.fieldIcon} />}
        </div>
      ))}
      {onSubmit && (
        <button
          type="submit"
          className={clsx('submit-btn', hideSubmit && 'hide')}
          id="submit"
        >
          Submit
        </button>
      )}
    </form>
  );
};

export default Form;
