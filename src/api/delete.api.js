import axios from "axios";

const baseURL = 'https://imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/contacts/';

export const deleteContact = id => {
    return axios.delete(`${baseURL}${id}`, {
        auth: {
            username: 'ICXCandidate',
            password: 'Welcome2024'
        }
    });
}
