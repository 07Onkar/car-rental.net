import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,  faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import { FaSignInAlt } from "react-icons/fa";
import { Captcha } from "./Captcha";


export class SignInNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { email: "user1@example.com", password: "password1", isRegistered: true },
                { email: "user2@example.com", password: "password2", isRegistered: false },
                // Add more dummy users as needed
            ],
            email: "",
            password: "",
            showPassword: false,
        };
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    togglePasswordVisibility = () => {
        this.setState((prevState) => ({
            showPassword: !prevState.showPassword,
        }));
    };

    handleLogin = () => {
        const { email, password, users } = this.state;
        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
            window.location.href = user.isRegistered ? "/welcome" : "/error";
        } else {
            alert("Invalid email or password");
        }
    };

    render() {
        const { email, password, showPassword } = this.state;

        return (
            <div className="ui-main">
                <div className="ui-panel">
                    <div className="background-image"></div>
                    <div className="login-form">
                        <h1 className="h1s">Login</h1>
                        <input
                            className="login-input"
                            type="text"
                            value={email}
                            placeholder="Enter Email"
                            onChange={this.handleEmailChange}
                        />
                        <div className="password-input">
                            <div className="login-input-password">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={password}
                                    placeholder="Password"
                                    onChange={this.handlePasswordChange}
                                />
                            </div>
                            <button onClick={this.togglePasswordVisibility} className="password-eye" type="button">
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>
                        <div className="buttons">
                            <div onClick={this.handleLogin} className="Btn">
                                <div className="sign">
                                    <FaSignInAlt className="icon fa-xl" style={{ color: "#ffffff" }} />
                                </div>
                                <div className="texts">Login</div>
                            </div>
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


