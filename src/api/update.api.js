import axios from "axios";
import { createObject } from "./helperFunctions";

const baseURL = process.env.REACT_APP_ENDPOINT;

export const updateContact = async (
    id,
    firstName,
    lastName,
    email,
    phone,
    city
) => {
    let body = createObject(
        firstName,
        lastName,
        email,
        phone,
        city
    );
    
    const res = await axios.put(
        `${baseURL}/${id}`,
        body,
    );

    console.log("EDIT RESPONSE: ", res);

    return res;
};
