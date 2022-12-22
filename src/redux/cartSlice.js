import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.data.push(action.payload);
    },
    deleteClotheFromCart: (state, action) => {
      state.data = state.data.filter((clothe) => {
        return clothe.id !== action.payload;
      });
    },
  },
});

export const { addToCart, deleteClotheFromCart } = cartSlice.actions;

export default cartSlice.reducer;
