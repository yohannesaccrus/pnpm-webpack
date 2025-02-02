import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '@components/Layout';
import Form from '@components/Form';

import { setFormData } from '@store/formState';

import { FIELDS } from '@pages/card/add/configs/schema';

const CardAdd: React.FC = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: any) => state.form.formData);

  const handleFormSubmit = (data: { [key: string]: string }) => {
    dispatch(setFormData(data));
  };

  return (
    <Layout>
      <Form schema={FIELDS} onSubmit={handleFormSubmit} />
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
