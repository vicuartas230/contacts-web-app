import { useEffect, useState } from "react";
import { ConfirmationModal } from "./confirmationModal";
import { deleteContact } from "../api/delete.api";
import { MessageModal } from "./messageModal";
import { useNavigate } from "react-router-dom";

export const ContactModal = ({ display, fields, id, onClose }) => {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const [isDeleted, setIsDeleted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (display) {
            const modal = new window.bootstrap.Modal(document.getElementById('contactModal'));
            modal.show();
        }
    }, [display]);

    const handleDeleteClick = () => {
        const contactModal = window.bootstrap.Modal.getInstance((document.getElementById('contactModal')));
        contactModal.hide();
        setShow(true);
    };

    const handleConfirmDelete = async () => {
        try {
            const res = await deleteContact(id);
            setMessage('Contacto eliminado correctamente');
            setIsDeleted(true);
            setShow(false);
        } catch (error) {
            console.error(error);
        }
    };

    const handleUpdateClick = () => {
        setShow(false);
        navigate(`/update/${id}`, { state: { contact: fields } });
    };

    return (
        <>
            <div className="modal fade" id="contactModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Contacto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
                            <p><h5>Nombre: </h5>{fields.firstName} {fields.lastName}</p>
                            <p><h5>Teléfono: </h5>{fields.phone}</p>
                            <p><h5>Correo Electrónico: </h5>{fields.email}</p>
                            <p><h5>Ciudad: </h5>{fields.city}</p>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-primary" onClick={() => handleUpdateClick(id)}>Editar</button>
                            <button type="button" className="btn btn-danger" onClick={handleDeleteClick}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
            {show && (
                <ConfirmationModal
                    onConfirm={handleConfirmDelete}
                    display={show}
                />
            )}
            {isDeleted && (
                <MessageModal
                    display={isDeleted}
                    message={message}
                />
            )}
        </>
    );
};
