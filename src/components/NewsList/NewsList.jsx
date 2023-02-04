import { useState, useRef, useCallback } from "react";
import Grid from "@mui/material/Grid";
import { NewsItem } from "../NewsItem/NewsItem";
import Error from "components/Error/Error";
import Loader from "shared/loader/Loader";
import { useSearchNews } from "hooks";
import { Typography, Link, Box } from "@mui/material";

export const NewsList = ({ query }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const { loading, error, news, hasMore } = useSearchNews(pageNumber);

  console.log(loading, error, news, hasMore);

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

  return (
    <>
      {Boolean(filteredNews.length) && !loading && (
        <Grid
          id="top"
          container
          columnSpacing={4}
          rowSpacing={{ mobile: 6, tablet: 7.5, desktop: 7.5 }}
          component="ul"
          alignItems="stretch"
        >
          {filteredNews.map((item, index) => {
            if (filteredNews.length === index + 1) {
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
      {!hasMore && Boolean(filteredNews.length) && (
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
