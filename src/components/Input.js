import React from "react";
import styles  from './input.module.css' 

export default function Input({type, id, name, value, onChange, className}) {
    return (
        <>
            <input type={type} id={id} name={name} value={value} className={`${className} ${styles.borderRadius}`} onChange={onChange}></input>
        </>
    )
}