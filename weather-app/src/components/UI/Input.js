import React from "react";
import { inputStyle } from "./stylesUI/styles";
const Input = (props) => {
    return (
            <input className={inputStyle} {...props} />
    );
};

export default Input;
