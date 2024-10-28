import { Form } from "../components/form";
import { createContact } from "../api/create.api";
import { Navigate, useNavigate } from "react-router-dom";
import { MessageModal } from "../components/messageModal";
import { useState } from "react";

export const CreateContact = () => {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (data) => {
        try {
            const res = await createContact(
                data.firstName,
                data.lastName,
                data.email,
                data.phone,
                data.city
            );
            setMessage('Contacto creado exitosamente!');
            setShow(true);
        } catch (error) {
            console.error(error);
        }
    };
    
    const handleClose = () => {
        setShow(false)
        navigate('/');
    };

    return (
        <div>
            <a href="/">Home</a>
            <Form onSubmit={handleSubmit} />
            {show && (
                <MessageModal
                    display={show}
                    message={message}
                    onClose={handleClose}
                />
            )}
        </div>
    );
};
