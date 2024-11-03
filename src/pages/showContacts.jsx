import { ContactsTable } from "../components/table";
import { useLocation, Link } from "react-router-dom";
import { Pagination } from "../components/pagination";
import { useMemo, useState } from "react";
import { Header } from "../components/header";

export const DisplayContacts = () => {
    const loc = useLocation();
    const { contacts } = loc.state || {};
    const [currentPage, setCurrentPage] = useState(1);
    const [contactsPerPage] = useState(10);

    const lastContact = currentPage * contactsPerPage;
    const firstContact = lastContact - contactsPerPage;
    const newData = useMemo(() => contacts.slice(firstContact, lastContact), [contacts, currentPage]);

    const changePage = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Header />
            <ContactsTable
                tableData={newData}
            />
            <Pagination
                contactsPerPage={contactsPerPage}
                totalContacts={contacts.length}
                paginate={changePage}
                currentPage={currentPage}
            />
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
        </>
    );
};
