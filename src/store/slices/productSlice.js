import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },

        setLoading: (state, action) => {
            state.loading = action.payload
        },
    }
})

export const selectProducts = (state) => state.product.products
export const selectLoading = (state) => state.product.loading

export const {
    setProducts,
    setLoading,
} = productSlice.actions

export const productReducer = productSlice.reducer