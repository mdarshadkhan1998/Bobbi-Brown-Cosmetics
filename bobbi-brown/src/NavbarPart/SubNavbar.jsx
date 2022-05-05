import React from 'react';
import styles from '../styles/navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar, NavDropdown, NavLink} from 'react-bootstrap'


const dropdowns = {
    display : "flex",
    justifyContent: "space-between",
    padding: "10px 100px",
}


const SubNavbar = () => {

  return (

    <Navbar bg="myColor" variant='#EEEEEA' sticky='top' style={{...dropdowns}}>

        <Nav style={{gap: "30px", color:"black"}}>
            <NavDropdown title='SHOP'>
                <NavDropdown.Item href='/'>ALL FRUITS</NavDropdown.Item>
                <NavDropdown.Item href='/'>FRESH CUTS</NavDropdown.Item>
                <NavDropdown.Item href='/'>FRUIT COMBOS</NavDropdown.Item>
                <NavDropdown.Item href='/'>GIFTS BY KIMAYE</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title='LEARN'>
                <NavDropdown.Item href='/'>OUR STORY</NavDropdown.Item>
                <NavDropdown.Item href='/'>WHY KIMAYE</NavDropdown.Item>
                <NavDropdown.Item href='/'>TRACEABILITY</NavDropdown.Item>
                <NavDropdown.Item href='/'>BEYOND FRUITS</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href='/'>GROW</Nav.Link>
        </Nav>
        
        <Nav>
            <NavLink href='/'>
                <img className="logo" href='/' src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204' />
            </NavLink>
            
        </Nav>

        <Nav style={{display:"flex", gap:"30px"}}>
            <NavLink>
                <i className="fa-solid fa-location-dot"></i>
            </NavLink>
            <NavLink>
                <i className="fa-solid fa-magnifying-glass"></i>
            </NavLink>
            <NavLink href='/'>
                <i className="fa-solid fa-user"></i>
            </NavLink>
            <NavLink href='/'>
                <i className="fa-solid fa-bag-shopping"></i>
            </NavLink>
                
        </Nav>

        

    </Navbar>

    
  )
}

export default SubNavbar