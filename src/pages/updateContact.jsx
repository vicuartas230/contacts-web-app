import { updateContact } from '../api/update.api'
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Input } from '../components/input';

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
                navigate(`/displayContact/${contactId}`, {state: { contact: formData }});
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
        <div className="container">
            <Link to='/'>Inicio</Link>
            <br />
            <Link to="/create">Crear</Link>
            <h1>Editar Contacto</h1>
            {message && <p className="alert alert-info text-center">{message}</p>}
            {error && <p className="alert alert-danger text-center">{error}</p>}
            <div className="container mt-5 d-flex justify-content-center">
                <div className="card p-5">
                    <form onSubmit={handleSubmit}>
                        <Input label="Nombre(s)" value={formData.firstName} type="text" onChange={handleChange('firstName')} />
                        <Input label="Apellidos(s)" value={formData.lastName} type="text" onChange={handleChange('lastName')} />
                        <Input label="Correo Electrónico" value={formData.email} type="text" onChange={handleChange('email')} />
                        <Input label="Teléfono" value={formData.phone} type="tel" onChange={handleChange('phone')} />
                        <Input label="Ciudad" value={formData.city} type="text" onChange={handleChange('city')} />
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary" type="submit">Editar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
