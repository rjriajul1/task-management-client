import React from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <p>Navbar </p>
            <div>
                <Outlet/>
            </div>
            <p>Footer</p>
        </div>
    );
};

export default RootLayout;