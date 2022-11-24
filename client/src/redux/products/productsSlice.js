import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // general
    selectedCategory: "",
    products: null,
    productsWithCategories: null
};


export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setProductsWithCategories: (state, action) => {
            state.productsWithCategories = action.payload;
        },
    },
});

export const {
    setProducts,
    setProductsWithCategories
} = productSlice.actions;

export default productSlice.reducer;



