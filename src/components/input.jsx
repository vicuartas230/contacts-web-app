export const Input = ({ label, value, type, onChange }) => (
    <div className="mb-3">
        <label className="form-label">{ label }</label>
        <input className="form-control" type={type} value={value} onChange={onChange}></input>
    </div>
);
