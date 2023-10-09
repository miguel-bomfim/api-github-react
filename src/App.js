import React from "react";
import Dashboard from "./components/Dashboard";
import Title from "./components/Title";
import { Container } from "@material-ui/core";
import "fontsource-roboto";

export default function App() {
  return (
    <>
      <Title />
      <Container component="article" maxWidth="sm">
        <Dashboard />
      </Container>
    </>
  );
}
