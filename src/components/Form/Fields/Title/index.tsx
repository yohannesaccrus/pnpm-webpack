import React from 'react';
import clsx from 'clsx';

import '@components/Form/Fields/Title/style.scss';

const Title = ({
  caption = 'Please enter title caption',
  initial = false,
}: {
  caption?: string;
  initial?: boolean;
}) => {
  return (
    <h4 className={clsx('field-title', initial && 'initial')}>{caption}</h4>
  );
};

export default Title;
