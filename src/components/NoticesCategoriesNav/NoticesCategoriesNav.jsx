import { Outlet } from "react-router-dom";
import { Nav, Link } from "components/NoticesCategoriesNav/NoticesCategoriesNav.styled";
import { useAuth } from 'hooks';


const NoticesCategoriesNav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Nav>
          <Link to={"sell"}>sell</Link>
          <Link to={"lost-found"}>lost/found</Link>
          <Link to={"for-free"}>in good hands</Link>
          {isLoggedIn ? (
            <>
          <Link to={"favorite"}>favorite ads</Link>
          <Link to={"own"}>my ads</Link>
          </>
        ) : ("")} 
      </Nav>
      <Outlet />
    </>
  );
};

export default NoticesCategoriesNav;
