/* Axios */
import axios from "axios"

/* Definitions */
import { FormType } from "../types/global"

export const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_API_URL

export const sendMessage = async (form: FormType) => {    
    try {
        await axios.post(`${BACKEND_URL}/email`, form);
    } catch (error) {
        console.log(error)
    }
}