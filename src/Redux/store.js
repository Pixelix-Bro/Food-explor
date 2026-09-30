import { configureStore } from '@reduxjs/toolkit'
import Bars from './BarsSlice'
import ProjectSlice from './ProductSlice'
export const store = configureStore({
  reducer: {
    counter: ProjectSlice,
    opens: Bars,
  },
})
