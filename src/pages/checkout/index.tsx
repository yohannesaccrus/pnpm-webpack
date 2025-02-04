import React from 'react';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';

import { setFormData } from '@store/formState';

import Layout from '@components/Layout';
import Form from '@components/Form';

// import LogoVisa from '@assets/logo/visa.png';
// import LogoMastercard from '@assets/logo/mastercard.png';
// import LogoJCB from '@assets/logo/jcb.png';
// import LogoAmex from '@assets/logo/amex.png';

import { FIELDS_CARD } from '@pages/checkout/configs/schema';
import { formatPrice } from '@pages/checkout/configs/functions';

import '@pages/checkout/configs/style.scss';

const CardAdd: React.FC = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: any) => state.form.error);

  const handleSubmit = (data: { [key: string]: string }) => {
    dispatch(setFormData(data));
  };

  const handleFormSubmit = () => {
    const submit = document.getElementById('submit');
    submit?.click();
  };

  return (
    <Layout>
      <div className="card info-credit">
        <section className="tips">
          <div className="icon">
            <IoShieldCheckmarkOutline />
          </div>
          <div className="caption">
            <p className="title">Your credit card details are protected.</p>
            <p>
              For transaction security, the process is encrypted and handled by
              bank. ShopeePay will not save your full card information.
              {error}
            </p>
          </div>
        </section>
        <section className="amount">
          <p>Beyond The Vines (Online)</p>
          <div className="price">
            <h4>Rp</h4>
            <h1>{formatPrice(2000000)}</h1>
          </div>
        </section>
        <section className="fee">
          <h4>Transaction Fee</h4>
        </section>
      </div>
      <div className="card form-details">
        <section className="card-detail">
          <Form schema={FIELDS_CARD} onSubmit={handleSubmit} hideSubmit />
        </section>
      </div>
      <div className="card info-deduct">
        <section>
          <p>
            Rp1.000 will be deducted as verification fee. It will be refunded to
            your card within 5 days.
          </p>
        </section>
      </div>
      <div className="card form-submit">
        <section className="checkout">
          <div className="caption">
            <p>Total Payment</p>
            <h3>
              <span>Rp</span> {formatPrice(2000000)}
            </h3>
          </div>
          <div className="action">
            <button onClick={() => handleFormSubmit()}>Pay Now</button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CardAdd;
