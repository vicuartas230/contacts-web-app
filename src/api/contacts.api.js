import axios from "axios";

const baseURL = "/contacts/";

export const getContact = (id) => {
    return axios.get(`${baseURL}${id}`, {
        auth: {
            username: 'ICXCandidate',
            password: 'Welcome2024'
        }
    });
}
