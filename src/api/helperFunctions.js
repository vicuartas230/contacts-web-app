export const createObject = (
    firstName = '',
    lastName = '',
    email = '',
    phone = '',
    city = ''
) => {
    const body = {
        name: {
            first: firstName,
            last: lastName
        },
        phones: [
            {
                number: phone,
                phoneType: {
                    id: 1
                }
            }
        ],
        emails: [
            {
                address: email,
                addressType: {
                    id: 0
                }
            }
        ],
        address: {
            city: city,
            country: {
                lookupName: "CO"
            }
        }
    }

    return body;
};

export const getQuery = (
    firstName = '',
    lastName = '',
    email = '',
    phone = '',
    city = ''
) => {
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

    return `?q=${query.join(' AND ')}`
};
