import axios from "axios";
import { RAPID_API_KEY } from "../constants";

const BASE_URL = "https://exercisedb.p.rapidapi.com";

const apiCall = async (url, params) => {
    try {
        const options = {
            method: 'GET',
            url,
            params,
            headers: {
                'x-rapidapi-key': RAPID_API_KEY,
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            }
        }

        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log('error---', error);
        
    }
}

export const fetchExercisesByBodyPart = async (bodyPart) => {
    let data = await apiCall(BASE_URL + `/exercises/bodyPart/${bodyPart}`);
    return data;
}