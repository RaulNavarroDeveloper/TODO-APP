import React from "react";
import styles from './ViewTodosContainer.module.css'

export default function ViewTodosContainer({children, className}) {
    return (
        <div className={`${className} + ${styles.todoContainer}`}>
            {children}
        </div>
    )
}