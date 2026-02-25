import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], 
  },
  reducers: {
    addItem: (state, action) => {
      const plant = {
        name:action.payload.name,
        image:action.payload.image,
        description:action.payload.description,
        cost:action.payload.cost,
        quantity:1
      }
      state.items.push(plant)
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload.name)
      
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(
        item => item.name === action.payload.name
      );
      
      if(item){
        item.quantity = action.payload.quantity
        if(item.quantity<= 0){
          state.items = state.items.filter((i)=>
          i.name !== item.name
        )};
      }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
