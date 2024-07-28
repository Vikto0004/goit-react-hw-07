import { createSlice, nanoid } from "@reduxjs/toolkit";
import contacts from "../contacts.json";
import { fetchContacts } from "./contactsOps";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: contacts, loading: false, error: null },
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
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchContacts.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const selectItemsContacts = (state) => state.contacts.items;
export const selectLoadingContacts = (state) => state.contacts.loading;
export const selectErrorContacts = (state) => state.contacts.error;

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
