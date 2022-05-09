import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import styles from "./Login.modules.css";

export const Location = () => {

    let container = document.getElementById("container");

    async function getWeather() {

        try {

            let city = document.getElementById("city").value;

            let res = await fetch(
                // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=78e9a2ba256831d8f9f427eda531eb07&units=metric`
                `https://api.openweathermap.org/data/2.5/weather?zip=10038,us&appid=78e9a2ba256831d8f9f427eda531eb07`
            );

            let data = await res.json();

            appendData(data);

            console.log("data:", data);

        }
        catch (err) {
            console.log("err:", err);
        }

    }

    function appendData(data) {

        // container.innerHTML = null;

        let main_cont = document.createElement("div");
        main_cont.setAttribute("id", "flexdiv");

        let cont1_div = document.createElement("div");
        cont1_div.setAttribute("id", "cont1_div");

        let cont_div = document.createElement("div");
        cont_div.setAttribute("id", "cont_div")

        let iframe = document.createElement("iframe");
        iframe.src = `http://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

        //iframe.setAttribute("id", "map")

        iframe.width = "700px";
        iframe.height = "500px";
        // iframe.paddingTop = "500px";

        cont_div.append(iframe)

        main_cont.append(cont1_div, cont_div)

        container.append(main_cont);
    }

    return (
        <>
            <div style={{ backgroundColor: '#F4F1EC', height: '220px', marginTop: '30px', paddingTop: '10px' }}>
                <div style={{ margin: "auto" }}>
                    <h2
                        style={{
                            fontSize: "40px",
                            textAlign: "center",
                            fontFamily: "BBSans Regular,Helvetica,Arial,sans-serif",
                            letterSpacing: "5px",
                            fontWeight: "400",
                        }}
                    >
                        FIND A STORE
                    </h2>
                </div>

                <div style={{ display: "flex", gap: '20px', alignItems: "center", textAlign: "center", justifyContent: "center" }}>
                    <div>
                        <a style={{ fontSize: '20px', cursor: "pointer" }}
                            href="https://www.bobbibrowncosmetics.com/store_locator#"
                            className="store-locator__locate geo_search"
                            data-test-id="storelocator_currentlocation"
                        >
                            <span className="icon icon-finder"></span>{" "}
                            <span className="text">Use Current Location</span>
                        </a>
                    </div>

                    <p style={{ fontWeight: "bold" }}>OR</p>

                    <div>
                        <select style={{ width: "205px", height: "34px", cursor: "pointer", marginRight: "15px" }} name="" id="">
                            <option value="">Location</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaydzhan">Azerbaydzhan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Canada">Canada</option>
                            <option value="Chile">Chile</option>
                            <option value="China Mainland">China Mainland</option>
                            <option value="Curacao">Curacao</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="France">France</option>
                            <option value="Germany">Germany</option>
                            <option value="Greece">Greece</option>
                            <option value="Guam">Guam</option>
                            <option value="Hong Kong, SAR of China">Hong Kong, SAR of China</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Israel">Israel</option>
                            <option value="Japan">Japan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Korea">Korea</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Macau, SAR of China">Macau, SAR of China</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Netherland Antilles">Netherland Antilles</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Panama">Panama</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Russia">Russia</option>
                            <option value="Saipan">Saipan</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Singapore">Singapore</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Korea">South Korea</option>
                            <option value="Spain">Spain</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Taiwan, China">Taiwan, China</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Turkey">Turkey</option>
                            <option value="UNITED STATES">UNITED STATES</option>
                            <option value="USA">USA</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States">United States</option>
                        </select>

                        <input type="text" id="city" style={{ width: '205px' }} name="" placeholder="Enter City, State or Zip Code" />
                    </div>

                    <div>
                        <button onClick={() => getWeather()} style={{ cursor: 'pointer', marginTop: '0px', backgroundColor: '#FF4661', color: 'white', width: '120px', height: '34px' }}>FIND STORE</button>
                    </div>
                </div>
            </div>

            <div id="container"></div>

            {/* <div style={{ marginTop: '50px' }}>
                <img style={{ width: '100%', height: '100px' }} src='newimg.jpg' alt="image" />
                git url
            </div> */}

            <div style={{ display: 'flex', gap: '30px', marginTop: '50px' }}>
                <div style={{ width: '20%', height: '', marginLeft: '70px', cursor: "pointer" }}>
                    <img style={{ width: '100%', height: '300px' }} src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/EvergreenServices/BB_HP_Module_PC_Services_03.jpg" alt="img" />
                    <h3 style={{ textAlign: 'left' }}>CHAT NOW</h3>
                    <p style={{ textAlign: 'left' }}>Upload a photo for personalized advice on demand.</p>
                    <p style={{ textAlign: 'left', textDecoration: 'underline' }}>CHAT NOW</p>
                </div>

                <div style={{ width: '20%', height: '', cursor: "pointer" }}>
                    <img style={{ width: '100%', height: '300px' }} src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/EvergreenServices/BB_HP_Module_PC_Services_05.jpg" alt="img" />
                    <h3 style={{ textAlign: 'left' }}>FREE SHIPPING</h3>
                    <p style={{ textAlign: 'left' }}>Find your perfect match with free shipping and returns on all foundations.</p>
                    <a href="https://www.bobbibrowncosmetics.com/customer-service-shipping#shipping-options" style={{ textAlign: 'left', color: 'black', marginLeft: '-230px', textDecoration: 'underline' }}>SHOP NOW</a>
                </div>

                <div style={{ width: '22%%', height: '', cursor: 'pointer' }}>
                    <img style={{ width: '100%', height: '300px' }} src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/EvergreenServices/BB_HP_Module_PC_Services_07.jpg" alt="img" />
                    <h3 style={{ textAlign: 'left' }}>WE WANT YOU TO LOVE IT</h3>
                    <p style={{ textAlign: 'left' }}>We've got answers to all your beauty questions.</p>
                    <a href="https://www.bobbibrowncosmetics.com/customer-service-returns#returns-instructions" style={{ textAlign: 'left', color: 'black', marginLeft: '-230px', textDecoration: 'underline' }}>EXPLORE NOW</a>
                </div>

                <div style={{ width: '25%%', height: '', cursor: "pointer" }}>
                    <img style={{ width: '100%', height: '300px' }} src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/EvergreenServices/BB_HP_Module_PC_Services_09.jpg" alt="img" />
                    <h3 style={{ textAlign: 'left' }}>EXCLUSIVE OFFERS</h3>
                    <p style={{ textAlign: 'left' }}>Get instantly matched with our Foundation Finder.</p>
                    <a href="https://www.bobbibrowncosmetics.com/customer-service-returns#returns-instructions" style={{ textAlign: 'left', color: 'black', marginLeft: '-250px', textDecoration: 'underline' }}>GET STARTED</a>
                </div>
            </div>
        </>
    );
};