import React from "react";
import {useDispatch} from "react-redux";
//import {deleteTuit} from "./tuits-reducer";
import {deleteUserThunk} from "./services/user-thunks";
const UserItem = ({user}) => {
    const dispatch = useDispatch();
    const deleteUserHandler = (id) => {
        console.log(id);
        dispatch(deleteUserThunk(id));
    }
    // let Pic=''
    // if (user.profilePic=="") {
    //     Pic='../../public/images/emptyprofilepic.png'
    // }
    // else{
    //     Pic=user.profilePic;
    // }
    // let profLink=""+user.username;

    return (
        <li key={user._id} className="list-group-item border">
            <div className="row">

                <div className="col-1 "  >
                    <img className="wd-round-image"
                         src='../../public/images/emptyprofilepic.png' height="35px" width="35px"  alt=""/>
                </div>

                <div className="col-11">

                    <div className="ms-3 ms-lg-0 text-white ">
                        <b>{user.username}
                        </b>

                        <i className="bi bi-x-lg float-end text-light"
                           onClick={() => deleteUserHandler(user._id)}> </i>
                    </div>
                    <div className="ms-3 ms-lg-0 text-white ">
                        {user.type}
                    </div>

                </div>

            </div>
        </li>
    );
};

export default UserItem;