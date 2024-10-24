import axios from "axios";

const baseURL = "/contacts/";

export const getContact = (firstName='', lastName='', email='', phone='', city='') => {
    let query = [];
    
    if (firstName) {
        const firstNameElements = firstName.split(' ');
        query.push(
            firstNameElements.length > 1 ?
            `name.first='${firstNameElements[0]} ${firstNameElements[1]}'` :
            `name.first='${firstNameElements[0]}'`
        );
    }
    
    if (lastName) {
        const lastNameElements = lastName.split(' ');
        query.push(
            lastNameElements.length > 1 ?
            `name.last='${lastNameElements[0]} ${lastNameElements[1]}'` :
            `name.last='${lastNameElements[0]}'`
        );
    }

    if (email) query.push(`emails.address='${email}'`);
    if (phone) query.push(`phones.number='${phone}'`);
    if (city) query.push(`address.city='${city}'`);

    const q = `?q=${query.join(' AND ')}`
    console.log(q);
    return axios.get(`${baseURL}${q}`, {
        auth: {
            username: 'ICXCandidate',
            password: 'Welcome2024'
        }
    });
}
