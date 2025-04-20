import React from "react";
import "./index.css"
import Footer from "./components/Footer";
import Dinamica from "./components/Dinamica";
import Header from "./components/header";
import Energia from "./components/Energia";
import LeyesNewton from "./components/LeyesNewton";
import Cinematica from "./components/Cinematica";
import Ondas from "./components/Ondas";
import Opticas from "./components/Optica"
import TrabajoPotencia from "./components/TrabajoPotencia";
import Electricidad from "./components/Electricidad";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>  
      <div style={{ width: '100%', height:'100%' }} >

        <Header />
       
        <Routes>
        <Route path="/"  />
        <Route path="/energia" element={<Energia />} />
        <Route path="/dinamica" element={<Dinamica />} />
        <Route path="/leyes-newton" element={<LeyesNewton />} /> {/* si lo haces */}
        <Route path="/cinematica" element={<Cinematica />} />
        <Route path="/ondas" element={<Ondas />} />
        <Route path="/optica" element={<Opticas />} />
        <Route path="/electricidad" element={<Electricidad />} />
        <Route path="/trabajopotencia" element={<TrabajoPotencia />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
    
  );
}

export default App;
