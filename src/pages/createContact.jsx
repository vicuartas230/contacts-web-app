import { createContact } from "../api/create.api";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "../components/input";
import { Header } from "../components/header";

export const CreateContact = () => {
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '', city: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (field) => (e) => {
        setFormData((prevData) => ({
            ...prevData, [field]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(formData).every((el) => !el)) {
            setError('Debe diligenciar al menos uno de los campos del formulario');
            setTimeout(() => {
                setError('');
            }, 4000);
        } else {
            try {
                await createContact(
                    formData.firstName,
                    formData.lastName,
                    formData.email,
                    formData.phone,
                    formData.city
                );
                setMessage('Contacto creado exitosamente!');
                setFormData({
                    firstName: '', lastName: '', email: '', phone: '', city: ''
                });
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            } catch (error) {
                console.error(error);
                setMessage('No fue posible crear el contacto.')
            }
        }
    };

    return (
        <div>
            <Header />
            {message && <p className="alert alert-info text-center">{message}</p>}
            {error && <p className="alert alert-danger text-center">{error}</p>}
            <section className="container my-4 d-flex flex-column align-items-center">
                <div className="card p-3 shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title text-center">Crear Contacto</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <Input label="Nombre(s)" value={formData.firstName} type="text" onChange={handleChange('firstName')} />
                                </div>
                                <div className="col">
                                    <Input label="Apellido(s)" value={formData.lastName} type="text" onChange={handleChange('lastName')} />
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
                                <button className="btn btn-primary" type="submit">Crear</button>
                            </div>
                        </form>
                    </div>
                </div>
                <nav className="container my-4">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"> Consultar Contactos </Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    );
};
