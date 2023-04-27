import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import {useSelector} from "react-redux";

const ProfileDropdown = () => {
const [isOpen, setIsOpen] = useState(false);
console.log("ProfileDropdown");
const user = useSelector(state => state.user);
console.log(user);
const navigate = useNavigate();
const handleButtonClick = () => {
setIsOpen(!isOpen);
};

const handleSignIn = () => {
console.log("Sign in clicked");
    navigate("/login");
};
    const handleRegister = () => {
        console.log("Reg clicked");
        navigate("/register");
    };
    const handleSignOut = () => {
        //adding logout
        alert("Signed out ");
        navigate("/refresh");
        // const {users, loading} = useSelector(state => state.user)
        // alert(users.user.username)
        // users.logout(users,null);
        // alert(users.user.username)

    };


const handleAccount = () => {
navigate("/profile");
setIsOpen(false);
};

return (
<div className="profile-dropdown">
<ul>
    {user.loggedIn == "true" && (
<li>
<div onClick={handleAccount}>Account</div>
</li>
        )}
    {user.loggedIn == "false" && (
    <li>
        <div onClick={handleRegister}>Register</div>
    </li>
        )}
    {user.loggedIn == "false" && (
    <li>
        <div onClick={handleSignIn}>Sign in</div>
    </li>
        )}
    {user.loggedIn == "true" && (
<li>
<div onClick={handleSignOut}>Sign Out</div>
</li>
        )}
</ul>
</div>
);
};

export default ProfileDropdown;