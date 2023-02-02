import { useEffect, useState } from "react";
import { getAllNews } from "api/news";
import axios from "axios";
import { REACT_APP_BASE_URL } from "services/baseurl";

axios.defaults.baseURL = REACT_APP_BASE_URL;

export const useSearchNews = (pageNumber) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [news, setNews] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();
      setLoading(true);
      setError(null);

      console.log("useEffect");
    

      try {
        const response = await axios.get(`news?page=${pageNumber}`, {
          cancelToken: source.token,
        });
        setNews((prevNews) => [...prevNews, ...response.data]);
        setHasMore(response.data.length > 0);
        setLoading(false);
       
      } catch (error) {
        if (axios.isCancel(error)) return;
        setError(error);
      } finally {
        setLoading(false);
      }
      source.cancel("Operation canceled by the user.");
    };
    fetchNews();
  }, [pageNumber]);

  return { loading, error, news, hasMore };
};
