import { Outlet } from "react-router-dom";
import { Nav, Link } from "components/NoticesCategoriesNav/NoticesCategoriesNav.styled";
import { useAuth } from 'hooks';


const NoticesCategoriesNav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Nav>
          <Link to={"/notices/sell"}>sell</Link>
          <Link to={"/notices/lost-found"}>lost/found</Link>
          <Link to={"/notices/for-free"}>in good hands</Link>
          {isLoggedIn ? (
            <>
          <Link to={"/notices/favorite"}>favorite ads</Link>
          <Link to={"/notices/own"}>my ads</Link>
          </>
        ) : (null)} 
      </Nav>
      <Outlet />
    </>
  );
};

export default NoticesCategoriesNav;
