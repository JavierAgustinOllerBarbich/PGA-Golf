import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/paginas/Inicio';
import Pga from './components/paginas/Pga';
import Tienda from './components/paginas/Tienda';
import Jugadores from './components/paginas/Jugadores';

function App() {
  
  return (
    
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element= {<Inicio/>}/>
          <Route path='/pga' element= {<Pga/>}/>
          <Route path='/tienda' element= {<Tienda/>}/>
          <Route path='/jugadores' element= {<Jugadores/>}/>
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;