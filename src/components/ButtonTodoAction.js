import React from "react";
import styles from './ButtonTodoAction.module.css'

export default function ButtonTodoAction ({children, dataIndice, className, onClick, done}) {
    return (
        <div data-indice={dataIndice} className={`${className} + ${styles.boton} ${done ? styles.done : ""}`} onClick={onClick}>{children}</div>
    )

}