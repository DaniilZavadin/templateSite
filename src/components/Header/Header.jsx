import React from 'react';
import Logo from '../Logo/Logo'
import './Header.scss'

const Header = ({ image, altText, }) => {
    return (
        <div className='header'>
            <Logo image={image} alt={altText} className="header__logo"/>
            <a href="/home" className='header__link'>Home</a>
            <a href="/aboutus" className='header__link'>About Us</a>
            <a href="/services" className='header__link'>Our Services</a>
            <a href="/contact" className='header__link'>Contacts</a>
        </div>
    );
}

export default Header;