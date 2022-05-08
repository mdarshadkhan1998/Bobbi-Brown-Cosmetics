import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"

const LoginStyling = styled.div`
input {
    caret-color: black;
    border: 1px solid black;
}

input:focus {
    /* outline: none; */
    border: 1px solid #FF4661;
}

button {
    border: none;
    background-color: black;
    color: white;
}

button:hover {
    background-color: #FF4661;
}



.Head {
    display: flex;
    /* border: 1px solid #FF4661; */
}

.mainDiv {
    margin-left: 350px;
    /* border: 1px solid black; */
    width: 30%;
    margin-top: 100px;
    text-align: center;
}

h3 {
    text-align: left;
    font-weight: 400;
    font-weight: bold;
    letter-spacing: .2em;
}

h2 {
    text-align: left;
    font-weight: bolder;
}

.inputDiv {
    text-align: left;
}

input {
    width: 350px;
    height: 30px;
    margin-left: 0px;
}

.passDiv {
    text-align: left;
    margin-top: 20px;
}

.btnDiv {
    text-align: left;
}

button {
    width: 360px;
    height: 40px;
    cursor: pointer;
    margin-left: 0px;
    margin-top: 20px;
    font-weight: bold;
    font-size: 16px;
}

.line {
    width: 2px;
    height: 700px;
    margin-top: 120px;
    background-color: black;
    margin-left: 45px;
}

.Part {
    display: flex
}

.First {
    width: 30%;
    height: 1.5px;
    background-color: black;
    margin-left: 270px;
    margin-right: 20px;
    margin-top: 30px;
}

.Second {
    font-weight: bold;
    margin-top: 18px;
}

.Third {
    width: 30%;
    height: 1.5px;
    background-color: black;
    margin-right: 50px;
    margin-left: 20px;
    margin-top: 30px;
}

.introOne {
    text-align: center;
    margin-left: -100px;
}

.introTwo {
    width: 58%;
    display: flex;
    margin: auto;
}

.secCheckbox {
    width: 20px;
    height: 20px;
}

.introTwoP {
    text-align: left;
    margin-top: 2px;
    margin-left: 10px;
}

.btnnDiv {
    width: 300px;
    height: 30px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 300px;
    display: flex;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    background-color: black;
}

.btnn {
    width: 300px;
    height: 50px;
    margin-top: -20px;
    background-color: #1877F2;
    color: white;
    border-radius: 3px;
    cursor: pointer
}

select:hover {
    color: #FF4661;
}

.checkBox:checked
{
/* apply any css */
border: solid 1px solid black;
}
`;

