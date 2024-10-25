import axios from "axios";

const baseURL = "/contacts";
const backUpURL = "http://localhost:3001/queries"

export const getContact = async (firstName='', lastName='', email='', phone='', city='') => {
    let query = [];
    
    try {
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
    
        const q = `?q=${query.join(' AND ')}`;

        console.log("QUERY COMPLETED!!!!!", q);
    
        const res = await axios.get(`${baseURL}${q}`, {
            auth: {
                username: 'ICXCandidate',
                password: 'Welcome2024'
            }
        });

        console.log("AFTER QUERY TO THE API WITH AXIOS!!!!!", res);

        await axios.post(`${backUpURL}`, {
            query: q
        });

        return res;

    } catch (err) {
        console.error("Web service desconectado. Obteniendo datos de la base de datos de respaldo.");
        return axios.get(`${backUpURL}`);
    }
};
