import { useLocation } from "react-router-dom";

export const ContactUpdated = () => {
    const loc = useLocation();
    const { contacts } = loc.state || {};

    return (
        <>
            <h1>Contacto actualizado correctamente!</h1>
            <p>{contacts}</p>
        </>
    );
};
