import '../styles/dialog.css';
import React from 'react';

export const ConfirmDialog = ({ open, onConfirm, onCancel, message }) => {
    if (!open) return null; // Do not render if dialog is not open

    return (
        <div className="confirm-dialog-backdrop">
            <div className="confirm-dialog">
                <p>¿Está segur@ que desea eliminar este contacto?</p>
                {message && <p className="alert alert-info text-center">{message}</p>}
                <div className="confirm-dialog-actions">
                    <button onClick={onConfirm} className="confirm-dialog-button confirm">Si, eliminar</button>
                    <button onClick={onCancel} className="confirm-dialog-button cancel">No</button>
                </div>
            </div>
        </div>
    );
};
