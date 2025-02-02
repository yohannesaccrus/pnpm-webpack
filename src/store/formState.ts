import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  formData: { [key: string]: string } | null;
}

const initialState: FormState = {
  formData: null,
};

const formState = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<{ [key: string]: string }>) => {
      state.formData = action.payload;
    },
    resetFormData: (state) => {
      state.formData = null;
    },
  },
});

export const { setFormData, resetFormData } = formState.actions;
export default formState.reducer;
