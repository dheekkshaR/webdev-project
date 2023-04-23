import {createSlice} from "@reduxjs/toolkit";

import {createUserThunk,
    deleteUserThunk,
    findUsersThunk,
    findUserByIdThunk,
    updateUserThunk
} from "./services/user-thunks";

var templateUser = {
    "username": "",
    "password": "",
    "type": "USER",
    "email": "",
    "phone": "",
    "address": "",
    "age": "",
    "gender": "",
    "tagline": "",
    "profilePic": "",
    "DOB": "",
    "bio": "Bio not set",
    "favouriteGenre": "",
    "playlist": [
        {}
    ],
    "firstName": "",
    "lastName": ""

}
const initialState = {
    id:"",
    username:"",
    currentUser:templateUser,
    loggedIn:"false",
    users: [],
    loading: false
}






const usersSlice = createSlice({name: 'users',
    initialState: initialState,
    reducers:{
        setLoggedInUser(state, action) {
            state = { ...state, loggedIn: "true",
                currentUser: action.payload,
                id:action.payload._id,
                username: action.payload.username
            };
            console.log("INSIDE USER REDUCER ====> ", state.user)
            return state;
        },
        logout(state, action) {
            state = { loggedIn: "false", currentUser: templateUser,
                id:"",
                username:""};
            console.log("State: ", state);
        }
    },
    extraReducers: {

        [findUsersThunk.pending]: (state) => {
            state.loading = true
            state.users = []
        },
        [findUsersThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.users = payload
        },
        [findUsersThunk.rejected]: (state) => {
            state.loading = false
        },
        [findUserByIdThunk.pending]: (state) => {
            state.loading = true
            state.currentUser = templateUser
        },
        [findUserByIdThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.currentUser = payload
        },
        [findUserByIdThunk.rejected]: (state) => {
            state.loading = false
            state.currentUser=templateUser
        },
        [deleteUserThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.users = state.users
                    .filter(t => t._id !== payload)
            },
        [createUserThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.users.push(
                    payload
                )
            },
        [updateUserThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                const tuitNdx = state.users
                    .findIndex((t) => t._id === payload._id)
                state.users[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }
    }
});

//export const {createTuit, deleteTuit} = tuitsSlice.actions;
export const {

    setLoggedInUser,
    logout
}=usersSlice.actions;
export default usersSlice.reducer;