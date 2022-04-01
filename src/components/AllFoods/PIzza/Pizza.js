import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Pizza.css'

const Pizza = () => {

    const [allPizza, setAllPizza] = useState([]);

    useEffect(() => {
        fetch('./PizzaData.json')
            .then(res => res.json())
            .then(data => { setAllPizza(data) })
    }, [])
    return (
        <div className='test'>
            {

                allPizza.map(pizza => <div className='pizza-div' key={pizza.id}>
                    <img src={pizza.image} alt="" />
                    <h5>{pizza.name}</h5>
                    <p>{pizza.price} BDT</p>

                    <button className='btn btn-outline-success'><FontAwesomeIcon icon={faCartPlus} /> Buy now</button>


                </div>)
            }
        </div>
    );
};

export default Pizza;