/* eslint-disable no-undef */
import React, { useState } from 'react';
import { PropsFormComp, PropsFormField } from '@components/Form/types';

import Input from '@components/Form/Fields/Input';

const Form = ({ schema, onSubmit }: PropsFormComp) => {
  const [formData, setFormData] = useState(
    schema?.reduce(
      (acc, field) => {
        acc[field.name] = field.initialValue || '';
        return acc;
      },
      {} as { [key: string]: string }
    )
  );
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (formData && onSubmit) {
      e.preventDefault();
      if (Object.values(formData).some((value) => value.trim() === '')) {
        setError('Please fill in all fields.');
        return;
      }
      setError(null);
      onSubmit(formData);
    }
  };

  const renderInput = (field: PropsFormField) => {
    if (formData) {
      switch (field.type) {
        case 'text':
        case 'email':
        case 'number':
          return (
            <Input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              placeholder={field.placeholder}
              onChange={handleChange}
            />
          );
        case 'custom':
          return field.renderCustomInput
            ? field.renderCustomInput(formData[field.name], handleChange)
            : null;
        default:
          return <input type="text" id={field.name} name={field.name} />;
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {error && <p className="error">{error}</p>}

      {schema?.map((field: PropsFormField) => (
        <div key={field.name} className="form-group">
          <label htmlFor={field.name}>{field.label}</label>
          {renderInput(field)}
        </div>
      ))}

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default Form;
