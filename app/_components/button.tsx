import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    outline?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children,  outline = false, className = "", ...props }) => {
    return (
        <button className={`btn ${outline ? 'btn-outline' : ''}${className}`} {...props}>
            {children}
        </button>
    );
};
