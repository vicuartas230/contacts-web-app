import axios from "axios";

const baseURL = process.env.ENDPOINT;

export const getFullData = async (id) => {
    const url = `${baseURL}/${id}`

    const res = await axios.get(url);
    return JSON.parse(res);
};
