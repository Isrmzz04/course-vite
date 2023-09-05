import Axios from "axios"

export const httpService = Axios.create({
    baseURL: "https://64eb63d3e51e1e82c5774b94.mockapi.io"
})