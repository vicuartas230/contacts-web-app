import { Form } from "../components/form";
import { getContact } from "../api/get.api";
import { useNavigate } from "react-router-dom";

export function GetContacts() {
    const navigate = useNavigate();

    async function handleFormSubmit(data) {
        const res = await getContact(data.firstName,
                                     data.lastName,
                                     data.email,
                                     data.phone,
                                     data.city);
        navigate('/displayContacts', { state: { contacts: res.data.items } });
    };

    return (
        <div>
            <a href="/create">Crear</a>
            <Form onSubmit={handleFormSubmit} />
        </div>
    );
};
