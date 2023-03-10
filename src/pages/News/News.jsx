/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback} from "react";
import debounce from "lodash.debounce";
import { NewsList } from "components/NewsList/NewsList.jsx";
import { Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./News.styled.js";
import NewsSearch from "components/NewsSearch/NewsSearch.jsx";
import { useTranslation } from 'react-i18next';

export default function NewsPage() {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const debouncedChangeHandler = useCallback(debounce(handleChange, 300), []);

  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="desktop"
        component="main"
        sx={{
          maxWidth: {
            mobile: 480,
            tablet: 768,
            desktop: 1280,
          },
          py: {
            mobile: 0,
            tablet: 5.62,
            desktop: 1.87,
          },
          px: {
            mobile: 2.5,
            tablet: 4,
            desktop: 2,
          },
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            mb: {
              mobile: 3.5,
              tablet: 5,
            },
          }}
        >
          {t("news.news")}
        </Typography>
        <NewsSearch handleChange={debouncedChangeHandler} />
        <NewsList query={query} />
      </Container>
    </ThemeProvider>
  );
}
