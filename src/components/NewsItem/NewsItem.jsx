import { Link, useLocation } from "react-router-dom";

export const NewsItem = ({ data }) => {
  const location = useLocation();

  const { _id, title, link, release, content } = data;

  return (
    <li key={_id}>
      <h3>{title}</h3>
      <p>{content}</p>
      <div>
        <p>{release}</p>
        <Link state={{ from: location }} to={link}>
          Read more
        </Link>
      </div>
    </li>
  );
};
