import { useDispatch } from "react-redux";
import  {register}  from "../../redux/Auth/operations";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Btn } from "../Button/Button";


export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        required
        name="name"
        label="Username"
        type="text"
        variant="outlined"
        autoComplete="on"
      />
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
        label="Password"
        type="password"
        autoComplete="current-password"
      />

      <Btn text="Register" />
    </Box>
  );
};

