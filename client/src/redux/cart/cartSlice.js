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

        addItem: (state, action) => {
            const doesItemExist = state.cart?.some(_item => _item.id === action.payload.id)
            if (doesItemExist) {
                const itemIndex = state.cart.findIndex(_item => _item.id === action.payload.id)
                state.cart[itemIndex] = { ...state.cart[itemIndex], quantity: state.cart[itemIndex]?.quantity + 1 }
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        increaseItemQuantity: (state, action) => {
            const itemIndex = state.cart.findIndex(_item => _item.id === action.payload)
            state.cart[itemIndex] = { ...state.cart[itemIndex], quantity: state.cart[itemIndex]?.quantity + 1 }
        },
        decreaseItemQuantity: (state, action) => {
            const itemIndex = state.cart.findIndex(_item => _item.id === action.payload)
            if (state.cart[itemIndex]?.quantity === 1) {
                state.cart = state.cart.filter(_item => _item.id !== action.payload)
            } else {
                state.cart[itemIndex] = { ...state.cart[itemIndex], quantity: state.cart[itemIndex]?.quantity - 1 }
            }
        },

    },
});

export const {
    addItem,
    openCart,
    closeCart,
    increaseItemQuantity,
    decreaseItemQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
