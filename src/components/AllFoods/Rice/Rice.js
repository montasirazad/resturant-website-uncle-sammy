import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Rice.css';

const Rice = () => {
    const [allFriedRice, setAllFriedRice] = useState([])
    useEffect(() => {
        fetch('./RiceData.json')
            .then(res => res.json())
            .then(data => {
                setAllFriedRice(data)

            })
    }, [])
    return (
        <div className='test'>
             
            {

                allFriedRice.map(friedRice => <div className='rice-div' key={friedRice.id}>
                    <img src={friedRice.image} alt="" />
                    <h5>{friedRice.name}</h5>
                    <p>{friedRice.price} BDT</p>
                    <button className='btn btn-outline-success'><FontAwesomeIcon icon={faCartPlus} /> Buy now</button>
                </div>)
            }
        </div>
    );
};

export default Rice;