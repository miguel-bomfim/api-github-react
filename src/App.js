import React, { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';

import {Container, Typography} from '@material-ui/core'
import "./assets/index.css"
import 'fontsource-roboto';
import logo from './assets/gitIcon.png'; 

export default function App () {

  const [usuario, setUsuario] = useState("");

  function getUser(user) {
    setUsuario(user);
  }
    
  return (
    <Container component="article" maxWidth="sm">
      <div className="cabecalho">
        <img className="logo" src={logo} alt="github" />
        <Typography className="titulo" variant="h4" component="h1">Consulta API GitHub</Typography>    
      </div>
      <Dashboard usuario={usuario} aoBuscar={getUser}/>
    </Container>
  );
}