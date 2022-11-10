import axios from 'axios'
const masterUrl = "https://localhost:44359/api/Master"
//GET ALL AIRLINES
export const getAllAirlines = (text, page) => {
    return axios.get(`${masterUrl}/Airlines?airlineName=${text}&page=${page}`)
}