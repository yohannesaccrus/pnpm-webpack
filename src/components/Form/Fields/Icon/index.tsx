import React from 'react';

import { BsQuestionCircle, BsCamera } from 'react-icons/bs';

import '@components/Form/Fields/Icon/style.scss';

const FieldIcon = ({ icon }: { icon: string }) => {
  const ICONS: { [key: string]: React.ReactElement } = {
    camera: <BsCamera className="field-icon" />,
    info: <BsQuestionCircle className="field-icon" />,
  };

  return ICONS[icon];
};

export default FieldIcon;
