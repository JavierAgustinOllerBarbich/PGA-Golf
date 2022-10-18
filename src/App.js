import { Form } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/paginas/Inicio';
import Pga from './components/paginas/Pga';
import Tienda from './components/paginas/Tienda';



function App() {
  
  return (
    
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact component= {Inicio}/>
          <Route path='/pga' exact component= {Pga}/>
          <Route path='/tienda' exact component= {Tienda}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
