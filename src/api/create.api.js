import axios from "axios";
import { createObject } from "./helperFunctions";

const baseURL = process.env.ENDPOINT;

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
    
    return axios.post(
        `${baseURL}`,
        body
    );
};
