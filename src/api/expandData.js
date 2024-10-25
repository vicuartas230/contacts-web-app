import axios from "axios";

const baseURL = 'https://imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/contacts/';

export const getFullData = async (id) => {
    const fullData = {};
    const configRequest = {
        auth: {
            username: 'ICXCandidate',
            password: 'Welcome2024'
        }
    };

    const res = await axios.get(`${baseURL}${id}`, configRequest);

    console.log("Initial res: ",res);

    const emailsLink = res.data.phones.links.find(link => link.rel === 'self')?.href;
    const phonesLink = res.data.emails.links.find(link => link.rel === 'self')?.href;

    if (emailsLink) {
        const emailsRes = await axios.get(emailsLink, configRequest);
        console.log("Email res: ", emailsRes);
    }

    if (phonesLink) {
        const phonesRes = await axios.get(phonesLink, configRequest);
        console.log("Phones res: ", phonesRes);
    }
};
