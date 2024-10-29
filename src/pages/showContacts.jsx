import { ContactsTable } from "../components/table";
import { useLocation, Link } from "react-router-dom";
import { Pagination } from "../components/pagination";
import { useMemo, useState } from "react";

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
            <Link to='/'>Inicio</Link>
            <hr/>
            <Link to='/create'>Crear</Link>
            <ContactsTable
                tableData={newData}
            />
            <Pagination
                contactsPerPage={contactsPerPage}
                totalContacts={contacts.length}
                paginate={changePage}
                currentPage={currentPage}
            />
        </>
    );
};
