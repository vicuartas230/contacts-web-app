import { useState } from "react";
import { getFullData } from "../api/expandData";
import { ContactModal } from "./contact";


export const ContactsTable = ({ tableData }) => {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({});
    const [contactId, setContactId] = useState('');


    const amplifyData = async (id) => {
        const res = await getFullData(id);
        setData({...res});
        setShowModal(true);
        setContactId(id);
        console.log(data);
    };

    const handleClose = () => {
        setShowModal(false);
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
            {showModal && (
                <ContactModal
                    display={showModal}
                    fields={data}
                    id={contactId}
                    onClose={handleClose}
                />
            )}
        </div>
    );
};
