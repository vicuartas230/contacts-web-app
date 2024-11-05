export const createObject = (
    firstName = '',
    lastName = '',
    email = '',
    phone = '',
    city = ''
) => {
    const body = {};

    if (firstName || lastName) {
        body.name = {
            ...(firstName && { first: firstName }),
            ...(lastName && { last: lastName })
        };
    }

    if (email) {
        body.emails = { address: email };
    }

    if (phone) {
        body.phones = { number: phone };
    }

    if (city) {
        body.address = { city: city };
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
