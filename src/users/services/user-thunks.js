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
    'users/deleteUser',
    async (_id) => {
        await service.deleteUser(_id)
        return _id
    })


export const updateUserThunk = createAsyncThunk(
    'users/updateUser',
    async (user) => {
        return await service.updateUser(user)
    }
)
