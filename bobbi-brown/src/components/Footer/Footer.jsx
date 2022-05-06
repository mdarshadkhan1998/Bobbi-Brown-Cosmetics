import React from 'react'
import './Footer.css'

 const Footer = () => {
    // function myFunction() {
    //     alert("Your file is being uploaded!")
    // }

  return (
    <>
    <div id="footer" style={{backgroundColor:"black"}}>
        <div id="footer1">
            <div id="first">
            <h4>NEED HELP?</h4>
            <a href="https://www.bobbibrowncosmetics.com/live-chat-landing"><p>Chat with an Artist</p></a>
            <a href="https://www.bobbibrowncosmetics.com/live-chat-landing"><p>Text An Artist</p></a>
            <a href="https://www.bobbibrowncosmetics.com/customer-service"><p>Call Us (877)-310-9222</p></a>
            <a href="https://www.bobbibrowncosmetics.com/customer-service-returns#returns-instructions"><p>Shipping & Returns</p></a>
            <a href="https://www.bobbibrowncosmetics.com/customer-service-faqs"></a><p>FAQS</p>
            <a href="https://www.bobbibrowncosmetics.com/customer-service-corporate#corporate-employment"><p>Careers</p></a>
            <select className="footer_selec">
                <option>CHOOSE LOCATION</option>
                <option value="">ARGENTINA</option>
                <option value="">AUSTRALIA</option>
                <option value="">AMERICA</option>
                <option value="">CANADA</option>
                <option value="">CHILE</option>
                <option value="">MAINLAND CHINA</option>
                <option value="">FRANCE</option>
                <option value="">GERMANY</option>
                <option value="">GREECE</option>
                <option value="">ISRAEL</option>
                <option value="">TURKEY</option>
                <option value="">UNITED KINGDOM</option>
                <option value="">UNITED STATES</option>
                <option value="">TAIWAN, CHINA</option>
                <option value="">THAILAND</option>
                <option value="">SPAIN</option>
                <option value="">SOUTH AFRICA</option>
                <option value="">MAXICO</option>
                
            </select>
            </div>
            <div id="second">
            <h4>MY BOBBI BROWN</h4>
            <p>BB Access</p>
            <p>My Account</p>
            <p>My Orders</p>
            <p>Store Locator</p>
            </div>
            <div className="footer_email">
            <input placeholder="ENTER YOUR EMAIL" type="text"/>
            <input placeholder="ENTER YOUR PHONE"/>
            <button >SUBMIT</button><br/>
            <h3>FOLLOW US</h3><br/>
            <div className="socials">
                <a href="https://www.facebook.com/BobbiBrown" target="_blank"><i  class='bx bxl-facebook'></i></a>
                <a href="https://twitter.com/BobbiBrown" target="_blank"><i class='bx bxl-twitter' ></i></a>
                <a href="https://www.youtube.com/BobbiBrown" target="_blank"><i class='bx bxl-youtube' ></i></a>
                <a href="https://www.instagram.com/BobbiBrown/" target="_blank"><i class='bx bxl-instagram-alt'></i></a>
                <a href="https://www.pinterest.com/bobbibrown/" target="_blank"><i class='bx bxl-pinterest'></i></a>
             
            </div>
        </div>
        </div>
        {/*  */}
        <br/>
        <div id="footer2">
        <div id="first1">
        <p>© Bobbi Brown Professional Cosmetics, Inc. All worldwide rights reserved.</p>
        </div>
        <div id="second1">
    <p>Terms & Conditions</p>
    <p>California Do Not Sell My <br/> Personal Information</p>
    <p>Accessibility</p>
    </div>  
    <div id="third1">
    <p>
        Interest based ads
    </p>
    <p>Privacy Policy</p>
    </div>  
    </div>
        <div id="footer3"></div>
    </div>
     
    </>
  )
}
export default Footer;