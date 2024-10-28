import axios from "axios";

const baseURL = "/contacts";

export const createContact = (firstName='', lastName='', email='', phone='', city='') => {
    // let body = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     phone: phone,
    //     city: city
    // };
    const body = {};
    if (firstName) body["name"] = {first: firstName};
    if (lastName) body["name"] = {...body["name"], last: lastName};
    if (email) body["emails"] = {address: email};
    if (phone) body["phones"] = {number: phone};
    if (city) body["address"] = {city: city};

    return axios.post(`${baseURL}`,
        body,
        {
            auth:{
                username: 'ICXCandidate',
                password: 'Welcome2024'
            }
        }
    );
};
