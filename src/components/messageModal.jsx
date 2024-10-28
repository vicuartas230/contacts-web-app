import { useEffect } from "react";

export const MessageModal = ({ display, message, onClose }) => {
    useEffect(() => {
        if (display) {
            const modal = new window.bootstrap.Modal(document.getElementById('messageModal'));
            modal.show();

            const modalElement = document.getElementById('messageModal');
            modalElement.addEventListener('hidden.bs.modal', () => {
                onClose();
                const modalErrorModal = document.querySelector('.modal-backdrop');
                if (modalErrorModal) {
                    modalErrorModal.parentNode.removeChild(modalErrorModal);
                }
                modalElement.classList.remove('show');
                modalElement.setAttribute('aria-hidden', 'true');
                modalElement.removeAttribute('aria-modal');
            });
        }
    }, [display]);

    return (
        <div className="modal fade" id="messageModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header bg-primary">
                    <h1 className="modal-title fs-5 text-light" id="staticBackdropLabel">Mensaje</h1>
                    </div>
                    <div className="modal-body">
                        <p>{ message }</p>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button type="button" className="btn btn-primary" onClick={onClose} data-bs-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
