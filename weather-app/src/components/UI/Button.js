import React from "react";
import { buttonStyle } from "./stylesUI/styles";

const Button = ({ children, ...props }) => {
    return (
        <button {...props} className={buttonStyle}>
            {children}
        </button>
    );
};

export default Button;
