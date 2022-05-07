import React from 'react'
import FixedNavbar from '../Navbar/NavbarPart/FixedNavbar'
import SubMainFixedNavbar from '../Navbar/NavbarPart/SubMainFixedNavbar'
import ToggleSubMainFixedNavbar from '../Navbar/NavbarPart/ToggleSubMainFixedNavbar'
import { StickyContainer, Sticky } from 'react-sticky';


const Navbar = () => {
  return (
    <div>
      {/* Main Navbar */}
      <div  style={{position: "fixed" , zIndex:"2000000", width:"100vw"}}>
          <FixedNavbar/>
          <SubMainFixedNavbar/>
        </div>
      {/* Scroll Fix Navbar */}
      <div style={{position: "fixed", top: "0", zIndex:"1000000", width:"100vw"}}>
          <ToggleSubMainFixedNavbar/>
        </div>
      {/* {top ? <>
          <FixedNavbar/>
          <SubMainFixedNavbar/>
        </> : <ToggleSubMainFixedNavbar/>} */}

      {/* <StickyContainer>
        <Sticky bottomOffset={80}>          
          {() => (<ToggleSubMainFixedNavbar/>)}
        </Sticky>
      </StickyContainer> */}

      
    </div>
  )
}

export default Navbar



// import ScrollToTop from "react-scroll-to-top";

// function CoolPage() {
//   return (
//     <div>
//       <ScrollToTop smooth />
//       <h1>Hello, world!</h1>
//     </div>
//   );
// }