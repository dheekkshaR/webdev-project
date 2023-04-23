import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./user-service"

export const findUsersThunk = createAsyncThunk(
    'users/findUsers', async () =>
        await service.findAllUsers()
)
export const findUserByIdThunk = createAsyncThunk(
    'users/findUser', async (uid) =>
        await service.findUserById(uid)
)
export const loginUserThunk = createAsyncThunk(
    'users/loginUser',
    async (username,password) => {
        return await service.login(username,password)
    })

export const createUserThunk = createAsyncThunk(
    'users/createUser',
    async (user) => {
        return await service.createUser(user)
    })







export const deleteUserThunk = createAsyncThunk(
    'tuits/deleteUser',
    async (tuitId) => {
        await service.deleteUser(uid)
        return tuitId
    })


export const updateUserThunk = createAsyncThunk(
    'tuits/updateUser',
    async (user) => {
        return await service.updateUser(user)
    }
)
