import React from "react";

export default function AddTodoContainer({children, className, onSubmit}) {
    return (
        <form className={className} onSubmit={onSubmit}>
            {children}
        </form>
    )
}