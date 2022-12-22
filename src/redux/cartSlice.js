import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  data:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.data.push(action.payload)
    },
    deleteToCart: (state, action) => {
      state.data.remove(action.payload)
    },
   
  },
})

export const { addToCart, deleteToCart} = cartSlice.actions

export default cartSlice.reducer