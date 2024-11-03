import axios from "axios";
import { createObject } from "./helperFunctions";

const baseURL = process.env.REACT_APP_ENDPOINT;

export const updateContact = (
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
    return axios.patch(
        `${baseURL}/${id}`,
        body,
    )};
