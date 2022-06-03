import React from 'react';
import Logo from '../components/Logo'
import './Home.scss'

const Home = () => {
    return (
        <div className='home-content'>
            <div className="header">
                <Logo image={"/source/logo.jpg"} alt={'CarCo'} className="header-logo"/>
            </div>
        </div>
    );
}

export default Home;