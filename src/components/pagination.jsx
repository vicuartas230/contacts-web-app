import '../styles/pagination.css';

export const Pagination = ({ contactsPerPage, totalContacts, paginate, currentPage }) => {
    const pages = [...Array(Math.ceil(totalContacts / contactsPerPage)).keys()].map(
        (x) => x + 1
    );

    const decreasePage = () => {
        paginate(currentPage - 1);
    }

    const increasePage = () => {
        paginate(currentPage + 1);
    }
    
    return (
        <nav aria-label="Page navigation example" className="mx-auto mt-3">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <button className="page-link"
                        onClick={decreasePage}
                        aria-label="Anterior"
                        disabled={currentPage === 1}>
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                {pages.map((num) => (
                    <li className="page-item"
                        key={num}>
                        <button className={`page-link${currentPage === num ? ' current' : ''}`}
                            onClick={() => paginate(num)}
                            disabled={num === currentPage}>
                            {num}
                        </button>
                    </li>
                ))}
                <li className="page-item">
                    <button className="page-link"
                        onClick={increasePage}
                        aria-label="Siguiente"
                        disabled={!(currentPage < pages[pages.length - 1])}>
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};
