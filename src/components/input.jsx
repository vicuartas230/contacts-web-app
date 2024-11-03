export const Input = ({ label, value, type, onChange }) => (
    <div className="form-group">
        <input className="form-control" type={type} value={value} placeholder={label} onChange={onChange}></input>
    </div>
);
