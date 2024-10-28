import { Form } from "../components/form";
import { getContact } from "../api/get.api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MessageModal } from "../components/messageModal";
import { ErrorModal } from "../components/errorModal";

export const GetContacts = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    const handleFormSubmit = async (data) => {
        if (Object.values(data).every((el) => !el)) {
            setError(true);
            setMessage('Debe diligenciar al menos uno de los campos del formulario');
        } else {
            const res = await getContact(data.firstName,
                data.lastName,
                data.email,
                data.phone,
                data.city);
            if ("items" in res.data) {
                if (!res.data.items.length) {
                    setShowModal(true);
                    setMessage('La búsqueda no arrojó ningún resultado');
                } else {
                    console.log(res);
                    navigate('/displayContacts', { state: { contacts: res.data.items } });
                }
            }
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setError(false);
        setMessage('');
        navigate('/');
    };

    return (
        <div>
            <a href="/create">Crear</a>
            <Form onSubmit={handleFormSubmit} />
            {showModal && (
                <MessageModal
                    display={showModal}
                    message={message}
                    onClose={handleCloseModal}
                />
            )}
            {error && (
                <ErrorModal
                    display={error}
                    message={message}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};
