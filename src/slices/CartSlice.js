import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "CartItems",
  initialState: {
    items: [],
  },
  reducers: {
    Add_To_Cart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === existingItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    },
    Delete_From_Cart(state, action) {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    },
    Change_Quantity(state, action) {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      const filteredItems = updatedItems.filter((item) => item.quantity > 0);
      return {
        ...state,
        items: filteredItems,
      };
    },
  },
});

export const { Add_To_Cart, Delete_From_Cart, Change_Quantity } =
  CartSlice.actions;
export default CartSlice.reducer;
