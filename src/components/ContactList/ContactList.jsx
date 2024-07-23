import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filters = useSelector((state) => state.filters.name);

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
