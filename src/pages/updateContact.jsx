import { updateContact } from '../api/update.api'
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Input } from '../components/input';
import { Header } from '../components/header';

export const UpdateContact = () => {
    const location = useLocation();
    const { item } = location.state;
    const [formData, setFormData] = useState({
        firstName: item.firstName,
        lastName: item.lastName,
        email: item.email,
        phone: item.phone,
        city: item.city
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const contactId = useParams().id;

    const handleChange = (field) => (e) => {
        setFormData((prevData) => ({
            ...prevData, [field]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await updateContact(
                contactId,
                formData.firstName,
                formData.lastName,
                formData.email,
                formData.phone,
                formData.city
            );
            setMessage('Contacto editado correctamente!');
            setTimeout(() => {
                navigate(`/displayContact/${contactId}`, { state: { contact: formData } });
            }, 4000);

        } catch (error) {
            console.error(error);
            setError('No se pudo editar el contacto.');
            setTimeout(() => {
                setError('');
            }, 4000);
        }
    };

    return (
        <div>
            <Header />
            {message && <p className="alert alert-info text-center">{message}</p>}
            {error && <p className="alert alert-danger text-center">{error}</p>}
            <section className="container my-4 d-flex justify-content-center">
                <div className="card p-3 shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title text-center">Editar Contacto</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <Input label="Nombre(s)" value={formData.firstName} type="text" onChange={handleChange('firstName')} />
                                </div>
                                <div className="col">
                                    <Input label="Apellidos(s)" value={formData.lastName} type="text" onChange={handleChange('lastName')} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Input label="Teléfono" value={formData.phone} type="tel" onChange={handleChange('phone')} />
                                </div>
                                <div className="col">
                                    <Input label="Ciudad" value={formData.city} type="text" onChange={handleChange('city')} />
                                </div>
                            </div>
                            <Input label="Correo Electrónico" value={formData.email} type="text" onChange={handleChange('email')} />
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary" type="submit">Editar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <nav className="container my-4">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link" to="/"> Consultar Contactos </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create"> Crear Contacto Nuevo </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};
