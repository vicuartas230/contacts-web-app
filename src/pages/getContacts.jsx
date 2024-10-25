import { Form } from "../components/form";
import { getContact } from "../api/get.api";
import { useNavigate } from "react-router-dom";

export function GetContacts() {
    const navigate = useNavigate();

    async function handleFormSubmit(data) {
        console.log("BEFORE CALL THE FUNCTION GET CONTACT OF THE API FILE.");
        const res = await getContact(data.firstName,
                                     data.lastName,
                                     data.email,
                                     data.phone,
                                     data.city);
        console.log("AFTER CALL THE FUNCTION GET CONTACT OF THE API FILE", res);
        if (!res.data.items.length) {
            alert("La búsqueda no arrojó ningún resultado");
            navigate('/');
        } else {
            navigate('/displayContacts', { state: { contacts: res.data.items } });
        }
    };

    return (
        <div>
            <a href="/create">Crear</a>
            <Form onSubmit={handleFormSubmit} />
        </div>
    );
};
