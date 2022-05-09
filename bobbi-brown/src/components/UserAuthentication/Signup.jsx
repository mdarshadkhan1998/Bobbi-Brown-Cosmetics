import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SignUpStyling = styled.div`
a {
    color: #ff4661;
}

a:hover {
    border: 1px solid black;
}

input {
    /* custom */
    /* caret-color: DeepPink; */
    caret-color: black;
    border: 1px solid black;
}

.form-control {
    background-color: black;
}

.form-control::placeholder {
    text-align: center;
    color: white;
}

.form-control:hover {
    background: black;
    background-color: #FF4661;
    border: none;
}

input:focus {
    outline: none;
    border: 1px solid #FF4661;
}

input {
    overflow: visible;
}

.checkbox {
    position: static;
    float: left;
    margin-top: 5px;
    width: 20px;
}



.Main {
    width: 900px;
    height: 500px;
    border: 10px solid #ECEAE6;
    margin: auto;
    margin-top: 100px;
}

.head {
    margin-left: 20px;
}

h2 {
    /* font-weight: normal; */
}

.h3Div {
    width: 70%;
    height: "";
    margin: auto;
}

p {
    /* font-weight: normal; */
    /* font-size: 14px; */
    font-size: 14px;
    font-size: 1.2em;
    line-height: 1.25em;
}

.inputRequire {
    text-align: left;
}

.threeDiv {
    display: flex;
}

.inputs {
    width: 250px;
    height: 30px;
    margin-right: 20px;
}

.secondInput {
    display: flex;
    margin-top: 20px;
}

.secondInput1 {
    display: flex;
}

.birthday {
    width: 50px;
    height: 30px;
    margin-left: 20px;
    text-align: center;
}

.Mobile {
    margin-left: 60px;
    height: 30px;
    width: 250px;
}

.Zip {
    width: 250px;
    height: 30px;
    margin-left: 20px;
}

.Last {
    display: flex;
}

.lastSecond {
    width: 65%;
    display: flex;
    margin-top: 20px;
}

.Paragraph {
    margin-left: 0px;
    margin-top: 0px;
    text-align: left;
    font-size: 14px;
}

.form-control {
    width: 80px;
    height: 30px;
    margin-left: 20px;
    margin-top: 30px;
    font-weight: bold;
    color: white;
    cursor: pointer;
}

.H2 {
    font-weight: normal;
    text-align: center;
}
`;

export const Signup = () => {
    const navigate = useNavigate()

    const [data, setData] = useState({});
    const arr = JSON.parse(localStorage.getItem("user")) || [];

    const onSubmit = (e) => {

        e.preventDefault();

        arr.push(data);

        localStorage.setItem('user', JSON.stringify(arr));

        alert("Signed Up Successfully");
        navigate("/")
    }

    const onChange = (e) => {

        const { id, value } = e.target;
        setData({ ...data, [id]: value });
    }

    console.log(data);

    return (
        <SignUpStyling>
            <div>
                <div className="Main">
                    <div className="head">
                        <div>
                            <h2 className="H2">WANT A SNEAK PEEK?</h2>
                        </div>

                        <div className="h3Div">
                            <p>Sign up for Bobbi Brown emails and be the first to know about exclusive offers, pre-sales, new collections and more.</p>
                        </div>

                        <form onSubmit={onSubmit}>
                            <p className="inputRequire">* Required field</p>

                            <div className="threeDiv">
                                <div><input id="firstname" className="inputs" type="text" placeholder=" *First Name" onChange={onChange} required /></div>
                                <div><input id="lastname" className="inputs" type="text" placeholder=" *Last Name" onChange={onChange} required /></div>
                                <div><input id="email" className="inputs" type="text" placeholder=" *Email" onChange={onChange} required /></div>
                            </div>

                            <div className="secondInput">
                                <div className="secondInput1">
                                    <p style={{ marginTop: '5px' }}>Birthday:</p>
                                    <input className="birthday" type="text" placeholder="MM" onChange={onChange} required />
                                    <input className="birthday" type="text" placeholder="DD" onChange={onChange} required />
                                </div>
                                <div><input id="mobile" className="Mobile" type="text" placeholder=" *Mobile Number" onChange={onChange} required /></div>
                                <div><input id="zip" className="Zip" type="text" placeholder=" Zip Code" onChange={onChange} required /></div>
                            </div>

                            <div className="Last">
                                <div className="lastSecond">
                                    <input type="checkbox" required />
                                    <p className="Paragraph" id="terms-conditions">I'd like to receive recurring advertising text messages (SMS and MMS) from Bobbi Brown. I understand these text messages may be sent via an autodialer, that consent is not required to purchase goods from Bobbi Brown, and that I can opt-out any time by replying STOP to the text message I receive from Bobbi Brown. I can text HELP for more information. Msg and data rates may apply. If I am a California resident, I agree to the Notice of
                                        <a href="https://www.bobbibrowncosmetics.com/privacy-policy#financial" target="_blank" className="financial-incentive"> Financial Incentive</a>. To learn more, view our
                                        <a href="https://www.bobbibrowncosmetics.com/privacy-policy" target="_blank" className="privacy-policy"> Privacy Policy</a>.</p>
                                </div>

                                <div>
                                    <input className="form-control" type="submit" placeholder="SIGN UP" />
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </SignUpStyling>
    )
}