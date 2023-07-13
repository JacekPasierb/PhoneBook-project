import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { logIn } from "../../redux/Auth/operations";
import { useDispatch } from "react-redux";



import { Btn } from "../Button/Button";

export const LoginForm = () => {
  const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
  };
  

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        required
        name="email"
        label="Email"
        type="email"
        variant="outlined"
        autoComplete="on"
      />
      <TextField
        required
        name="password"
        type="password"
        label="Password"
        autoComplete="current-password"
      />

      <Btn text="Log In" />
    </Box>
  );
};


