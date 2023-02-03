import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { GlobalStyles } from 'services/GlobalStyles';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import NotFound from './NotFound/NotFound';
import Loader from 'shared/loader/Loader';

const HomePage = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));

const NewsPage = lazy(() => import('../pages/News/News'));
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
    <Loader />
  ) : (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route
            path="notices"
            element={
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            }
          >
            <Route
              path="favorite"
              element={
                <PrivateRoute redirectTo="/login" component={<NoticesPage />} />
              }
            />
            <Route
              path="own"
              element={
                <PrivateRoute redirectTo="/login" component={<NoticesPage />} />
              }
            />
            <Route path=":categoryName" element={<NoticesPage />} />
            <Route path="" element={<Navigate to="sell" />} />
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
