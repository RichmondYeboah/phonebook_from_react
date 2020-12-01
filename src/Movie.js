import { FaRegTrashAlt } from "react-icons/fa";
import  { MovieContext } from './MovieContext';
import React, {useState, useContext} from 'react';
import { GoPerson } from "react-icons/go";
import { RiPhoneFill } from "react-icons/ri";
import {Col} from 'react-bootstrap';



const Movie = ({ name, price,id }) => {
    const [movies] = useContext(MovieContext);
    const movieName = [movies];
    const OnDelete = (id, e) => {
        console.log('deleting');
        console.log(id);
        console.log(movieName);
        // On click it prints delete but there is a problem accessing the data, even though the id prints 
    }

    return (
        <div id={name} className="row">
            <div className="main-content-positioner">
                <div className="left-section-handler col-md-6">
                        <div className="icon-spacing">
                            <GoPerson className="person-icon" />
                        </div>
                        <div className="name-text">
                           <h2 className="name-position">{name}</h2>
                        </div>
                </div>
                <div className="right-section-handler col-md-6">
                <div className="phone-spacing">
                <RiPhoneFill className="phone-icon"/>
                </div>
                    <div className="phone-number-text">
                        <h5>{price}</h5>
                    </div>
                </div>
                <div className="trash-icon">
                <button onClick={() => OnDelete(id)}> <FaRegTrashAlt className="trash-sizing" /></button>
                </div>
            </div>
            
        </div>
    );
}

export default Movie;