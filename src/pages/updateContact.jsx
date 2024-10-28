import { Form } from "../components/form";
import { updateContact } from '../api/update.api'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { MessageModal } from "../components/messageModal";

export const UpdateContact = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { contact } = location.state;
    const id = useParams();
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (data) => {
        try {
            const res = await updateContact(
                id,
                data.firstName,
                data.lastName,
                data.email,
                data.phone,
                data.city
            );
            console.log(res);
            setMessage('Contacto editado correctamente!');
            setIsSent(true);
        } catch (error) {
            console.error(error);
        }
    };

    const handleClose = () => {
        setIsSent(false);
        navigate('/');
    };

    return (
        <div className="container">
            <a href="/">Home</a>
            <br/>
            <a href="/create">Create</a>
            <h2>Editar Contacto</h2>
            <Form 
                onSubmit={handleSubmit}
                contact={contact}
            />
            {isSent && (
                <MessageModal
                    display={isSent}
                    message={message}
                    onClose={handleClose}
                />
            )}
        </div>
    )
};
