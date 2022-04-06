import "./Form.css";

import { useState, useRef, useEffect } from "react";

import { Button } from '@mui/material';
import { TextField } from '@mui/material';


export const Form = ({ onSubmit }) => {
    const [value, setValue] = useState('');
    const inputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue('');
    };
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        inputRef.current?.focus();

        return () => {

        };
    }, []);

    return (
        <form className="forma" onSubmit={handleSubmit}>
            {/* <input className="forma-text" value={value} onChange={handleChange} type="text" ref={inputRef} /> */}
            {/* <input type="submit" value="Submit" /> */}

            <TextField
                id="filled-multiline-flexible"
                label="Message"
                // multiline
                // maxRows={4}
                value={value}
                onChange={handleChange}
                variant="filled"
                className="forma-text"
                type="text"
                inputRef={inputRef}
            />
            <Button type="submit">
                Send
            </Button>
        </form>
    )
}