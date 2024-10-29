import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteContact } from "../api/delete.api";
import { ConfirmDialog } from "../components/confirmDialog";
import { useState } from "react";

export const DisplayContact = () => {
    const location = useLocation();
    const { contact } = location.state;
    const navigate = useNavigate();
    const contactId = useParams().id;
    const [open, setOpen] = useState(false);
    const [error, setError] = useState('');
    const [isDeleted, setIsDeleted] = useState('');

    const handleDelete = async () => {
        try {
            const res = await deleteContact(contactId);
            setIsDeleted('Contacto eliminado correctamente!');
            setTimeout(() => {
                navigate('/');
            }, 4000);
        } catch (error) {
            console.error(error);
            setError('No fue posible eliminar el contacto.')
            setTimeout(() => {
                setError('');
            }, 4000);
        }
    };

    const handleDeleteClick = () => {
        setOpen(true);
    };

    const handleEdit = () => {
        navigate(`/update/${contactId}`, {state: { item: contact }});
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <div className="container d-flex flex-column align-items-center p-5">
            <h1 className="text-center">Información del Contacto</h1>
            {error && <p className="alert alert-danger text-center">{error}</p>}
            <div className="card w-25 mt-3">
                <h4 className="card-header text-center">{contact.firstName} {contact.lastName}</h4>
                <div className="card-body">
                    <div className="row">
                        <h6 className="card-title">{contact.email && "Correo Electrónico:"}</h6>
                        <p className="card-text">{contact.email}</p>
                    </div>
                    <div className="row">
                        <h6 className="card-title">{contact.phone && "Teléfono:"}</h6>
                        <p className="card-text">{contact.phone}</p>
                    </div>
                    <div className="row">
                        <h6 className="card-title">{contact.city && "Ciudad:"}</h6>
                        <p className="card-text">{contact.city}</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-success m-2" onClick={handleEdit}>Editar</button>
                        <button className="btn btn-danger m-2" onClick={handleDeleteClick}>Eliminar</button>
                    </div>
                </div>
            </div>
            <ConfirmDialog
                open={open}
                onConfirm={handleDelete}
                onCancel={handleCancel}
                message={isDeleted}
            />
        </div>
    );
};
