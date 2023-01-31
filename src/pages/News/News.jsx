import { NewsList } from "components/NewsList/NewsList.jsx";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./News.styled.js";

export default function NewsPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="desktop"
        sx={{
          maxWidth: {
            mobile: 480,
            tablet: 768,
            desktop: 1280,
          },
          px: {
            mobile: 2.5,
            tablet: 4,
            desktop: 2,
          },
        }}
      >
        <h1>News</h1>
        <NewsList />
      </Container>
    </ThemeProvider>
  );
}
