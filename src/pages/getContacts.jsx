import { Form } from "../components/form";
import { useState } from "react";
import { getContact } from "../api/contacts.api";

export function GetContacts() {
    const [contacts, setContacts] = useState([]);

    async function handleFormSubmit(data) {
        console.log(await getContact(26));
    };

    return (
        <div>
            <Form onSubmit={handleFormSubmit} />
        </div>
    );
};
