import { Route, Routes } from "react-router-dom";
import css from "./AppStyle.module.css";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import Layout from "./Layout/Layout";
import { PhonebookPage } from "../pages/PhonebookPage";
import { useEffect } from "react";
import { refreshUser } from "../redux/Auth/operations";
import { useDispatch } from "react-redux";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(refreshUser());
    }, [dispatch]);
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<LoginPage />} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<RegisterPage />} />
          }
        />
        <Route
          path="phonebook"
          element={
            <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

// <div className={css.container}>
//   <h1>Phonebook</h1>
//   <ContactForm />
//   <h2>Contacts</h2>
//   <Filter />
//   <ContactList />
// </div>
