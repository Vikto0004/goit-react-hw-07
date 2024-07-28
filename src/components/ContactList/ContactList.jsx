import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectItemsContacts } from "../../redux/contactsSlice";
import { selectNameFilters } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectItemsContacts);
  const filters = useSelector(selectNameFilters);

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filters)
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map((data) => (
        <Contact key={data.id} data={data} />
      ))}
    </ul>
  );
}
