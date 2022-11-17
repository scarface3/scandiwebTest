import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // general
    isCartOpen: false,
    cart: []
};


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        openCart: (state) => {
            state.isCartOpen = true;
        },
        closeCart: (state) => {
            state.isCartOpen = false;
        },

        addAccount: (state, action) => {
            state.accounts = action.payload;
        },
    },
});

export const {
    openCart,
    closeCart
} = cartSlice.actions;

export default cartSlice.reducer;
