import React, {useEffect} from "react";
//import tuits from "./tuits.json"
import {useDispatch,useSelector} from "react-redux";
import UserItem from "./user-item.js";
import {findUsersThunk}
    from "./services/user-thunks";
const UsersList = () => {
    const {users, loading} = useSelector(state => state.usersMain)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUsersThunk())
        console.log("admincomponent.js")
        console.log(users);
    }, [])

    return (
        <div className="list-group">
            {
                loading &&
                <li className="list-group-item text-white">
                    Loading...
                </li>
            }
            {
                users.map(user => <UserItem key= {user._id} users={user}/>)
            }
        </div>

    );
};

export default UsersList;