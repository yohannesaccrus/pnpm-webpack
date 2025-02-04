import { PropsFormField } from '@base/components/Form/types';

export const FIELDS_CARD: PropsFormField[] = [
  {
    type: 'title',
    titleCaption: 'Card Details',
    titleInitial: true,
  },
  {
    name: 'card_number',
    type: 'text',
    fieldLabel: 'Card Number',
    fieldIcon: 'camera',
  },
  {
    name: 'card_expiry',
    type: 'text',
    fieldLabel: 'Expiry Date (MM/YY)',
    fieldWidth: 65,
  },
  {
    name: 'card_cvv',
    type: 'text',
    fieldLabel: 'CVV',
    fieldWidth: 35,
    fieldIcon: 'info',
  },
  {
    name: 'card_holder',
    type: 'text',
    fieldLabel: 'Name on Card',
    fieldLast: true,
  },
  {
    type: 'divide',
  },
  {
    type: 'title',
    titleCaption: 'Billing Address',
  },
  {
    name: 'address',
    type: 'text',
    fieldLabel: 'Address',
  },
  {
    name: 'postal_code',
    type: 'text',
    fieldLabel: 'Postal Code',
    fieldLast: true,
  },
  {
    type: 'divide',
  },
  {
    type: 'title',
    titleCaption: 'Personal Information',
  },
  {
    name: 'phone_number',
    type: 'text',
    fieldLabel: 'Phone Number',
  },
  {
    name: 'email',
    type: 'text',
    fieldLabel: 'Email',
    fieldLast: true,
  },
];
