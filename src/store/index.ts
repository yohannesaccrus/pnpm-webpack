// src/store/store.ts

import { configureStore } from '@reduxjs/toolkit';

import formReducer from '@store/formState';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
