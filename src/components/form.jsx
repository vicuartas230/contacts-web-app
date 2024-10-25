import '../styles/form.css';
import { useState } from 'react';


export function Form({ onSubmit }) {
    const [data, setData] = useState({firstName: '', lastName: '', email: '', phone: '', city: ''});

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(data).every((el) => !el)) {
            alert("Al menos uno de los campos debe ser diligenciado.");
            return;
        }
        onSubmit(data);
    };

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card p-5" >
                <form>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">Nombre(s):</label>
                        <input type="text" name="firstName" value={data.firstName} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Apellido(s):</label>
                        <input type="text" name="lastName" value={data.lastName} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo:</label>
                        <input type="email" name="email" value={data.email} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Teléfono:</label>
                        <input type="tel" name="phone" value={data.phone} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="city" className="form-label">Ciudad:</label>
                        <input type="text" name="city" value={data.city} onChange={handleChange} className="form-control" />
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary mx-auto">Enviar</button>
                </form>
            </div>
        </div>
    );
}
