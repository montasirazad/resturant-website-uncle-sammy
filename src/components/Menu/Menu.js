import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger, faPizzaSlice, faCocktail, faBowlRice, faCake } from '@fortawesome/free-solid-svg-icons'
import Burger from '../AllFoods/Burger/Burger';
import Desert from '../AllFoods/Desert/Desert';
import Drinks from '../AllFoods/Drinks/Drinks';
import Pizza from '../AllFoods/PIzza/Pizza';
import Rice from '../AllFoods/Rice/Rice';
import './Menu.css'

const Menu = () => {
    return (
        <div className='menu-container'>
            <div className='menu-div'>
                <h3 className='p-1  mb-2 bg-dark text-white'><FontAwesomeIcon icon={faBurger} /> Burger</h3>
                <Burger />
            </div>

            <div className='menu-div'>
                <h3 className='p-1  mb-2 bg-dark text-white'><FontAwesomeIcon icon={faPizzaSlice} /> Pizza</h3>
                <Pizza />
            </div>


            <div className='menu-div'>
                <h3 className='p-1  mb-2 bg-dark text-white'><FontAwesomeIcon icon={faBowlRice} /> Fried Rice</h3>
                <Rice />
            </div>

            <div className='menu-div'>
                <h3 className='p-1  mb-2 bg-dark text-white'><FontAwesomeIcon icon={faCocktail} /> Drinks</h3>
                <Drinks />
            </div>

            <div className='menu-div'>
                <h3 className='p-1  mb-2 bg-dark text-white'><FontAwesomeIcon icon={faCake} /> Deserts</h3>
                <Desert />
            </div>

        </div>
    );
};

export default Menu;