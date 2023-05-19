import React from "react";

export default function DescriptionTodo({children, className}) {
    return (
        <>
            <p className={className}>{children}</p>
        </>
    )
}