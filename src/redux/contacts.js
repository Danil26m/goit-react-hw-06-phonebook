import { createSlice } from '@reduxjs/toolkit';

const contacts = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContacts(state, action) {
      const { name, number, id } = action.payload;
      const bulElement = state.find(con => con.name === name);
      if (bulElement) {
        return alert(`${name} is already contact`);
      } else {
        state.push({ id, name, number });
      }
    },
    deleteComponent(state, action) {
      console.log();
      return state.filter(cont => cont.id !== action.payload);
    },
  },
});
export default contacts.reducer;
export const { deleteComponent, addContacts } = contacts.actions;
