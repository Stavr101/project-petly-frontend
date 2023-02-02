import { useState, useRef, useCallback, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { NewsItem } from "../NewsItem/NewsItem";
import Error from "components/Error/Error";
import Loader from "shared/loader/Loader";
import { getAllNews } from "api/news";
import { useSearchNews } from "hooks";

export const NewsList = ({ query }) => {
  const [pageNumber, setPageNumber] = useState(1);
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  // const { loading, error, news, hasMore } = useSearchNews(pageNumber);

  console.log("I'm news list")

  // const observer = useRef();


  // const lastNewsElementRef = useCallback(
  //   (node) => {
  //     if (loading) return;
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && hasMore) {
  //         setPageNumber((prevPageNumber) => prevPageNumber + 1);
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [loading, hasMore]
  // );

  let filteredNews = news;

  if (query !== "") {
    filteredNews = news?.filter(({ title }) => {
      return title.toLowerCase().includes(query.toLowerCase());
    });
  }

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);

      try {
        const data = await getAllNews(pageNumber);
        setNews((prevNews) => [...prevNews, ...data]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [pageNumber]);

  return (
    <>
      {Boolean(filteredNews.length) && (
        <Grid
          container
          columnSpacing={4}
          rowSpacing={{ mobile: 6, tablet: 7.5, desktop: 7.5 }}
          component="ul"
          alignItems="stretch"
          id="top"
        >
          {filteredNews.map((item, index) => {
            if (filteredNews.length === index + 1) {
              return (
                <NewsItem
                  key={item._id}
                  data={item}
                  // lastElementRef={lastNewsElementRef}
                />
              );
            } else {
              return <NewsItem key={item._id} data={item} />;
            }
          })}
        </Grid>
      )}
      {error && <Error />}

      {loading && <Loader />}

      {/* {isFriends && !loading && <LoadMoreBtn onLoadMore={loadMore} />} */}
    </>
  );
};
