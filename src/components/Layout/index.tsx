import React from 'react';

import Header from '@components/Header';

import { PropsLayoutComp } from '@components/Layout/types';

import '@components/Layout/style.scss';

const Layout = ({ children }: PropsLayoutComp) => {
  return (
    <div className="container">
      <Header />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
