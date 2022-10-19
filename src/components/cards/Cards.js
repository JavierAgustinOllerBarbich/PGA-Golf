import React from 'react';
import { CardJugadores } from './CardJugadores';
import './Cards.css';

export const Cards = ({id}) => {
     
    return(
        <div className='container'>
            <ul className='cards'>
                {
                    id.map ( p=> (
                        <li className='card-item' key={p.name}>
                            <CardJugadores url={p.url}/>
                        </li>
                    ))
                }
            </ul>
        </div>


    )
}