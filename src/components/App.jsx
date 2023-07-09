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

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="phonebook" element={<PhonebookPage />} />
        
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
