import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home'
import Services from '../pages/Services'
import AboutUs from '../pages/AboutUs'
import Payment from '../pages/Payment'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="*" element={() => <div>404</div>} />
        </Routes>
    );
};

export default AppRoutes;