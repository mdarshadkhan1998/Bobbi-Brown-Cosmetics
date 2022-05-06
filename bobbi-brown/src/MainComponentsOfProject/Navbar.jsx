import React from 'react'
import FixedNavbar from '../Navbar/NavbarPart/FixedNavbar'
import SubMainFixedNavbar from '../Navbar/NavbarPart/SubMainFixedNavbar'
import ToggleSubMainFixedNavbar from '../Navbar/NavbarPart/ToggleSubMainFixedNavbar'


const Navbar = () => {
  return (
    <div>
        <FixedNavbar/>
        <SubMainFixedNavbar/>
        <ToggleSubMainFixedNavbar/>
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