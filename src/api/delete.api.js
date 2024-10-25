import axios from "axios";

const baseURL = '/contacts/';

export const deleteContact = id => {
    return axios.delete(`${baseURL}${id}`, {
        auth: {
            username: 'ICXCandidate',
            password: 'Welcome2024'
        }
    });
}
