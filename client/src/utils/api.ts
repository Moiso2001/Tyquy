/* Axios */
import axios from "axios"

/* Definitions */
import { FormType } from "../types/global"

export const BACKEND_URL = "http://localhost:3001"

export const sendMessage = async (form: FormType) => {    
    try {
        await axios.post(`${BACKEND_URL}/message`, form);
    } catch (error) {
        console.log(error)
    }
}