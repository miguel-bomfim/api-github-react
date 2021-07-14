import React from "react";
import Dashboard from "./components/Dashboard";
import Title from "./components/Title";
import GoogleAd from "./components/GoogleAd";
import { Container } from "@material-ui/core";
import "fontsource-roboto";

export default function App() {
  return (
    <>
      <Title />
      <Container component="article" maxWidth="sm">
        <Dashboard />
      </Container>
      <GoogleAd slot="6705205382" classNames="page-bottom" />
    </>
  );
}
