import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter/Filter";
import { selectIsLoading } from "../redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/operations";

export const PhonebookPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchContacts())
    },[dispatch])
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
            <Filter />
            <div>{isLoading && 'Loading contacts..' }</div>
        <ContactList />
      </div>
    );
}