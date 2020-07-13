import React from "react";
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


const Result = ({ score }) =>{
    const history = useHistory()

   const showResult = () => {
        if(score <= 5) {
            return(
                <p style={{color:"red"}}>Better Luck Next Time!</p>
            )
        }
        if(score > 5 && score <= 7 ) {
          return(
            <p style={{color:"red"}}>Congratulations!<br />You win an iPhone XR</p>
        )
        }
        else{
          return(
            <p style={{color:"red"}}> Congratulations!<br />You win a MacBook Pro</p>
        )
        }
      }
    
return(
    <div className="questionBox">
        <div className="score">You Scored {score} / 10 correct answers! <br />
            {showResult()}
        </div>
        
        
        <div className = "Btn">
        
        <Button className = "playBtn" variant="outline-dark" onClick={()=>history.push("/leaderboard")}>Check Leaderboard</Button>
        </div>
    </div>
)
}
export default Result;