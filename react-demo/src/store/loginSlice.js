import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem('user') ? true : false,
}
export const loginSlice = createSlice({
  name: 'isLogined',
  initialState,
  reducers: {
    toggleLogin: (state, value) => {
      state.value = value.payload;
    }
  },
});

export const { toggleLogin } = loginSlice.actions

export default loginSlice.reducer;
