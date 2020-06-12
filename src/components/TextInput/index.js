import React from 'react';
import "./styles.css";

export default function TextInput({ label, name, value, onChange }) {
    return (
        <>
            <label className="labelTextInput" >{label}</label>
            <input type="number" name={name} value={value} min="0" max="250" maxLength="3" onChange={onChange} />
        </>
    )
}