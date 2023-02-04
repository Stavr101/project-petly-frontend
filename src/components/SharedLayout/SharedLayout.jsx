import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import HeaderContainer from "components/Header/HeaderContainer/HeaderContainer";
import Loader from "shared/loader/Loader";

export const SharedLayout = () => {
  return (
    <>      
      <HeaderContainer />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
