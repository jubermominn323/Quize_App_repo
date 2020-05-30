import React from 'react';
import { Button, Navbar } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const Navigation = () => {
  const history = useHistory()
  const userName = JSON.parse(localStorage.getItem("user"))
   
    
    return (
        <Navbar style={{backgroundColor: "#e3f2fd"}} expand="lg" sticky="top" className="mr-sm-0">
        

        <Navbar.Brand onClick={()=>history.push("/home")} style={{cursor: "pointer"}}>
      <img
        src="https://d259t2jj6zp7qm.cloudfront.net/images/20200113132432/quiz-icon-round.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
        <Navbar.Brand style={{color:"black", fontSize:"20px"}} ><b>Welcome {userName.name}</b> </Navbar.Brand>
        
        <div className="logout_btn">
        <Button style={{ fontSize:"20px"}} onClick={()=>{
            localStorage.clear()
            history.push("/")
          }} >Log Out
          </Button>
          </div>
          
</Navbar>

    )
}
export default Navigation