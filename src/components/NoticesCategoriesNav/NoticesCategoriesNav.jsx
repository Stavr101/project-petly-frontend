import { Outlet } from "react-router-dom";
import { Nav, Link } from "components/NoticesCategoriesNav/NoticesCategoriesNav.styled";
import { useAuth } from 'hooks';
import { useTranslation } from 'react-i18next';

const NoticesCategoriesNav = () => {
  const { isLoggedIn } = useAuth();
  const { t } = useTranslation();

  return (
    <>
      <Nav>
          <Link to={"/notices/sell"}>{t("notices.sell")}</Link>
          <Link to={"/notices/lost-found"}>{t("notices.lost")}</Link>
          <Link to={"/notices/for-free"}>{t("notices.free")}</Link>
          {isLoggedIn ? (
            <>
          <Link to={"/notices/favorite"}>{t("notices.fav")}</Link>
          <Link to={"/notices/own"}>{t("notices.own")}</Link>
          </>
        ) : (null)} 
      </Nav>
      <Outlet />
    </>
  );
};

export default NoticesCategoriesNav;
