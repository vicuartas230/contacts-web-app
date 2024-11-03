import { getFullData } from "../api/expandData";
import { useNavigate } from "react-router-dom";


export const ContactsTable = ({ tableData }) => {
    const navigate = useNavigate();

    const amplifyData = async (id) => {
        try {
            const res = await getFullData(id);
            navigate(`/displayContact/${id}`, { state: { contact: res } })
        } catch (error) {
            console.error("No se pudo obtener datos.")
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-sm">
                <table className="table">
                    <thead>
                        <tr className="table-primary">
                            <th>ID</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item) => (
                            <tr className="table-light" key={item.id}>
                                <td><button onClick={() => amplifyData(item.id)} className="btn btn-primary">{item.id}</button></td>
                                <td>{item.lookupName ? item.lookupName : 'null'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
