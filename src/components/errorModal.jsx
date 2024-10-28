import { useEffect } from "react";

export const ErrorModal = ({ display, message, onClose }) => {
    useEffect(() => {
        if (display) {
            const modal = new window.bootstrap.Modal(document.getElementById('errorModal'));
            modal.show();
        }
    }, [display]);

    return (
        <div className="modal fade" id="errorModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header bg-danger">
                        <h1 className="modal-title fs-5 text-light" id="staticBackdropLabel"><i class="bi bi-exclamation-circle"></i> Error</h1>
                    </div>
                    <div className="modal-body">
                        <h6>{ message }</h6>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
