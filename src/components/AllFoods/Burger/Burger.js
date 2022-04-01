import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useState } from 'react';
import './Burger.css'

const Burger = () => {

    const [allBurgers, setAllBurgers] = useState([]);

    useEffect(() => {
        fetch('./BurgerData.json')
            .then(res => res.json())
            .then(data => {
                setAllBurgers(data)
            })
    }, [])
    return (
        <div className='test'>
            {

                allBurgers.map(burger => <div className='burger-div' key={burger.id}>
                    <img src={burger.image} alt="" />
                    <h5>{burger.name}</h5>
                    <p>{burger.price} BDT</p>
                    <button className='btn btn-outline-success'><FontAwesomeIcon icon={faCartPlus} /> Buy now</button>
                </div>)
            }
        </div>
    );
};

export default Burger;