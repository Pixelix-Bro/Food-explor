import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: {},
}

const ProductSlice = createSlice({
  name: 'cardcounter',
  initialState,

  reducers: {
    increment: (state, action) => {
      const id = action.payload

      state.count[id] = (state.count[id] || 0) + 1
    },

    decrement: (state, action) => {
      const id = action.payload

      if (state.count[id] > 0) {
        state.count[id] -= 1
      }
    },

    order: (state, action) => {
      const id = action.payload

      if (state.count[id] > 0) {
        state.count[id] = 0
      }
    },
  },
})

export const { increment, decrement, order } = ProductSlice.actions
export default ProductSlice.reducer
