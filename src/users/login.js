import React, { useState } from "react";
import { login } from "./services/user-service";
import {useNavigate, Link, Route} from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import {setLoggedInUser} from "./users-reducer";
import {deleteUserThunk, findUserByIdThunk, loginUserThunk} from "./services/user-thunks";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        //login(username, password)
        dispatch(loginUserThunk(username,password))
        .then((res) => {
            if (username === '') {
                alert("Invalid credentials! Please enter valid credentials!");
            }
            else{
                console.log("Logged in successfully!!!")
                //console.log(res.body)
                dispatch(setLoggedInUser());
                return <Navigate replace to="/" />
                //navigate("/");
            }
        });
    };

    return (
        <section className="bg-light">
            <div className="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: "1rem" }}>
                            <div class="row g-0">


                                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div class="card-body p-4 p-lg-5 text-black">
                                        <Form onSubmit={handleSubmit}>
                                            <h3 className="mb-3 text-uppercase">Sign In</h3>

                                            <div className="form-outline mb-4">
                                                <label className="form-label">Username:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter username"
                                                    onChange={(e) => setUsername(e.target.value)}
                                                />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label">Password:</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Enter password"
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button
                                                    className="btn btn-info btn-block"
                                                    type="submit"
                                                >
                                                    Sign In
                                                </button>
                                            </div>
                                            <p class="mb-5" style={{ color: "#393f81" }}>
                                                New to bingit?
                                                <Link to="/sign-up"> Sign Up</Link>
                                            </p>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Login;