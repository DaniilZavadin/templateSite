import React from 'react';

const Logo = ({ image, altText, className }) => {
    return (
        <img src={image} alt={altText} className={className} />
    );
}


export default Logo;