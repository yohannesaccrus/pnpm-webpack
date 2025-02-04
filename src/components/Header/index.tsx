import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';

import Logo from '@assets/logo/sppay.png';

import '@components/Header/style.scss';

const Header = () => {
  return (
    <header className="header">
      <section className="content">
        <BsChevronLeft className="back" />
        <img src={Logo} alt="Logo" className="logo" />
      </section>
    </header>
  );
};

export default Header;
