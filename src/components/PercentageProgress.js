import React from "react";

export default function PercentageProgress ({children, className}) {
    return (
        <>
            <p className={className}>
                {children}
            </p>
        </>
    )
}