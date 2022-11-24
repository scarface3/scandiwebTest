import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // general
    currentCurrency: {
        label: "USD",
        symbol: "$"
    },
    currencyList: []
};


export const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {

        setCurrencyList: (state, action) => {
            state.currencyList = action.payload;
        },

        setSelectedCurrency: (state, action) => {
            state.currentCurrency = action.payload;
        },

    },
});

export const {
    setCurrencyList,
    setSelectedCurrency
} = currencySlice.actions;

export default currencySlice.reducer;
