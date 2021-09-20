import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import favReducer from './favSlice'

export const store = configureStore({
  reducer: {
    isLogined: loginReducer,
    fav: favReducer
  },
})
