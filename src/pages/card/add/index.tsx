import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PropsFormField } from '@base/components/Form/types';

import Layout from '@components/Layout';
import Form from '@components/Form';

import { setFormData } from '@store/formState';

const CardAdd: React.FC = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: any) => state.form.formData);

  const formFields: PropsFormField[] = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Enter your name',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
    },
  ];

  const handleFormSubmit = (data: { [key: string]: string }) => {
    dispatch(setFormData(data));
  };

  return (
    <Layout>
      <Form schema={formFields} onSubmit={handleFormSubmit} />
      {formData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      )}
    </Layout>
  );
};

export default CardAdd;
