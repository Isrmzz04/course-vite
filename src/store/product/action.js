import { createAsyncThunk } from "@reduxjs/toolkit"
import { httpService } from "../../services/services"

export const getAll = createAsyncThunk("feat/getAllProducts", async () => {
    try {
        const response = await httpService.get("/products")
        return response.data
    } catch (err) {
        throw new Error(err)
    }

})

export const getDetail = createAsyncThunk("feat/getDetail", async (productId) => {
    try {
        const response = await httpService.get(`/products/${productId}`)
        return response.data
    } catch (err) {
        throw new Error(err)
    }
}) 