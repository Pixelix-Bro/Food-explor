import { createSlice } from '@reduxjs/toolkit'

export const BarsSlice = createSlice({
  name: 'Bars',
  initialState: false,

  reducers: {
    Opens: () => true,
    IsOpen: () => false,
  },
})

export const { Opens, IsOpen } = BarsSlice.actions
export default BarsSlice.reducer
