import axios from "axios";
import { createObject } from "./helperFunctions";

const baseURL = "/contacts";

export const createContact = (
    firstName,
    lastName,
    email,
    phone,
    city
) => {
    const body = createObject(
        firstName,
        lastName,
        email,
        phone,
        city
    );
    
    return axios.post(`${baseURL}`,
        body,
        {
            auth:{
                username: 'ICXCandidate',
                password: 'Welcome2024'
            }
        }
    );
};
