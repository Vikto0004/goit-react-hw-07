import { createSlice, nanoid } from "@reduxjs/toolkit";
import contacts from "../contacts.json";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: contacts },
  reducers: {
    addContact(state, action) {
      action.payload.id = nanoid();
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(({ id }) => id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
