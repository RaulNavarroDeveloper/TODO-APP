import React from "react";

export default function ContainerInputAndLabel ({children, className})  {
    return (
        <div className={className}>
            {children}
        </div>
    )
}