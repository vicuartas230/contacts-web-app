import axios from "axios";

const baseURL = process.env.REACT_APP_ENDPOINT;

export const deleteContact = id => {
    return axios.delete(`${baseURL}/${id}`);
}
