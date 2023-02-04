import { useState, useRef, useCallback } from "react";
import Grid from "@mui/material/Grid";
import { NewsItem } from "../NewsItem/NewsItem";
import Error from "components/Error/Error";
import Loader from "shared/loader/Loader";
import { useSearchNews } from "hooks";
import { Typography, Link, Box } from "@mui/material";
import { dateCompare } from "utils/dateCompare";

export const NewsList = ({ query }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const { loading, error, news, hasMore } = useSearchNews(pageNumber);

  const observer = useRef();

  const lastNewsElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  let filteredNews = news;

  if (query !== "") {
     filteredNews = news?.filter(({ title }) => {
      return title.toLowerCase().includes(query.toLowerCase());
    });
   
  }

   const sorteredNews = filteredNews.sort((firstNews, secondNews) => {
     return (dateCompare(firstNews.date, secondNews.date));
   });

  return (
    <>
      {Boolean(sorteredNews.length) && !loading && (
        <Grid
          id="top"
          container
          columnSpacing={4}
          rowSpacing={{ mobile: 6, tablet: 7.5, desktop: 7.5 }}
          component="ul"
          alignItems="stretch"
        >
          {sorteredNews.map((item, index) => {
            if (sorteredNews.length === index + 1) {
              return (
                <NewsItem
                  key={item._id}
                  data={item}
                  lastElementRef={lastNewsElementRef}
                />
              );
            } else {
              return <NewsItem key={item._id} data={item} />;
            }
          })}
        </Grid>
      )}
      {!hasMore && Boolean(sorteredNews.length) && (
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ mb: 1 }}>End of content...</Typography>
          <Link href="#top">back to top?</Link>
        </Box>
      )}
      {error && <Error />}

      {loading && <Loader />}
    </>
  );
};
