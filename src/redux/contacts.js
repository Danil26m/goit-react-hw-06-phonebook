import { createSlice} from "@reduxjs/toolkit";


export const contacts = createSlice({
    name:'contacts',
    initialState:{value: [] },
    reducers:{
        addContacts(state,actions){
    const {name,number} = actions.payload;
    const bulElement = state.value.find(con => con.name === name);
    if (bulElement) {
      return alert(`${name} is already contact`);
    } else {
      state.value.push({ id: state.value.length, name, number });
    }
    
        },
        deleteComponent(state,actions){
          return  state.value.filter(cont => cont.id !== actions.payload);
        },
    }
})
export const{deleteComponent,addContacts} = contacts.actions;