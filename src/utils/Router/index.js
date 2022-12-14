import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import PrivateRoute from './privateRoute';

import {
  DashboardPage,
  ErrorPage,
  LoginPage,
  RegisterPage,
  HomeDashboards,
  ProfilePage,
  Product,
  Hotel,
  Master,
  Schedule,
} from '../../pages';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute redirectTo="/login">
              <DashboardPage />
            </PrivateRoute>
          }
        >
          <Route />
          <Route path="home" element={<HomeDashboards />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="master" element={<Master />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="master/product" element={<Product />} />
          <Route path="master/hotel" element={<Hotel />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
