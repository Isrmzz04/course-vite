import Axios from "axios"

export const httpService = Axios.create({
    baseURL: import.meta.env.VITE_BASE_PRODUCTS_URL
})