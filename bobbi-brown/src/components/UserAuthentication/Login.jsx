import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import styles from './Login.modules.css';

export const Login = () => {

    const [state, setState] = useState("");
    const Navigate = useNavigate();
    const arr = JSON.parse(localStorage.getItem("user"));

    const onSubmit = (e) => {

        e.preventDefault();

        for (let i = 0; i < arr.length; i++) {
            if (state === arr[i].email || arr[i].password) {
                alert("Signup Successful");
                Navigate("/");
                return;
            }
        }
        alert("Signup Unsuccessful please enter correct email");
    }
    const onChange = (e) => {
        setState(e.target.value);
    }

    console.log(state);

    return (
        // <>
        // <div>
        // <div className="Head">
        <div className="mainDiv">
            <div>
                <h3>ALREADY HAVE AN ACCOUNT?</h3>
            </div>

            <div>
                <h2>CONTINUE</h2>
            </div>

            <form id="field" onSubmit={onSubmit} >

                <div className="inputDiv">
                    <input id="email1" type="text" placeholder=" *Email Address" onChange={onChange} required />
                    <br />
                    <br />
                    <input id="password1" type="password" placeholder=" *Password" onChange={onChange} required />
                </div>


                <div className="passDiv">
                    <a style={{ color: 'red', textdecoration: 'underline' }} href="#">Forgot your password?</a>
                </div>

                <div className="btnDiv">
                    <button  className='buttonSignupLogin' type="submit">CONTINUE</button>
                </div>
            </form>
        </div>
        // </div>
        // </div>
        // </>
    );
}