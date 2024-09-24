import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import MainLayout from "../layouts/MainLayout";
import Profile from "../pages/Profile/Profile";
import NotFound from "../pages/NotFound/NotFound";
import useAuth from "../hooks/useAuth";
import Document from "../pages/Document/Document";
import LandingPage from "../pages/LandingPage/LandingPage";
import Signup from "../pages/Signup/Signup";
import Setting from "../pages/Setting/Setting";
import Resources from "../pages/Resources/Resources";
import Admin from "../pages/Admin/Admin";
import Pages from "../pages/Pages/Pages";
import Blog from "../pages/Blog/Blog";
import Services from "../pages/Services/Services";
import AboutUs from "../pages/AboutUs/AboutUs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/service" element={<Services />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/pages" element={<Pages />} />

      <Route element={<MainLayout />}>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/documents"
          element={
            <PrivateRoute>
              <Document />
            </PrivateRoute>
          }
        />
        <Route
          path="/resources"
          element={
            <PrivateRoute>
              <Resources />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Setting />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  return Boolean(user) ? children : <Navigate to="/login" />;
};

export default AppRoutes;
