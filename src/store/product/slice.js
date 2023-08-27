import { createSlice } from "@reduxjs/toolkit"
import { getAll, getDetail } from "./action"

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        entities: [],
        entity: {
            title: '',
            description: '',
            batch: '',
            mentor: '',
            price: '',
            discount: '',
        },
        error: null
    },
    extraReducers: (builder) => builder
    .addCase(getAll.pending, (state) => {
        state.loading = true
    })
    .addCase(getAll.fulfilled, (state, { payload }) => {
        state.loading = false
        state.entities = payload
    })
    .addCase(getAll.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
    })
    // Detail
    .addCase(getDetail.pending, (state) => {
        state.loading = true
    })
    .addCase(getDetail.fulfilled, (state, { payload }) => {
        state.loading = false
        state.entity = payload
    })
    .addCase(getDetail.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
    })

})

export default productSlice.reducer