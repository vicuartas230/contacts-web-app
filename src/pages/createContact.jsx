import { Form } from "../components/form";
import { createContact } from "../api/create.api";
import { Navigate } from "react-router-dom";

export function CreateContact() {
    const handleSubmit = async (data) => {
        const res = await createContact(data.firstName,
                                        data.lastName,
                                        data.email,
                                        data.phone,
                                        data.city);
        console.log(res);
    }
    return (
        <div>
            <a href="/">Home</a>
            <Form onSubmit={handleSubmit} />
        </div>
    )
};
