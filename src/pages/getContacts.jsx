import { getContact } from "../api/get.api";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "../components/input";

export const GetContacts = () => {
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
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(formData).every((el) => !el)) {
            setError('Debe diligenciar al menos uno de los campos del formulario');
            setTimeout(() => {
                setError('');
            }, 4000);
        } else {
            const res = await getContact(formData.firstName,
                formData.lastName,
                formData.email,
                formData.phone,
                formData.city);
            if ("items" in res.data) {
                if (!res.data.items.length) {
                    setMessage('La búsqueda no arrojó ningún resultado');
                    setTimeout(() => {
                        setMessage('');
                    }, 4000);
                } else {
                    navigate('/displayContacts', { state: { contacts: res.data.items } });
                }
            }
        }
    };

    return (
        <div>
            <Link to='/create'>Crear</Link>
            <h1 className="text-center">Consultar Contactos</h1>
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
                            <button className="btn btn-primary" type="submit">Consultar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
