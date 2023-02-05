import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const useSearchNews = (pageNumber) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [news, setNews] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    let cancel;
    axios
      .get(`news`, {
        params: { page: pageNumber },
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setNews((prevNews) => {
          return [...prevNews, ...res.data];
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      })
      .finally(setLoading(false));
    return () => cancel();
  }, [pageNumber]);

  return { loading, error, news, hasMore };
};
