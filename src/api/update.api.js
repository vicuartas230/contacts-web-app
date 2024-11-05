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
    
    try {
        const res = await axios.put(
            `${baseURL}/${id}`,
            body,
        );

        if (res.status != 200) {
            throw new Error("Request failed");
        }
    
        return res;
    } catch (error) {
        console.error("Response error when updating", error);
        throw error;
    }
};
