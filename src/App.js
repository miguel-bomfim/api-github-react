import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Title from "./components/Title";
import { QueryClient, QueryClientProvider } from "react-query";
import { Container } from "@material-ui/core";
import "fontsource-roboto";

export default function App() {
  const [user, setUser] = useState("");
  const queryClient = new QueryClient();

  function getUser(user) {
    setUser(user);
  }

  return (
    <>
      <Title />
      <QueryClientProvider client={queryClient}>
        <Container component="article" maxWidth="sm">
          <Dashboard user={user} onSearch={getUser} />
        </Container>
      </QueryClientProvider>
    </>
  );
}
