// import { useState } from "react";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { NewsItem } from "../NewsItem/NewsItem";
// import Loader from "../../shared/loader";
import { getAllNews } from "../../api/news";
import Error from "components/Error/Error";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./NewsList.styled.js";

export const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);

      try {
        const data = await getAllNews();
        setNews((prevNews) => [...prevNews, ...data]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {news && (
        <Grid
          container
          columnSpacing={4}
          rowSpacing={{ mobile: 6, tablet: 7.5, desktop: 7.5 }}        
          component="ul"
          alignItems="stretch"
        >
          {news.map((item) => {
            return <NewsItem key={item._id} data={item} />;
          })}
        </Grid>
      )}
      {error && <Error />}
      {/* {loading && <Loader />} */}
      {loading && <p>Hello</p>}
      {/* {isFriends && !loading && <LoadMoreBtn onLoadMore={loadMore} />} */}
    </ThemeProvider>
  );
};
