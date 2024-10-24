import { useState } from "react";
import { ConfirmationModal } from "./confirmationModal";


export const ContactsTable = ({ data, deleteContact }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);

    const handleDelete = (contact) => {
        setSelectedContact(contact);
        setShowModal(true);
    }
    return (
        <div className="container mt-5">
            <table className="table">
                <thead>
                    <tr className="table-dark">
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr className="table-light">
                            <td>{item.id}</td>
                            <td>{item.lookupName ? item.lookupName : "null"}</td>
                            <td>
                                <a href={`/update/${item.id}`} className="btn btn-warning"><i className="bi bi-pencil-square"></i></a>
                            </td>
                            <td>
                                <button type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(item)}
                                        data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop">
                                            <i className="bi bi-trash-fill"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedContact && (
                <ConfirmationModal
                    display={showModal}
                    handleDelete={deleteContact}
                    contact={selectedContact}
                />
            )}
        </div>
    );
};
