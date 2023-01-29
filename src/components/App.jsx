import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { GlobalStyles } from "services/GlobalStyles";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks";
import AuthForm from "./AuthForm/AuthForm";
import NotFound from "./NotFound/NotFound";

const HomePage = lazy(() => import("../pages/Home/Home"));
const RegisterPage = lazy(() => import("../pages/Register"));
const LoginPage = lazy(() => import("../pages/Login"));

// const NewsPage = lazy(() => import("../pages/News"));
// const NoticesPage = lazy(() => import("../pages/Notices"));
// const OurFriendsPage = lazy(() => import("../pages/Notices"));

const NewsPage = lazy(() => import("../pages/News"));
// const NoticesPage = lazy(() => import("../pages/Notices"));
const OurFriendsPage = lazy(() => import("../pages/OurFriends"));

const UserPage = lazy(() => import("../pages/Notices"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      {/* <AuthForm /> */}

      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="friends" element={<OurFriendsPage />} />
          <Route path="news" element={<NewsPage />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
