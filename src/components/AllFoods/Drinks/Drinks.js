import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './Drink.css';

const Drinks = () => {
    const [allDrinks ,setAllDrinks] = useState([])
    useEffect(() => {
        fetch('./DrinksData.json')
            .then(res => res.json())
            .then(data => setAllDrinks(data))
    }, [])
    return (
        <div className='test'>
            {

                allDrinks.map(drinks => <div className='drinks-div' key={drinks.id}>
                    <img src={drinks.image} alt="" />
                    <h5>{drinks.name}</h5>
                    <p>{drinks.price} BDT</p>
                    <button className='btn btn-outline-success'><FontAwesomeIcon icon={faCartPlus} /> Buy now</button> 
                </div>)
            }
        </div>
    );
};

export default Drinks;