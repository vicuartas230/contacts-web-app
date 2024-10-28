import { useEffect } from "react";

export const ConfirmationModal = ({ onConfirm, display, onClose }) => {
    useEffect(() => {
        if (display) {
            const modal = new window.bootstrap.Modal(document.getElementById('confirmModal'));
            modal.show();
        }
    }, [display]);
    
    return (
        <div className="modal fade" id="confirmModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-danger">
                        <h1 className="modal-title textmodal-title fs-5 text-light" id="staticBackdropLabel">Mensaje</h1>
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                    </div>
                    <div className="modal-body">
                        <h4>¿Está segur@ que desea eliminar este contacto?</h4>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={onClose}>No</button>
                        <button type="button" className="btn btn-danger" onClick={onConfirm}>Si, eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
