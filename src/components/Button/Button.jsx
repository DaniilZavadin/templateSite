import React from 'react';
import "./Button.scss"

const Button = ({ className, onClick, text }) => {
    return (
        <button className={`${className} button-default`} onClick={onClick}>{text}</button>
    );
}

export default Button;