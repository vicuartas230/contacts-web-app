import axios from "axios";
import { getQuery } from "./helperFunctions";

const baseURL = process.env.ENDPOINT;

export const getContact = async (
    firstName,
    lastName,
    email,
    phone,
    city
) => {
    try {
        const q = getQuery(
            firstName,
            lastName,
            email,
            phone,
            city
        );

        return await axios.get(`${baseURL}${q}`);

    } catch (err) {
        console.error("Web service desconectado. Obteniendo datos de la base de datos de respaldo.");
    }
};
