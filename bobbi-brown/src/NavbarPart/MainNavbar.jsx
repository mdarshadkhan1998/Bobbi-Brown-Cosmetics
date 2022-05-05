import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubNavContainer = styled.div`
  height: 6.8vh;
  width: 100%;

  background-color: #5bafb1;

  .firstDiv {
    height: 100%;
    display: flex;
    /* align-items: flex-end; */
    justify-content: center;

    ul {
      margin: 0;
      list-style: none;
      display: flex;
      gap: 5.2vw;

      li > * {
        display: flex;

        align-items: center;
        gap: 0.52vw;
        text-decoration: none;
        color: #ffffff;

        padding: 0.26vw;
      }

      li {
        //Icons
        img {
          width: 2.39vw;
        }
      }

      .downArrowIcon {
        font-size: 1.095vh;
      }

      //Perent List
      .perentList {
        position: relative;
      }

      //SubList
      .sub_list {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        height: auto;
        z-index: 1;
        background-color: #f6f6f6;
        top: 4.5vh;
        left: 3.1vw;
        width: 8vw;

        ul {
          margin: 0;
          list-style: none;
          display: flex;
          gap: 0;
          padding: 0;
          flex-direction: column;

          width: 100%;
          li {
            height: 4.5vh;

            display: flex;
          }
          .subLink {
            color: #151b39;
            font-size: 1.43vh;
          }
        }
      }

      .perentList:hover .sub_list {
        opacity: 1;
        visibility: visible;
      }
      .perentList:hover .sub_list li:hover {
        background-color: #fffbfb;
      }
      .perentList:hover .sub_list li:hover .subLink {
        color: #02b7c2;
      }
    }
    p {
      margin: 0;

      font-size: 1.53vh;
      line-height: 5.038vh;
    }
  }

  .secondDiv {
    width: 100%;
    height: 4.6vh;

    ul {
      list-style: none;
      display: flex;
      gap: 2.75vh;
      height: 100%;

      align-items: center;
      font-size: 1.53vh;
      justify-content: center;
      margin: 0;

      li > * {
        color: #151b39;
        text-decoration: none;
      }
    }

    //sublist
  }
`;

const MainNavbar = () => {
    
  return (
    <div>
        <SubNavContainer>
      <div className="firstDiv">
        <ul>
          <li>
            <Link to={"#"}>
              <img
                src="https://www.netmeds.com/assets/version1649433944/gloryweb/images/icons/medicine.svg"
                alt=""
              />
              <p>Medicine</p>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img
                src="https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg"
                alt=""
              />
              <p>Wellness</p>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img
                src="https://www.netmeds.com/assets/gloryweb/images/icons/diagnostics.svg"
                alt=""
              />
              <p>Lab Tests</p>
            </Link>
          </li>
          <li className="perentList">
            <Link to={"#"}>
              <img
                src="https://www.netmeds.com/assets/gloryweb/images/icons/beauty.svg"
                alt=""
              />
              <p>Beuty</p>
              {/* <FontAwesomeIcon
                icon={faCaretDown}
                onMouseOver={icon`${faCaretUp}`}
                className="downArrowIcon"
              /> */}
            </Link>
            <div className="sub_list">
              <ul>
                <li>
                  <Link className="subLink" to={"#"}>
                    Personal Care
                  </Link>
                </li>
                <li>
                  <Link className="subLink" to={"#"}>
                    Make-Up
                  </Link>
                </li>
                <li>
                  <Link className="subLink" to={"#"}>
                    Hair
                  </Link>
                </li>
                <li>
                  <Link className="subLink" to={"#"}>
                    Skin Care
                  </Link>
                </li>
                <li>
                  <Link className="subLink" to={"#"}>
                    Tools & Appliances
                  </Link>
                </li>
                <li>
                  <Link className="subLink" to={"#"}>
                    Mom & Baby
                  </Link>
                </li>
                <li>
                  <Link className="subLink" to={"#"}>
                    Fragrances
                  </Link>
                </li>
                <li>
                  <Link className="subLink" to={"#"}>
                    Men's Grooming
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="perentList">
            <Link to={"#"}>
              <img
                src="https://www.netmeds.com/assets/version1649433944/gloryweb/images/icons/health-library.svg"
                alt=""
              />
              <p>Health Coener</p>
              {/* <FontAwesomeIcon icon={faCaretDown} className="downArrowIcon" /> */}
            </Link>
            <div className="sub_list">
              <ul>
                <li>
                  <Link className="subLink" to={"#"}>
                    Health Library
                  </Link>
                </li>
                <li>
                  <Link className="subLink" to={"#"}>
                    PatientsAlike
                  </Link>
                </li>
                <li>
                  <Link className="subLink" to={"#"}>
                    Corona Awareness
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="secondDiv">
        <ul>
          <li>
            <Link to={"#"}>COVID Essentials</Link>
          </li>
          <li>
            <Link to={"#"}>Diabetes</Link>
          </li>
          <li>
            <Link to={"#"}>Eyewear</Link>
          </li>
          <li>
            <Link to={"#"}>Ayush</Link>
          </li>
          <li>
            <Link to={"#"}>Ayurvedic</Link>
          </li>
          <li>
            <Link to={"#"}>Homeopathy</Link>
          </li>
          <li>
            <Link to={"#"}>Fitness</Link>
          </li>
          <li>
            <Link to={"#"}>Mom & Baby</Link>
          </li>
          <li>
            <Link to={"#"}>Devices</Link>
          </li>
          <li>
            <Link to={"#"}>Surgical</Link>
          </li>
          <li>
            <Link to={"#"}>Sexual Wellness</Link>
          </li>
          <li>
            <Link to={"#"}>Treatments</Link>
          </li>
        </ul>
      </div>
    </SubNavContainer>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384z"/></svg>
     */}
    </div>
  )
}


export default MainNavbar