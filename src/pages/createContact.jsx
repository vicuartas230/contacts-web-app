import { createContact } from "../api/create.api";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "../components/input";

export const CreateContact = () => {
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '', city: ''
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (field) => (e) => {
        setFormData((prevData) => ({
            ...prevData, [field]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await createContact(
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
            setMessage('No se pudo crear el contacto.')
        }
    };

    return (
        <div>
            <Link to='/'>Inicio</Link>
            <h1 className="text-center">Crear Contacto</h1>
            {message && <p className="alert alert-info text-center">{message}</p>}
            <div className="container mt-5 d-flex justify-content-center">
                <div className="card p-5">
                    <form onSubmit={handleSubmit}>
                        <Input label="Nombre(s)" value={formData.firstName} type="text" onChange={handleChange('firstName')} />
                        <Input label="Apellidos(s)" value={formData.lastName} type="text" onChange={handleChange('lastName')} />
                        <Input label="Correo Electrónico" value={formData.email} type="text" onChange={handleChange('email')} />
                        <Input label="Teléfono" value={formData.phone} type="tel" onChange={handleChange('phone')} />
                        <Input label="Ciudad" value={formData.city} type="text" onChange={handleChange('city')} />
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary" type="submit">Crear</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
