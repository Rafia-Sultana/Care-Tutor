import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css'

const Card = ({ service }) => {

    return (
        <div>
            <div className="card shadow ">
                <img src={service.image} className="img-fluid" alt="..." />
                <div className="card-body body">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text price"><span className='price'>$</span>{service.price}</p>
                    <p className="card-text">{service.description}</p>
                    <NavLink className="text-decoration-none btn btn-primary" to='/checkout'>CheckOut</NavLink>

                </div>
            </div>

        </div>
    );
};

export default Card;