import '../styles/form.css';
import { useState } from 'react';


export function Form({ onSubmit }) {
    const [data, setData] = useState({name: '', email: '', phone: '', city: ''});

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(data);
    };

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card p-5" >
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre:</label>
                        <input type="text" name="name" value={data.name} onChange={handleChange} className="form-control" />
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
                    <button type="submit" className="btn btn-primary mx-auto">Enviar</button>
                </form>
            </div>
        </div>
    );
}
