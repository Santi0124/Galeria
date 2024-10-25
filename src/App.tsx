import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Asegúrate de importar solo lo necesario
import './App.css';
import Home from './components/Home';
import Pinturas from './components/PINTURAS/Pinturas';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header name={''} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/Pintura" element={<Pinturas />} />
          <Route path="/DecoraciónComercial" element={<Pinturas />} />
          <Route path="/FigurasPersonalizadas" element={<Pinturas />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
