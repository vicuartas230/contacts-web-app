import { Form } from "../components/form";
import { updateContact } from '../api/update.api'
import { useNavigate, useParams } from "react-router-dom";

export function UpdateContact() {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleSubmit = async (data) => {
        const res = await updateContact(id,
                                        data.firstName,
                                        data.lastName,
                                        data.email,
                                        data.phone,
                                        data.city);
        console.log(res);
        navigate('/contactUpdated', { state: {contacts: res} })
    }

    return (
        <div>
            <a href="/">Home</a>
            <br/>
            <a href="/create">Create</a>
            <Form onSubmit={handleSubmit} />
        </div>
    )
};
