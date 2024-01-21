import React from 'react'
import Navbar from '../component/Navbar'
import About from './About'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <About />
        </>
    );
};

export default Layout;