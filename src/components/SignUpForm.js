import React from 'react';
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
// import PasswordStr from "./PasswordStr";
// import "./style.css";

export const SignUpForm = () => {
    const signUpFormStyle = {
        width: '50%',
        textAlign: 'center',
        position: 'relative',
        // padding: '20px',
        left: '50%'

    }
    return (
        <div className="loginBox" style={signUpFormStyle}>
            <h1>Sign Up</h1>
            <form>
                <TextField
                    name='username'
                    floatingLabelText='username'
                />
                <TextField
                    name='email'
                    floatingLabelText='email'
                />
                <TextField
                    name='password'
                    floatingLabelText='password'
                />
                <TextField
                    name='pwconfirm'
                    floatingLabelText='confirm password'
                />
                <br />
                <RaisedButton
                    className="signUpSubmit"
                    type="submit"
                    label="submit"
                />
                <p>
                    Aleady have an account? <br />
                    <a href="/">Log in here</a>
                </p>
            </form>            
        </div>
    )
}

export default SignUpForm;