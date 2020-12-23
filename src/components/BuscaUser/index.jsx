import React, {useState} from 'react';

import {Button, TextField} from "@material-ui/core"
import "./index.css"

export default function BuscaUser({aoBuscar, proximo}) {

  const [user, setUser] = useState("");
    
  return(
    <form
      className="busca"
      onSubmit={(e) => {
        e.preventDefault();
        aoBuscar(user);
        proximo();}
      }
    >

      <TextField
        onChange={(e)=> {
          setUser(e.target.value); 
        }}
        required
        value={user}
        id="usuário"
        label="Digite o usuário do GitHub"
        variant="outlined"
        type="text"
        margin="normal"
      />

      <Button
        className="botao"
        type="submit"
        variant="contained"
        size="large"
        color="primary"
      >
        Buscar
      </Button>
    </form>
  );
}

