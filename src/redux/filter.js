import { createSlice } from "@reduxjs/toolkit";

export const filter = createSlice({
    name:'filter',
    initialState:'',
    reducers:{
       addTar(state,actions){
           return state = actions.payload;
       },
       
    }
})
export const{addTar} = filter.actions;