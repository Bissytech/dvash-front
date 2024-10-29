import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalCost: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity, productname, productprice, coverimage } =
        action.payload;
      console.log(productname);
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId === -1) {
        state.items.push({
          productId,
          quantity,
          productname,
          productprice,
          coverimage,
        });
      } else {
        state.items[indexProductId].quantity += quantity;
      }
    },
    thetotalcost(state, action) {
      const { subtotal } = action.payload;
      state.totalCost = subtotal;
    },
    clearCart(state, action) {
        return {
          ...state,         
          items: [],         
          totalCost: 0       
        };
      },
      

    changeQuantity(state, action) {
      const { productId, updatedvalue } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );

      if (indexProductId !== -1) {
        if (updatedvalue > 0) {
          state.items = state.items.map((item, index) =>
            index === indexProductId
              ? { ...item, quantity: updatedvalue }
              : item
          );
        } else {
          state.items = state.items.filter(
            (item) => item.productId !== productId
          );
        }
      }
    },
   
  },
});
export const { addToCart, increaseQuantity, changeQuantity, thetotalcost, clearCart} =
  cartSlice.actions;
export default cartSlice.reducer;
