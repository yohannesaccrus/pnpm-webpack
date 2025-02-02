import React from 'react';

import Header from '@components/Header';
import Footer from '@components/Footer';

import { PropsLayoutComp } from '@components/Layout/types';

import '@components/Layout/style.scss';

const Layout = ({ children }: PropsLayoutComp) => {
  return (
    <div className="container">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
