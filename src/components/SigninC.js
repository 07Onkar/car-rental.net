import React, { Component } from "react";
import { Captcha } from "./Captcha";
import { FaSignInAlt } from "react-icons/fa";

export class SigninC extends Component {
    render() {
        return (
            <div className="ui-main">
            <div className="ui-panel">
                <div className="background-image"></div>
                <div className="login-form">
                    <h1 className="h1s">Login</h1>
                    <input className="login-input" type="text" placeholder="Enter Email" />
                    <input className="login-input" type="text" placeholder="Enter Password" />
                    <div className="buttons">
                        <button href="/" className="Btn">
                            <div className="sign">
                                <FaSignInAlt className="icon fa-xl" style={{ color: "#ffffff" }} />
                            </div>
                            <div className="texts">Login</div>
                        </button>
                    </div>
                </div>
                <a href="/" className="text">
                    forgot your password ?
                </a>
                <br />
                <Captcha />
            </div>
            </div>
        );
    }
}


