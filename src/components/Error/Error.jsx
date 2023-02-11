import React from "react";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {theme} from "./Error.styled.js"
import { useTranslation } from 'react-i18next';


export default function Error() {
  const { t } = useTranslation();
    return (
      <ThemeProvider theme={theme}>
        <Typography variant="h3" component="p" textAlign={"center"} sx={{mt:15}}>{t("error.message")}</Typography>
      </ThemeProvider>
    );
}