export const Login = () => {

    const [state, setState] = useState("")
    const Navigate = useNavigate()
    const arr = JSON.parse(localStorage.getItem("user"))

    const onSubmit = (e) => {
        e.preventDefault();

        for (let i = 0; i < arr.length; i++) {
            // if (state === arr[i].email) {
            //     alert("Signup Successful")
            //     // window.location.href = "/Albums"
                Navigate("/")
            //     return
            // }
        }
        // alert("Invalid Credentials")
    }
    const onChange = (e) => {
        setState(e.target.value)
    }

    console.log(state)
    return (
        <LoginStyling>
            <div>
                <div className="Head">
                    <div className="mainDiv">
                        <div>
                            <h3>ALREADY HAVE AN ACCOUNT?</h3>
                        </div>

                        <div>
                            <h2>CONTINUE</h2>
                        </div>

                        <form id="field" onSubmit={onSubmit} >

                            <div className="inputDiv">
                                <input id="email" type="text" placeholder="*Email Address" onChange={onChange} required />
                                <br />
                                <br />
                                <input id="password" type="password" placeholder="* Password" onChange={onChange} required />
                            </div>


                            <div className="passDiv">
                                <a style={{ color: 'red', textdecoration: 'underline' }} href="#">Forgot your password?</a>
                            </div>

                            <div className="btnDiv">
                                <button type="submit">CONTINUE</button>
                            </div>
                        </form>
                    </div>

                    <div>
                        <div className="line"></div>
                    </div>

                    <div style={{ width: '60%', border: '0px solid green', marginTop: '100px', marginLeft: '50px' }}>
                        <div>
                            <h3>DON'T HAVE AN ACCOUNT?</h3>

                            <h2>CREATE & JOIN BB <u>ACCESS</u></h2>

                            <form>
                                <input style={{ marginLeft: '-335px' }} type="email" id="emailSignup" placeholder="   *Email Address" required />

                                <br />
                                <br />

                                <input style={{ marginLeft: '-335px' }} type="password" id="passwordSignup" placeholder="   *Password" required />

                                <br />

                                <p style={{ textAlign: 'left' }}>When is your birthday?</p>

                                <select style={{ width: '130px', height: '40px', border: '1px solid black', marginLeft: '-450px' }} id="month">
                                    <option value="">MONTH</option>
                                    <option value="jan">January</option>
                                    <option value="feb">February</option>
                                    <option value="mar">March</option>
                                    <option value="apr">April</option>
                                    <option value="may">May</option>
                                    <option value="j">June</option>
                                    <option value="jly">July</option>
                                    <option value="aug">August</option>
                                    <option value="sep">September</option>
                                    <option value="oct">October</option>
                                    <option value="nov">November</option>
                                    <option value="dec">December</option>
                                </select>

                                <select style={{ width: '130px', height: '40px', border: '1px solid black', marginLeft: '5px' }} id="day">
                                    <option value="">DAY</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>

                                <br></br>

                                <div style={{ width: '60%', display: 'flex' }} id="label">
                                    <input className="checkBox" style={{ width: '80px', marginTop: '15px', border: '1px solid black' }} id="check" type="checkbox" />
                                    <p style={{ textAlign: 'left' }}>Yes, I want to join BB Access. By clicking ‘Join Now’ I agree to BB Access <a href="https://www.bobbibrowncosmetics.com/bobbi-brown-club-terms-conditions">Terms & Conditions</a>, Bobbi Brown <a href="https://www.bobbibrowncosmetics.com/privacy-policy">Privacy Policy</a> and, if I am a California resident, the Notice of <a href="https://www.bobbibrowncosmetics.com/privacy-policy">Financial Incentive</a>. I also agree to the Bobbi Brown <a href="https://www.bobbibrowncosmetics.com/customer-service-corporate#corporate-terms">Terms and Conditions</a></p>
                                </div>

                                <div style={{ width: '55%', display: 'flex' }} id="label1">
                                    <input className="checkBox" style={{ width: '30px', marginTop: '15px' }} id="check1" type="checkbox" />
                                    <p style={{ textAlign: 'left' }}>By clicking "Sign Up", I agree to the Bobbi Brown <a href="https://www.bobbibrowncosmetics.com/customer-service-corporate#corporate-terms">Terms and Conditions</a> and <a href="https://www.bobbibrowncosmetics.com/privacy-policy">Privacy Policy</a>.</p>
                                </div>

                                <button style={{ width: '330px', height: '30px', fontSize: '14px', marginLeft: '-350px' }} id="submit">SIGNUP</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="Part">
                    <div className="First"></div>
                    <p>OR</p>
                    <div className="Third"></div>
                </div>

                <div className="introOne">
                    <p>By clicking "CONTINUE WITH FACEBOOK", I agree to the Bobbi Brown <a href="https://www.bobbibrowncosmetics.com/customer-service-corporate#corporate-terms">Terms and Conditions</a> and <a href="https://www.bobbibrowncosmetics.com/customer-service-corporate#corporate-privacy">Privacy Policy.</a></p>
                </div>

                <div className="introTwo">
                    <input className="secCheckbox" type="checkbox" />
                    <p className="introTwop">Yes, sign me up to hear from Bobbi Brown! To learn more, view our <a href="https://www.bobbibrowncosmetics.com/customer-service-corporate#corporate-privacy">Privacy Policy.</a> If I am a California resident, I agree to the Notice of <a href="https://www.bobbibrowncosmetics.com/privacy-policy#financial">Financial Incentive.</a></p>
                </div>

                <div className="btnnDiv">
                    {/* icon */}
                    <button href="#" className="btnn">Continue With Facebook</button>
                </div>
            </div>
        </LoginStyling>
    )
}