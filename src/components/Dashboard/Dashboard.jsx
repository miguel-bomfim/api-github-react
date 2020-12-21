import React, { useState } from 'react';
import MostraUser from '../MostraUser/MostraUser';
import PesquisaUser from '../BuscaUser/BuscaUser';

import { makeStyles, Paper, Tabs, Tab } from '@material-ui/core';

//Parâmetro das Tabs (@material-ui)
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Dashboard({aoBuscar, usuario}){
  const [etapaAtual, setetapaAtual] = useState(0);

  //Array com a Busca e as Infos do usuário
  const etapas = [
    <PesquisaUser proximo={proximaEtapa} aoBuscar={aoBuscar}/>,
    <MostraUser usuario={usuario}/>
  ]

  const classes = useStyles();

  //Método que muda visualmente a Tab selecionada
  const handleChange = (event, newValue) => {
    setetapaAtual(newValue);
  };

  //Método que permite intercalar entre Busca e Info
  function proximaEtapa() {
    setetapaAtual(etapaAtual+1);
  }

  return (
    <>
      <Paper className={classes.root}>
        <Tabs
          value={etapaAtual}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Busca" required/>
          <Tab label="Info" />
        </Tabs>
      </Paper>
      {etapas[etapaAtual]}
    </>
  );
}
