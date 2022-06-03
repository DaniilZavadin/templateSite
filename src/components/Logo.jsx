import React from 'react';

const Logo = ({ image, altText, className }) => {
    return (
        <div className='logo-wrapper'>
            <img src={image} alt={altText} className={className} />
        </div>
    );
}


export default Logo;