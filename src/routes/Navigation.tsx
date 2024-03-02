import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import logo from "../assets/react.svg";

import {
  FormikAbstractation,
  FormikYupPages,
  RegisterPage,
  FormikBasicPages,
  FormikComponents,
} from "../03-forms/pages";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formit Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formit Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstractaion"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formit Abstractation
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="formik-basic" element={<FormikBasicPages />} />
          <Route path="formik-yup" element={<FormikYupPages />} />
          <Route path="formik-components" element={<FormikComponents />} />
          <Route path="formik-abstractaion" element={<FormikAbstractation />} />
          <Route path="users" element={<h1>Users Page</h1>} />
          <Route path="home" element={<h1>Home Page</h1>} />
          <Route path="register" element={<RegisterPage />} />

          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
