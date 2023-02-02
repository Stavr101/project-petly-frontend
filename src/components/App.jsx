import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { GlobalStyles } from "services/GlobalStyles";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks";
import NotFound from "./NotFound/NotFound";
import Loader from "shared/loader/Loader";


const HomePage = lazy(() => import("../pages/Home/Home"));
const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));

const NewsPage = lazy(() => import("../pages/News/News"));
const NoticesPage = lazy(() => import("../pages/Notices"));
const OurFriendsPage = lazy(() => import("../pages/OurFriends"));

const UserPage = lazy(() => import("../pages/User/User"));

export const App = () => {
  console.log(process.env.REACT_APP_TEST);
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
      <>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="notices" element={<NoticesPage />}>
            <Route path="sell" element={<p>sell</p>} />
            <Route path="lost-found" element={<p>lost-found</p>} />
            <Route path="for-free" element={<p>in good hands</p>} />
            <Route
              path="favorite"
              element={
                <PrivateRoute
                  redirectTo="/notices"
                  component={<p>favorite ads</p>}
                />
              }
            />
            <Route
              path="own"
              element={
                <PrivateRoute redirectTo="/notices" component={<p>my ads</p>} />
              }
            />
          </Route>
          <Route path="friends" element={<OurFriendsPage />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/notices" component={<Register />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/notices" component={<Login />} />
            }
          />
          <Route
            path="/user"
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
