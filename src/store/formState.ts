import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  formData: { [key: string]: string } | null;
  error: string | null;
}

const initialState: FormState = {
  formData: null,
  error: null,
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
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setFormData, resetFormData, setError, clearError } =
  formState.actions;
export default formState.reducer;
