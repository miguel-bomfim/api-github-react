import React from "react";
import Dashboard from "./components/Dashboard";
import Title from "./components/Title";
import Container from "@mui/material/Container";
import "fontsource-roboto";

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Title />
      <Container component="article" maxWidth="sm">
        <Dashboard />
      </Container>
    </ThemeProvider>
  );
}
