import React from "react";
import styles from './NameAndDescriptionContainer.module.css'

export default function NameAndDescriptionContainer ({children, className}) {
    return (
        <div className={`${className} + ${styles.contenedor}`}>
            {children}
        </div>
    )
}