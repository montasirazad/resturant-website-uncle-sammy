import React from 'react';
import { useState, useEffect } from 'react';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Desert.css'

const Desert = () => {
    const [allDesert, setAllDesert] = useState([])
    useEffect(() => {
        fetch('./DesertData.json')
            .then(res => res.json())
            .then(data => setAllDesert(data))
    }, [])

    return (
        <div className='test'>
            {

                allDesert.map(deserts => <div className='deserts-div' key={deserts.id}>
                    <img src={deserts.image} alt="" />
                    <h5>{deserts.name}</h5>
                    <p>{deserts.price} BDT</p>

                    <button className='btn btn-outline-success'><FontAwesomeIcon icon={faCartPlus} /> Buy now</button>
                </div>)
            }
        </div>
    );
};

export default Desert;