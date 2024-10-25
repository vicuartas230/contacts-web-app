import axios from "axios";

const baseURL = '/contacts/';

export const getFullData = async (id) => {
    const url = `${baseURL}${id}`
    const fullData = {};
    const configRequest = {
        auth: {
            username: 'ICXCandidate',
            password: 'Welcome2024'
        }
    };

    const res = await axios.get(url, configRequest);

    fullData.firstName = res.data.name.first;
    fullData.lastName = res.data.name.last;
    fullData.city = res.data.address.city;

    
    const emailsLink = res.data.phones.links.find(link => link.rel === 'self')?.href;
    const phonesLink = res.data.emails.links.find(link => link.rel === 'self')?.href;
    
    if (emailsLink) {
        const emailsRes = await axios.get(
            `${url}/emails`,
            configRequest
        );
        const emailsList = emailsRes.data.items
        if (emailsList.length) {
            const email = await axios.get(
                `${url}/emails/0`,
                configRequest
            );
            fullData.email = email.data.address;
        }
    }
    
    if (phonesLink) {
        const phonesRes = await axios.get(
            `${url}/phones`,
            configRequest
        );
        const phonesList = phonesRes.data.items;
        if (phonesList.length) {
            const phone = await axios.get(
                `${url}/phones/1`,
                configRequest
            );
            fullData.phone = phone.data.number;
        }
    }
    return fullData;
};
