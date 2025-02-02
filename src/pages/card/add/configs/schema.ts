import { PropsFormField } from '@base/components/Form/types';

export const FIELDS: PropsFormField[] = [
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
