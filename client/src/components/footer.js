import React from 'react'
import { Navbar } from 'react-bootstrap'

const Footer = () => {

    return(
    <Navbar expand="sm" bg="light" fixed="bottom" >
    <Navbar.Brand style={{color:"dark",fontSize:"15px"}}><span className="glyphicon glyphicon-copyright-mark"></span>Copyright Juber Products,Inc, All rights reserved</Navbar.Brand>
    <Navbar.Brand href="http://www.facebook.com" style={{marginLeft:"700px"}}><img src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19754.png" alt="Brand" height="50px" width="50px" /></Navbar.Brand>
    <Navbar.Brand href="http://www.twitter.com"><img src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-twitter-icon-logo-by-vexels.png" alt="Brand" height="40px" width="40px" /></Navbar.Brand>
    </Navbar>
    )
}

export default Footer