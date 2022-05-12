import React, { useEffect, useState } from "react";

export const Location = () => {

    const [location, setLocation] = useState("Pune")
    const [address, setAddress] = useState("")

    //Geological Location Code for co-ordinates
    useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
            out(lat,lng)
        });
        const out = (lat,lng) => {
            fetch(`https://us1.locationiq.com/v1/reverse.php?key=pk.456518217705258731c8c7089e3a45d0&lat=${lat}&lon=${lng}&format=json`)
            .then((e)=>e.json())
            .then((d)=>(
                setAddress(d.display_name),
                setLocation(d)
            ))
        }
    },[setLocation])
    
   
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
                        <a className="text" style={{ fontSize: '20px', cursor: "pointer" }} href="" > Use Current Location</a>
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
                        <button style={{ cursor: 'pointer', marginTop: '0px', backgroundColor: '#FF4661', color: 'white', width: '120px', height: '34px' }}>FIND STORE</button>
                    </div>
                </div>
            </div>

            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",  padding:"50px",width:"96%", margin:"auto"}}>
                <div id="container" style={{fontSize:"20px", paddingRight:"10%", flexDirection:"row", paddingTop:"25%"}}><b>ADDRESS :-</b>{address}</div>
                <div>
                    <iframe src={ `http://maps.google.com/maps?q=${location}&t=&z=13&ie=UTF8&iwloc=&output=embed`} width = "100%" height = "400px" />
                </div>
            </div>

            <div style={{ display: 'grid',gridTemplateColumns:"1fr 1fr 1fr 1fr", gap: '2%', justifyContent:"space-around", width:"90%", margin:"auto"}}>
                <div style={{ cursor: "pointer" }}>
                    <img style={{ width: '100%', height: '70%' }} src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/EvergreenServices/BB_HP_Module_PC_Services_03.jpg" alt="img" />
                    <h4 style={{ textAlign: 'left' }}>CHAT NOW</h4>
                    <p style={{ textAlign: 'left' }}>Upload a photo for personalized advice on demand.</p>
                    <p style={{ textAlign: 'left', textDecoration: 'underline' }}>CHAT NOW</p>
                </div>

                <div style={{ cursor: "pointer" }}>
                    <img style={{ width: '100%', height: '70%' }} src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/EvergreenServices/BB_HP_Module_PC_Services_05.jpg" alt="img" />
                    <h4 style={{ textAlign: 'left' }}>FREE SHIPPING</h4>
                    <p style={{ textAlign: 'left' }}>Find your perfect match with free shipping and returns on all foundations.</p>
                    <a href="https://www.bobbibrowncosmetics.com/customer-service-shipping#shipping-options" style={{ textAlign: 'left', color: 'black', marginLeft: '-230px', textDecoration: 'underline' }}>SHOP NOW</a>
                </div>

                <div style={{ cursor: 'pointer' }}>
                    <img style={{ width: '100%', height: '70%' }} src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/EvergreenServices/BB_HP_Module_PC_Services_07.jpg" alt="img" />
                    <h4 style={{ textAlign: 'left' }}>WE WANT YOU TO LOVE IT</h4>
                    <p style={{ textAlign: 'left' }}>We've got answers to all your beauty questions.</p>
                    <a href="https://www.bobbibrowncosmetics.com/customer-service-returns#returns-instructions" style={{ textAlign: 'left', color: 'black', marginLeft: '-230px', textDecoration: 'underline' }}>EXPLORE NOW</a>
                </div>

                <div style={{ cursor: "pointer" }}>
                    <img style={{ width: '100%', height: '70%' }} src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/EvergreenServices/BB_HP_Module_PC_Services_09.jpg" alt="img" />
                    <h4 style={{ textAlign: 'left' }}>EXCLUSIVE OFFERS</h4>
                    <p style={{ textAlign: 'left' }}>Get instantly matched with our Foundation Finder.</p>
                    <a href="https://www.bobbibrowncosmetics.com/customer-service-returns#returns-instructions" style={{ textAlign: 'left', color: 'black', marginLeft: '-250px', textDecoration: 'underline' }}>GET STARTED</a>
                </div>
            </div>
        </>
    );
};