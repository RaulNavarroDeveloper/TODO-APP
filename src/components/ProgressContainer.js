import React from "react";
import styles from './ProgressContainer.module.css'

export default function ProgressContainer ({children}) {
    return (
        <div className={`${styles.container}  + ${"w-md-75 mt-3"}`}>
            {children}
        </div>
    )
}