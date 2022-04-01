import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Navbar.css';

const NavBar = () => {
    return (

        <div className='nav'>

            <div className='nav-logo'>
                <img src={logo} style={{ height: "230px" }} title='Uncle sammy' alt="" />
            </div>

            <div className='nav-title'>
                <h1>Uncle Sammy</h1>
                <p><span className='text-success'>Eat.</span> 
                <span className='text-primary'> Drink.</span>
                 <span className='text-primary'>Love.</span>
                 </p>
            </div>

            <div className='nav-item'>

                <ul>
                    <li><a href="/home"><FontAwesomeIcon className='text-primary' icon={faHome}/> Home</a></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><a href="">LogIn</a></li>
                    
                </ul>
            </div>






        </div>
    );
};

export default NavBar;