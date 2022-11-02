import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    
    return(
        <div>
            <footer className='text-white py-4 bg-dark' >
                <div className='container'>
                    <nav className='row'>
                        <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justyfy-content-center'>
                            <img src='./foto-logo.png' className='mx-2' height='70'/>
                        </Link>  
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold mb-2'>Enlaces</li>
                            <li>
                                <Link to='/pga' class='text-reset'>Pga Tour</Link>
                            </li>
                            <li >
                                <Link to='/tienda' class='text-reset'>Tienda</Link>
                            </li>
                            <li >
                                <Link to='/jugadores' class='text-reset'>Jugadores</Link>
                            </li>
                            <li >
                                <Link to='/contacto' class='text-reset'>Contacto</Link>
                            </li>
                        </ul>   
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold mb-2'>Siguenos</li>
                            <li className='d-flex justify-content-between'>
                                <a href="https://www.instagram.com/pgatour/" target="_blank">
                                    <i className="bi bi-instagram"/>
                                </a>
                                <a href="https://www.facebook.com/PGATour" target="_blank">
                                    <i className="bi bi-facebook"/>
                                </a>
                                <a href="https://twitter.com/PGATOUR" target="_blank">
                                    <i className="bi bi-twitter"/>
                                </a>
                                <a href="https://www.youtube.com/channel/UCKwGZZMrhNYKzucCtTPY2Nw" target="_blank">
                                    <i className="bi bi-youtube"/>
                                </a>
                                
                                
                                
                            </li>
                        </ul>
                        <div className='container'>
                            <p className='text-center mb-0 mt-2'>Realizada por Agustin Oller en forma de practica para su aprendizaje</p>
                        </div>    
                                        
                    </nav>
                </div>
            </footer>
        </div>
    )
}


export default Footer;
