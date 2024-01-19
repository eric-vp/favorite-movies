import { apiKey } from "./apiKey";

export const options = {
    method: 'GET',
    headers: {       
        accept: 'application/json',
        Authorization: apiKey
    }
}