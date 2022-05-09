import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import styles from './Login.modules.css';

export const Signin = () => {

    const [data, setData] = useState({});
    const arr = JSON.parse(localStorage.getItem("user")) || [];

    const onSubmit = (e) => {

        e.preventDefault();

        arr.push(data);

        localStorage.setItem('user', JSON.stringify(arr));

        alert("Signup Successfully");

        window.location.href = "";
    }

    const onChange = (e) => {

        const { id, value } = e.target;
        setData({ ...data, [id]: value });
    }

    console.log(data);

    return (
        // <>
        // <div>
        // <div className="Head">
        <div className="side">
            <div>
                <h3>DON'T HAVE AN ACCOUNT?</h3>

                <h2>CREATE & JOIN BB <u>ACCESS</u></h2>

                <form onSubmit={onSubmit} >
                    <input className="twoInput" type="email" id="email" placeholder="  *Email Address" onChange={onChange} required />

                    <br />
                    <br />

                    <input className="twoInput" type="password" id="password" placeholder="  *Password" onChange={onChange} required />

                    <br />

                    <p className="whenbday">When is your birthday?</p>

                    <select className="months" id="month" required >
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

                    <select className="days" id="day" required>
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

                    <div className="inputPara" id="label">
                        <input className="checkBox" style={{ width: '70px', marginTop: '20px', border: '1px solid black' }} id="check" type="checkbox" required />
                        <p className="alineLeft">Yes, I want to join BB Access. By clicking ‘Join Now’ I agree to BB Access <a href="https://www.bobbibrowncosmetics.com/bobbi-brown-club-terms-conditions">Terms & Conditions</a>, Bobbi Brown <a href="https://www.bobbibrowncosmetics.com/privacy-policy">Privacy Policy</a> and, if I am a California resident, the Notice of <a href="https://www.bobbibrowncosmetics.com/privacy-policy">Financial Incentive</a>. I also agree to the Bobbi Brown <a href="https://www.bobbibrowncosmetics.com/customer-service-corporate#corporate-terms">Terms and Conditions</a></p>
                    </div>

                    <div className="myDiv" id="label1">
                        <input className="checkBox" style={{ width: '32px', marginTop: '20px' }} id="check1" type="checkbox" required />
                        <p className="alineLeft">By clicking "Sign Up", I agree to the Bobbi Brown <a href="https://www.bobbibrowncosmetics.com/customer-service-corporate#corporate-terms">Terms and Conditions</a> and <a href="https://www.bobbibrowncosmetics.com/privacy-policy">Privacy Policy</a>.</p>
                    </div>

                    <button className="buttonSignupLogin" style={{float:"left"}} type="submit">SIGNUP</button>
                </form>
            </div>
        </div>
        // </div>
        // </div>
        // </>
    );
}