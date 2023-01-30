import {
  Card,
  Link,
  CardActions,
  CardContent,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import EllipsisText from "react-ellipsis-text";
import { theme } from "./NewsItem.styled.js";

export const NewsItem = ({ data }) => {
  const { title, url, date, description } = data;

  return (
    <ThemeProvider theme={theme}>
      <Grid
        item
        component="li"
        mobile={12}
        tablet={6}
        desktop={4}
        sx={{ display: "flex" }}
      >
        <Card
          sx={{
            backgroundColor: "transparent",
            border: "none",
            borderRadius: 0,
            boxShadow: "none",
            mt: 0.5,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ p: 0, mb: 5 }}>
            <Typography variant="h4" component="h4" sx={{ mb: 2 }}>
              <EllipsisText text={title} length={50} />
            </Typography>
            <Typography variant="body1" component="p" color="text.primary">
              <EllipsisText text={description} length={230} />
            </Typography>
          </CardContent>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body1" color="text.secondary">
              {date}
            </Typography>
            <CardActions>
              <Link href={url} target="_blank" rel="noreferrer noopener">
                Read more
              </Link>
            </CardActions>
          </Box>
        </Card>
      </Grid>
    </ThemeProvider>
  );
};

