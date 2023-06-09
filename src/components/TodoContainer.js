import React from "react";

export default function TodoContainer ({children, className}) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}