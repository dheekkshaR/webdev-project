import axios from 'axios';
//const API_BASE = process.env.REACT_APP_API_BASE;
//const USERS_API = `${API_BASE}/tuits`;
const USERS_API = 'http://localhost:4000/api/users';
//const USERS_API = 'https://tuiter-node-server-app-6npb.onrender.com/api/users';

export const findAllUsers = async () => {
    const response = await axios.get(USERS_API);
    const users = response.data;
    return users;
}
export const findUserById = async (userId) => {
    console.log("Reached findUserById!")
    const response = await axios.get(`${USERS_API}/${userId}`);
    console.log("Response from findUserById :", response.data)
    const user= response.data;
    return user;
}
export const createUser = async (user) => {
    const response = await axios.post(USERS_API, user)
    return response.data;
}

export const login = async (username, password) => {
    let body = { username, password };
    let response = await axios.post(`${USERS_API}/login/${username}/${password}`, body);
    return response.data;
};








export const deleteUser = async (uid) => {
    const response = await axios.delete(`${USERS_API}/${uid}`)
    return response.data
}

export const updateUser = async (user) => {
    const response = await axios
        .put(`${USERS_API}/${user._id}`, user);
    return tuit;
}

