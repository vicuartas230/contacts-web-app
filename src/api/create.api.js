import axios from "axios";
import { createObject } from "./helperFunctions";

const baseURL = process.env.REACT_APP_ENDPOINT;

export const createContact = async (
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
    
    return await axios.post(
        `${baseURL}`,
        body
    );
};
