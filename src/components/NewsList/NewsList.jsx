// import { useState } from "react";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { NewsItem } from "../NewsItem/NewsItem";
// import Loader from "../../shared/loader";
import { getAllNews } from "../../api/news";
import Error from "components/Error/Error";

export const NewsList = ({ query }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let filteredNews = news;

  if (query !== "") {
    filteredNews = news.filter(({ title }) => {
      return title.toLowerCase().includes(query.toLowerCase());
    });
  }

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
    <>
      {filteredNews && (
        <Grid
          container
          columnSpacing={4}
          rowSpacing={{ mobile: 6, tablet: 7.5, desktop: 7.5 }}
          component="ul"
          alignItems="stretch"
        >
          {filteredNews.map((item) => {
            return <NewsItem key={item._id} data={item} />;
          })}
        </Grid>
      )}
      {error && <Error />}
      {/* {loading && <Loader />} */}
      {loading && <p>is loading...</p>}
      {/* {isFriends && !loading && <LoadMoreBtn onLoadMore={loadMore} />} */}
    </>
  );
};
