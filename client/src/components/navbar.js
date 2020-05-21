import React from 'react';
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const Navigation = () => {
  const history = useHistory()
  const userName = JSON.parse(localStorage.getItem("user"))
  
    
    return (
        <Navbar bg="light" expand="lg" sticky="top" className=" mr-sm-2">
  <Navbar.Brand style={{marginLeft:"80px", color:"black", fontSize:"20px"}} ><b>Welcome {userName.name}</b> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav "  />
  <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:"800px", color:"black"}}>
    <Nav className="mr-auto">
        <NavDropdown title="Home"  id="basic-nav-dropdown" style={{fontSize:"20px"}}>
        <NavDropdown.Item style={{fontSize:"15px"}} onClick = {()=>{history.push("/home")}}>Home</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item >
          <Button style={{fontSize:"20px"}} onClick={()=>{
            localStorage.clear()
            history.push("/")
          }} >Log Out</Button>
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}
export default Navigation