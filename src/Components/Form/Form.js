import { useState } from "react";
import "./Form.css";

export const Form = ({ onSubmit }) => {
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue('');
    }
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <form className="forma" onSubmit={handleSubmit}>
            <input className="forma-text" value={value} onChange={handleChange} type="text" />
            <input type="submit" />
        </form>
    )
}