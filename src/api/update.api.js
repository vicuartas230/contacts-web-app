import axios from "axios";

const baseURL = "https://imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/contacts/";

export const updateContact = (id, firstName='', lastName='', email='', phone='', city='') => {
    let body = {};
    console.log(id);
    if (firstName) body["name"] = {first: firstName};
    if (lastName) body["name"] = {...body["name"], last: lastName};
    if (email) body["emails"] = {address: email};
    if (phone) body["phones"] = {number: phone};
    if (city) body["address"] = {city: city};
    console.log(body)
    return axios.patch(`${baseURL}${id}`,
        body,
    {
        auth: {
            username: 'ICXCandidate',
            password: 'Welcome2024'
        },
        headers: {
            'Content-Type': 'application/json'
        }
    }
)};
