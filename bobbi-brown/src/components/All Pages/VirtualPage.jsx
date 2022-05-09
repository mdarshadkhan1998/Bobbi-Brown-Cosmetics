import React from "react";
// import styles from "./Virtual.css";
import styled from "styled-components"

const VirtualStyling = styled.div`
/* individual session */
#main-first-video-div-rk{
    height: 100%;
    width: 100vw;
    /* border: 1px solid blue; */
    background-color: black;
}
.first-video-div-rk{
    height: 80%;
    width: 100%;
    /* border: 1px solid red; */
}
.imageResize-rk{
    height: 100%;
    width: 100%;
}
.individual-session-main-div-rk{
    height: 30%;
    width: 100%;
    /* border: 1px solid black; */
}

.individual-session-main-div-rk h3{
    font-size: 45px;
    font-family: "BBSans Regular",Helvetica,Arial,sans-serif;
    line-height: 1;
    margin: 40px 0px 0px 0px;
    text-align: center;
    color: white; 
    font-weight: 400;
}

.individual-session-main-div-rk p{
font-size: 16px;
margin: 10px 0px 0px 0px;
font-weight: 500;
color: white;
}
.second-video-main-div-rk{
    height: 800px;
    width: 100%;
    /* border: 1px solid blue; */
    margin: 4% 0px 0px 0px;
}

.second-video-div-rk{
    height: 80%;
    width: 100%;
    /* border: 1px solid red; */
}
.imageResize-rk1{
    height: 100%;
    width: 100%;
}

.second-video-div-text-rk{
    height: 27%;
    width: 100%;
    /* border: 1px solid green; */
    margin: 20px 0px 0px 0px;
    background-color: black;
}

.second-video-div-text-rk h3{
    font-size: 45px;
    font-family: "BBSans Regular",Helvetica,Arial,sans-serif;
    line-height: 1;
    margin: 40px 0px 0px 0px;
    text-align: center;
    color: white; 
    font-weight: 400;
}

.second-video-div-text-rk p{
    font-size: 16px;
    margin: 10px 0px 0px 0px;
    font-weight: 500;
    color: white;
}

.second-video-div-text-rk button{
    background-color:white;
    margin: 10px 0px 0px 0px ;
    height: 40px;
    width: 180px;
    /* border: 1px solid white; */
    color: black;
}

/* ADVICE IN REAL  */

.advice-main-div-rk{
    height: fit-content;
    width: 100vw;
    /* border: 5px solid red; */
    margin: 6% 0px 0px 0px ;
    background-color: rgb(244,244,244);
}

.advice-text-main-div{
    height: fit-content;
    padding:20px;
    width: 100vw;
    margin:auto;
    /* border: 1px solid green; */
}

.advice-text-main-div h1{
    font-size: 60px;
    font-family: "BBSans Regular",Helvetica,Arial,sans-serif;
    line-height: 1;
    margin: 20px 0px 0px 0px;
    text-align: center;
    color: black; 
    font-weight: 500;   
}

.advice-text-main-div p{
    font-size: 17px;
    margin: 10px 0px 0px 0px;
    font-weight: 500;
    color: gray;   
}

.advice-main-videos-div-rk{
    height: 80%;
    width: 90vw;
    /* border: 5px solid blue; */
    display: grid;
    grid-template-columns:1fr 1fr 1fr 1fr; 
    justify-content:center;
    margin:auto;
    gap:40px;
    padding-bottom:50px;
}

.advice-videos-div-rk{
    height: 100%;
    width: 100%;
    /* border: 4px solid goldenrod; */
    margin: 0px 0px 0px 10px ;
}

.imageResize-rk3{
    height: 70%;
    width: 100%;
}
.advice-videos-div-rk h4{
    font-size: 30px;
    font-family: "BBSans Regular",Helvetica,Arial,sans-serif;
    line-height: 1;
    margin: 20px 0px 0px 0px;
    text-align: center;
    color: black; 
    font-weight: 500; 
}

.advice-videos-div-rk p{
    font-size: 15px;
    margin: 10px 0px 0px 0px;
    font-weight: 400;
    color: gray; 
}

.advice-videos-div-rk button{
    background-color:black;
    margin: 10px 0px 10px 0px ;
    height: 40px;
    width: 180px;
    /* border: 1px solid white; */
    color: white;   
}

/* CONENT ANYTIME */

.content-main-div-rk{
    height: 800px;
    width: 100%;
    /* border: 5px solid green; */
    margin: 30px 0px 0px 0px ;
}

.text-div-rk{
    height: 20%;
    width: 100%;
    /* border: 3px solid blue; */
}

.text-div-rk h1{
    font-size: 50px;
    font-family: "BBSans Regular",Helvetica,Arial,sans-serif;
    line-height: 1;
    margin: 20px 0px 0px 0px;
    text-align: center;
    color: black; 
    font-weight: 500;    
}

.text-div-rk p{
    font-size: 15px;
    margin: 10px 0px 0px 0px;
    font-weight: 400;
    color: gray;    
}

.content-video-main-div-rk{
    height: 80%;
    width: 100%;
    display: flex;
    geid-template-columns:1fr 1fr 1fr;
    /* border: 5px solid yellow; */
}
.content-video-div-rk{
    height: 100%;
    width: 46%;
    /* border: 3px solid blue; */
    margin: 0px 0px 0px 40px ;
}
.imageResize-rk5{
    height: 70%;
    width: 90%;
}
.imageResize-rk6{
    height:74%;
    width:70%;
}

.content-video-div-rk h4{
    font-size: 40px;
    font-family: "BBSans Regular",Helvetica,Arial,sans-serif;
    line-height: 1;
    margin: 20px 0px 0px 0px;
    text-align: center;
    color: black; 
    font-weight: 400;  
}

.content-video-div-rk p{
    font-size: 15px;
    margin: 10px 0px 0px 0px;
    font-weight: 400;
    color: gray;     
}

.content-video-div-rk button{
    background-color:black;
    margin: 10px 0px 10px 0px ;
    height: 40px;
    width: 180px;
    /* border: 1px solid white; */
    color: white;
}
`;

