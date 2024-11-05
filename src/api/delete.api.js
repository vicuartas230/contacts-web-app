import axios from "axios";

const baseURL = process.env.REACT_APP_ENDPOINT;

export const deleteContact = async id => {
    try {
        const res = await axios.delete(`${baseURL}/${id}`);

        if (res.status != 200) {
            throw new Error("Request failed");
        }

        return res;
    } catch (error) {
        console.error("Response error when deleting", error);
        throw error;
    }
}
