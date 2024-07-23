import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts);

  return (
    <ul className={css.list}>
      {contacts.map((data) => (
        <Contact key={data.id} data={data} />
      ))}
    </ul>
  );
}
