import axios from "axios";
import { createObject } from "./helperFunctions";

const baseURL = "/contacts/";

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
    return axios.patch(`${baseURL}${id}`,
        body,
    {
        auth: {
            username: 'ICXCandidate',
            password: 'Welcome2024'
        },
        headers: {
            'Content-Type': 'application/json'
        }
    }
)};
