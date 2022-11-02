import React from 'react';
import { CardJugadores } from './CardJugadores';
import './Cards.css';


 const Cards = ({ cards }) => {   

        const products = cards.map( item => <cards key={cards.id} cards={cards} />);   
        
        return (
            <div > { products } </div>
         ); 
        
    }


    export default Cards;




   /* return(
        <div className='container'>
            <ul className='cards'>
                {

                    <Cards id={productos}/>
                    /*id.map ( p=> (
                        <li className='card-item' key={p.name}>
                            <CardJugadores url={p.url}/>
                        </li>
                    ))
                }
            </ul>
        </div>


    )*/
