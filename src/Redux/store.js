import { configureStore } from '@reduxjs/toolkit'
import ProjectSlice from './ProductSlice'
export const store = configureStore({
  reducer: {
    counter: ProjectSlice,
  },
})
