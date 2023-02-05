import {
  Card,
  Link,
  CardActions,
  CardContent,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import EllipsisText from "react-ellipsis-text";

export const NewsItem = ({ data, lastElementRef }) => {
  const { title, url, date, description } = data;

  return (
    <Grid
      item
      component="li"
      mobile={12}
      tablet={6}
      desktop={4}
      sx={{ display: "flex" }}
      ref={lastElementRef}
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
          "&::before": {
            content: '""',
            width: {
              mobile: 200,
              tablet: 280,
              desktop: 340,
            },
            height: {
              mobile: 4,
              tablet: 8,
            },
            background: "linear-gradient(90deg, #FF634E 0%, #FFDF48 100%)",
            mb: 0.5,
            borderRadius: 5,
          },
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
  );
};
