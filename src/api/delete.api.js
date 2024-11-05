import axios from "axios";

const baseURL = process.env.REACT_APP_ENDPOINT;

export const deleteContact = async id => {
    try {
        return await axios.delete(`${baseURL}/${id}`);
    } catch (error) {
        console.error("Response error when deleting", error);
        throw error;
    }
}
