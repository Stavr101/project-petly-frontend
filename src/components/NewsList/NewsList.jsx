// import { useState } from "react";
import { useEffect, useState } from "react";
import { NewsItem } from "../NewsItem/NewsItem";
// import Loader from "../../shared/loader";
import { getAllNews } from "../../api/news";
import Error from "components/Error/Error";

const mocNews = [
  {
    _id: 1,
    title: "test name",
    link: "http://#",
    release: "01/02/2023",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus inventore reprehenderit molestias totam? Non amet veritatis, eaque consequatur laudantium quod maiores voluptatem necessitatibus pariatur, dolorem odio deleniti, dicta est quos.",
  },
  {
    _id: 2,
    title: "test name 2",
    link: "http://#",
    release: "01/01/2023",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus inventore reprehenderit molestias totam? Non amet veritatis, eaque consequatur laudantium quod maiores voluptatem necessitatibus pariatur, dolorem odio deleniti, dicta est quos.",
  },
];

export const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isNews = Boolean(mocNews.length);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);

      try {
        const data = await getAllNews();
        console.log("data", data);
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
      {isNews && (
        <ul>
          {news.map((item) => {
            return <NewsItem key={item._id} data={item} />;
          })}
        </ul>
      )}
      {error && <Error/>}
      {/* {loading && <Loader />} */}
      {loading && <p>Hello</p>}
      {/* {isFriends && !loading && <LoadMoreBtn onLoadMore={loadMore} />} */}
    </>
  );
};
