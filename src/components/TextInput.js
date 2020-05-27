import React from 'react';

export default function TextInput(props) {
    return (
        <label>{props.label}
            <input type="text" name={props.name} size="5" />
        </label>


    )
}