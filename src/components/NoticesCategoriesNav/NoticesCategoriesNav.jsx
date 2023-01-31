import { Outlet } from "react-router-dom";
import { Nav, Link } from "components/NoticesCategoriesNav/NoticesCategoriesNav.styled";


const NoticesCategoriesNav = () => {
  return (
    <>
      <Nav>
          <Link to={"sell"}>sell</Link>
          <Link to={"lost-found"}>lost/found</Link>
          <Link to={"for-free"}>in good hands</Link>
      </Nav>
      <Outlet />
    </>
  );
};

export default NoticesCategoriesNav;
