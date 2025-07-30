import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/sheard/navbar/Navbar';

const RootLayout = () => {
    return (
        <div className='relative'>
            <Navbar/>
            <div className='z-20 absolute w-full'>
                <Outlet/>
            </div>
        </div>
    );
};

export default RootLayout;