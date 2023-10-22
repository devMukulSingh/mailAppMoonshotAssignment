import { createSlice } from "@reduxjs/toolkit";

const mailBodySlice = createSlice({

    name:'mailBody',

    initialState:{
        body:{},
        favorites:[],
    },

    reducers:{

        getMailBody : (state,action) => {
            state.body = action.payload;
        },
        getFavorites : (state,action) => {
            state.favorites.push(action.payload);
        },
        getAllMails : (state,action) => {
            state.action = action.payload;
        }

    }
})

export const{ getMailBody, getFavorites } = mailBodySlice.actions;
export default mailBodySlice.reducer;