import axios from "axios";

const baseURL = process.env.REACT_APP_ENDPOINT;

export const getFullData = async (id) => {
    const url = `${baseURL}/${id}`

    cont res = await axios.get(url);
    console.log(res);
    return res;
};
