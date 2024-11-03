import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import { deleteContact } from "../api/delete.api";
import { ConfirmDialog } from "../components/confirmDialog";
import { useState } from "react";
import { Header } from "../components/header";

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
        navigate(`/update/${contactId}`, { state: { item: contact } });
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <div>
            <Header />
            <section className="container my-4 d-flex flex-column align-items-center">
                {error && <p className="alert alert-danger text-center">{error}</p>}
                <div className="card w-50 shadow-sm">
                    <div className="card-header text-center h4">Información del Contacto</div>
                    <div className="card-body">
                        <h5 className="card-title text-center">{contact.firstName} {contact.lastName}</h5>
                        <div className="row d-flex flex-column px-3 mt-4">
                            <h6>{contact.email && "Correo Electrónico:"}</h6>
                            <p className="card-text">{contact.email}</p>
                        </div>
                        <div className="row d-flex flex-column px-3 mt-4">
                            <h6>{contact.phone && "Teléfono:"}</h6>
                            <p className="card-text">{contact.phone}</p>
                        </div>
                        <div className="row d-flex flex-column px-3 mt-4">
                            <h6>{contact.city && "Ciudad:"}</h6>
                            <p className="card-text">{contact.city}</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary m-2" onClick={handleEdit}>Editar</button>
                            <button className="btn btn-danger m-2" onClick={handleDeleteClick}>Eliminar</button>
                        </div>
                    </div>
                </div>
                <ConfirmDialog
                    open={open}
                    onConfirm={handleDelete}
                    onCancel={handleCancel}
                    message={isDeleted} />
            </section>
            <nav className="container my-4">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link" to="/create"> Crear Contacto Nuevo </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/"> Consultar Contactos </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
