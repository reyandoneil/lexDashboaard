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
              {/* <AutoLagoutTimer ComposedClass={DashboardPage} /> */}
              <DashboardPage />
            </PrivateRoute>
          }
        >
          <Route />
          <Route path="home" element={<DashboardPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;