import { configureStore } from '@reduxjs/toolkit'
import userReducer from './redux/userSlice'
import foodReducer from './redux/foodSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    food: foodReducer,
  },
})