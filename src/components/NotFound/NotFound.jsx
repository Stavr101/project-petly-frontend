import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import NotFoundImage from "assets/NotFound.gif";
import { theme } from "./NotFound.styled";

export default function NotFound() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box
          component="img"
          src={NotFoundImage}
          alt="not found page"
          sx={{
            width: "100%",
          }}
        />
      </Box>
    </ThemeProvider>
  );
}
