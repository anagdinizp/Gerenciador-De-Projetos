import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import Container from './Componentes/Layout/Container/Container';
import Navbar from './Componentes/Layout/Navbar/Navbar';
import Inicio from './Componentes/Paginas/Inicio/Inicio';
import Empresa from './Componentes/Paginas/Empresa/Empresa';
import NovoProjeto from './Componentes/Paginas/NovoProjeto/NovoProjeto';
import Contato from './Componentes/Paginas/Contato/Contato';
import Footer from './Componentes/Layout/Footer/Footer';
import Projetos from './Componentes/Paginas/Projetos/Projetos';
import { Mensagem } from './Mensagem/Mensagem';

function App() {
  return (
    <>
      <Router>
        <>
            <Navbar/>
        </>
        <Container>
          <Mensagem>
            <Routes>
                <Route exact path="/" element={<Inicio/>}></Route>
                <Route exact path="/Empresa" element={<Empresa/>}></Route>
                <Route exact path="/Novoprojeto" element={<NovoProjeto/>}></Route>
                <Route exact path="/Contato" element={<Contato/>}></Route>
                <Route exact path="/Projetos" element={<Projetos/>}></Route>
            </Routes> 
          </Mensagem>
        </Container>
        <Footer/>
      </Router>
    </>
  );
};

export default App;