const Virtual = () => {

    return (
        <VirtualStyling>
            <div>
                <div id="main-first-video-div-rk">
                    <div className="first-video-div-rk">
                        <video
                            className="imageResize-rk"
                            src="https://www.bobbibrowncosmetics.com/media/export/cms/VirtualServices/FH21_VirtualServices_RealTime_Sizzle_pc.mp4"
                            muted
                            loop
                            preload="none"
                            autoPlay="10"
                        />
                    </div>
                    <div className="individual-session-main-div-rk">
                        <h3>INDIVIDUAL SESSION ON YOUR TIME</h3>
                        <p>Meet with a Pro Artist for a Virtual One-on-One</p>
                    </div>
                    <div className="second-video-main-div-rk">
                        <div className="second-video-div-rk">
                            <video
                                className="imageResize-rk1"
                                src="https://www.bobbibrowncosmetics.com/media/export/cms/VirtualServices/FH21_VirtualServices_hero.mp4"
                                muted
                                loop
                                preload="none"
                                autoPlay="10"
                            />
                        </div>
                        <div className="second-video-div-text-rk">
                            <h3>VIRTUAL ARTISTRY CONSULTATIONS</h3>
                            <p>Books a complimentary video session with one of our<br />top Artist for personalized advice and beauty tips.</p>
                            <button>BOOK NOW (ON US)</button>
                        </div>

                    </div>
                </div>
                <div className="advice-main-div-rk">
                    <div className="advice-text-main-div">
                        <h1>ADVICE IN REAL TIME</h1>
                        <p>Connect with an Artist Live</p>
                    </div>
                    <div className="advice-main-videos-div-rk">
                        <div className="advice-videos-div-rk">
                            <video
                                className="imageResize-rk3"
                                src="https://www.bobbibrowncosmetics.com/media/export/cms/VirtualServices/FH21_VirtualServices_RealTime_LiveChat_pc.mp4"
                                muted
                                loop
                                preload="none"
                                autoPlay="10"
                            />
                            <h4>LIVE CHAT</h4>
                            <p>Talk technique product info <br />or get instant advice.</p>
                            <p>Monday-Friday 10AM-10PM ET <br /> Saturday & Sunday 12PM -8PM ET</p>
                            <button>CHAT NOW</button><br />
                            <a href="" style={{ textDecoration: "", fontSize: "10px" }}>READ REVIEWS</a>
                        </div>
                        <div className="advice-videos-div-rk">
                            <video
                                className="imageResize-rk3"
                                src="https://www.bobbibrowncosmetics.com/media/export/cms/VirtualServices/FH21_VirtualServices_RealTime_Livestream_pc.mp4"
                                muted
                                loop
                                preload="none"
                                autoPlay="10"
                            />
                            <h4>VIDEO CHAT</h4>
                            <p>Connect on camera for beaauty <br />advice shade suggestion or <br />products recs.</p>
                            <p>Monday-Friday 10AM-10PM ET <br /> Saturday & Sunday 12PM -8PM ET</p>
                            <button>VIDEO CHAT NOW</button><br />
                        </div>
                        <div className="advice-videos-div-rk">
                            <video
                                className="imageResize-rk3"
                                src="https://www.bobbibrowncosmetics.com/media/export/cms/VirtualServices/FH21_VirtualServices_RealTime_Text_pc.mp4"
                                muted
                                loop
                                preload="none"
                                autoPlay="10"
                            />
                            <h4>TEXT</h4>
                            <p>Send message<br />at (8668-897-878).</p>
                            <p>Monday-Friday 10AM-10PM ET <br /> Saturday & Sunday 12PM -8PM ET</p>
                            <button>TEXT NOW</button><br />

                        </div>
                        <div className="advice-videos-div-rk">
                            <video
                                className="imageResize-rk3"
                                src="https://www.bobbibrowncosmetics.com/media/export/cms/VirtualServices/FH21_VirtualServices_RealTime_Livestream_pc.mp4"
                                muted
                                loop
                                preload="none"
                                autoPlay="10"
                            />
                            <h4>LIVE STREAM</h4>
                            <p>Tune in for the best and brightest in<br />beauty.</p>
                            <button>SEE SCHEDULE</button><br />
                        </div>
                    </div>
                </div>
                <div className="content-main-div-rk">
                    <div className="text-div-rk">
                        <h1>CONTENT ANYTIME</h1>
                        <p>Explore your Own 24/7</p>
                    </div>
                    <div className="content-video-main-div-rk">
                        <div className="content-video-div-rk">
                            <video
                                className="imageResize-rk5"
                                src="https://www.bobbibrowncosmetics.com/media/export/cms/VirtualServices/FH21_VirtualServices_Anytime_HowTo_pc.mp4"
                                muted
                                loop
                                preload="none"
                                autoPlay="10"
                            />
                            <h4>HOW TOS</h4>
                            <p>Tune in for the best and brightest in<br />beauty.</p>
                            <button>EXPLORE NOE </button><br />

                        </div>
                        <div className="content-video-div-rk">
                            <img
                                className="imageResize-rk6"
                                src="https://www.bobbibrowncosmetics.com/media/export/cms/VirtualServices/BB_Email_Virtual_Services_Q4_Virtual_Try-On_LWCSS_Animation.gif"
                                alt=""
                            />
                            <h4>VIRTUAL TRY-ON</h4>
                            <p>See yourself in any shade of our most loved products</p>
                            <button>TRY ON NOW </button><br />
                        </div>
                    </div>
                </div>
            </div>
        </VirtualStyling>

    );
};
export default Virtual;
