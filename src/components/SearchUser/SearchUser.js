import React, { useState } from "react";

import { Button, TextField } from "@material-ui/core";
import "./SearchUser.css";

export default function SearchUser({ onSearch, next }) {
  const [user, setUser] = useState("");

  return (
    <form
      className="search"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(user);
        next();
      }}
    >
      <TextField
        onChange={(e) => {
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
        className="button"
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
