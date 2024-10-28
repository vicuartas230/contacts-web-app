import { ContactsTable } from "../components/table";
import { useLocation } from "react-router-dom";
import { Pagination } from "../components/pagination";
import { useState } from "react";
import { deleteContact } from "../api/delete.api";

export const DisplayContacts = () => {
    const loc = useLocation();
    const { contacts } = loc.state || {};
    const [currentPage, setCurrentPage] = useState(1);
    const [contactsPerPage] = useState(10);

    const lastContact = currentPage * contactsPerPage;
    const firstContact = lastContact - contactsPerPage;
    const newData = contacts.slice(firstContact, lastContact);

    const changePage = (pageNumber) => setCurrentPage(pageNumber);

    const remove = async (id) => {
        console.log("ID: ", id);
        try {
            await deleteContact(id);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <a href='/'>Home</a>
            <hr/>
            <a href='/create'>Create</a>
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
