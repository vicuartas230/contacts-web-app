export const ConfirmationModal = ({ display, handleClose, handleDelete, contact }) => {
    return (
        display && (
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">¿Estás segur@ que deseas eliminar este contacto?</h5>
                            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        {/* <div className="modal-body">
                            ...
                        </div> */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">No</button>
                            <button type="button" className="btn btn-danger" onClick={() => handleDelete(contact.id)}>Si</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};