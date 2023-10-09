import React, { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./SearchUser.css";

const SearchUser = ({ onSearch, next }) => {
  const [user, setUser] = useState("");

  return (
    <form
      className="search"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(user);
        next(1, false);
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
        Pesquisar
      </Button>
    </form>
  );
};

export default SearchUser;
