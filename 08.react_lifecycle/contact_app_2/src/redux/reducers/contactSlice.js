import {createSlice} from '@reduxjs/toolkit'

export const contactSlice = createSlice({
    name:'contact',
    initialState:{
        contacts:[],
        keyword:''
    },
    reducers:{
        addContact:(state, action)=>{
            state.contacts = state.contacts.concat(action.payload)
        },
        searchContact:(state, action)=>{
            state.keyword = action.payload.keyword
        }
    }
})

export const ContactReducerActions = contactSlice.actions

export default contactSlice.reducer