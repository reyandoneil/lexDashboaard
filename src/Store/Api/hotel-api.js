import axios from "axios";
const hotelUrl = "https://localhost:44359/api/Master/Hotel"
//GET ALL HOTEL
export const findAllHotel = () => {
    return axios.get(hotelUrl)
}

export const createHotel = (payload) => {
    return axios.post(hotelUrl, payload)
}