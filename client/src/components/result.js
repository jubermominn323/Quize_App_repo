import React from "react";
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


const Result = ({score, showResult}) =>{
    const history = useHistory()

return(
    <div className="score-board">
        <div className="score">You Scored {score} / 10 correct answers! <br />{showResult()}</div>
        <div className = "Btn">
        <Button className = "playBtn" variant="outline-dark" onClick={()=>history.push("/home")}>Return Home</Button>
        </div>
    </div>
)
}
export default Result;