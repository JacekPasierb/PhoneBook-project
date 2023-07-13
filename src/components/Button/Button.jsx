

import * as React from "react";
import Button from "@mui/material/Button";

export const Btn = ({text, onClick}) => {
    return <Button variant="outlined" type="submit" onClick={onClick}>{text}</Button>;
}

