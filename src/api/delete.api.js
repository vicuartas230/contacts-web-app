import axios from "axios";

const baseURL = process.env.ENDPOINT;

export const deleteContact = id => {
    return axios.delete(`${baseURL}/${id}`);
}
