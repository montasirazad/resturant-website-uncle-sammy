import React from 'react';
import logo from '../../images/logo.png'
import NavBar from '../NavBar/NavBar';

const About = () => {
    return (
        <div style={{ textAlign: 'center' }}  >
            <NavBar />
            <img src={logo} style={{ height: '300px' }} alt="" />
            <h3> &#x24B8; Uncle Sam {new Date().getFullYear()} </h3>
        </div>
    );
};

export default About;