import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "btn-primary",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`btn px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}
