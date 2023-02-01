import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { GlobalStyles } from 'services/GlobalStyles';
// import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import NotFound from './NotFound/NotFound';

const HomePage = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));

const NewsPage = lazy(() => import('../pages/News'));
const NoticesPage = lazy(() => import('../pages/Notices'));
const OurFriendsPage = lazy(() => import('../pages/OurFriends'));

const UserPage = lazy(() => import('../pages/User/User'));

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
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="notices" element={<NoticesPage />} />
          <Route path="friends" element={<OurFriendsPage />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/user"
            element={
              // <PrivateRoute redirectTo="/login" component={<UserPage />} />
              <RestrictedRoute redirectTo="/user" component={<UserPage />} />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
