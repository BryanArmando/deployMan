import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculadora from './components/Calculadora';
import BasicExample from './components/Calcular';
import FootReact from './components/Footer';
import Formen from './components/Formest';
import BasicCard from './components/me';
import Navbar from './components/Navbar';
import Reloj from './components/Reloj';

function App() {
  const infoNav = {
    nombre: "KrugerCorp tranformando vidas y empresas"
  };
  return (
    <div className="App">
      <Navbar/>  
      <BrowserRouter>
      
      <Routes>    
        <Route exact path='/'element={<h5>Hola yo me llamo Bryan Quisaguano y estoy aqui presentando mi taller</h5>}/>
        <Route exact path='/about' element={<BasicCard/>}/>
        <Route exact path='/contact' element={<Formen/>} />
        <Route exact path='/imc' element={<BasicExample/>}/>
        <Route exact path='/age' element={<Calculadora/>} />
        <Route exact path='/clock' element={<Reloj/>}/>
      </Routes>  
      <FootReact props2={infoNav} /> 
      </BrowserRouter>  
       
    </div>
  );
}

export default App;
