import React from "react";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {theme} from "./Error.styled.js"





export default function Error() {
    return (
      <ThemeProvider theme={theme}>
        <Typography variant="h3" component="p" textAlign={"center"} sx={{mt:15}}>Something went wrong...</Typography>
      </ThemeProvider>
    );
}
