import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import MainPageContainer from "components/Container/MainPageContainer/MainPageContainer";
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
