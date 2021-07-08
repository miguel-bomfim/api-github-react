import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Title from "./components/Title";

import { Container } from "@material-ui/core";
import "fontsource-roboto";

export default function App() {
  const [user, setUser] = useState("");

  function getUser(user) {
    setUser(user);
  }

  return (
    <>
      <Title />
      <Container component="article" maxWidth="sm">
        <Dashboard user={user} onSearch={getUser} />
      </Container>
    </>
  );
}
