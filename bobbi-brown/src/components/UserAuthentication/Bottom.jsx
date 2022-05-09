import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import styles from './Login.modules.css';

export const Bottom = () => {
    return (
        <>
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
                {/* checkboxhover */}
                <button href="#" className="btnn">Continue With Facebook</button>
            </div>
        </>
    );
}