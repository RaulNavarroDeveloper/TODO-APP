import React from "react";

export default function TasksLeft ({children, className}) {
    return (
        <h2 className={className}>
            {children}
        </h2>
    )
}