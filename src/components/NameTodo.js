import React from "react";
import styles from './NameTodo.module.css'

export default function NameTodo({children, className}) {
    return (
        <>
            <h3 className={`${className} + ${styles.color}`}>{children}</h3>
        </>
    )
}