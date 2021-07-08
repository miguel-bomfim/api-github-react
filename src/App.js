import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Title from "./components/Title";

import { Container } from "@material-ui/core";
import "fontsource-roboto";

export default function App() {
  const [usuario, setUsuario] = useState("");

  function getUser(user) {
    setUsuario(user);
  }

  return (
    <>
      <Title />
      <Container component="article" maxWidth="sm">
        <Dashboard usuario={usuario} aoBuscar={getUser} />
      </Container>
    </>
  );
}
