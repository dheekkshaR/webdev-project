import React from "react";
export default class Register extends React.Component{
    render(){
        return (
            <div>
                <h1 style={{"color": "white"}}>
                    Register!
                </h1>
                <div style={{"backgroundColor": "lightyellow",
                    "color": "black", padding: "10px"}}>
                    Register
                </div>
                <input className={'form-control'}
                       placeholder="username"/>

                <input className={'form-control'}
                       placeholder="password"/>
                <button className={'btn btn-light btn-block'}>
                    Register
                </button>


            </div>
        )
    }
}