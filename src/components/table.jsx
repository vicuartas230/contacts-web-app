import { useState } from "react";
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
            <table className="table">
                <thead>
                    <tr className="table-dark">
                        <th>ID</th>
                        <th>Nombre(s)</th>
                        <th>Apellido(s)</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item) => (
                        <tr className="table-light" key={item.id}>
                            <td><button onClick={() => amplifyData(item.id)} className="btn btn-primary">{item.id}</button></td>
                            <td>{item.lookupName.split(' ')[0] ? item.lookupName.split(' ')[0] : "null"}</td>
                            <td>{item.lookupName.split(' ')[1] ? item.lookupName.split(' ')[1] : "null"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
