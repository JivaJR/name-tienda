import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        uid: null,
        email: null,
        displayname: null,
        photoURL:null,
        errorMessage: null,
    },
    reducers: {
        login: (state, {payload}) => {
            state.status='authenticated';
            state.uid= payload.uid;
            state.email= payload.email;
            state.displayname= payload.displayName;
            state.photoURL= payload.photoURL;
            state.errorMessage= null;
        },
        logout: (state,payload) => {
            state.status='not-authenticated';
            state.uid= null;
            state.email= null;
            state.displayname= null;
            state.photoURL= null;
            state.errorMessage= payload?.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
            state.uid= null;
            state.email= null;
            state.displayname= null;
            state.photoURL= null;
            state.errorMessage= null;
        },
    }
});

export const { login, logout, checkingCredentials } = authSlice.actions;