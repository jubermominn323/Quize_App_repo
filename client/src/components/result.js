import React from "react";
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


const Result = ({score, showResult}) =>{
    const history = useHistory()
    const userData = JSON.parse(localStorage.getItem("user"))
    const upscore = (id) => {
        fetch("http://localhost:8000/api/score",{
    method:"put",
    headers:{
    "Content-Type":"application/json"
    },
    body:JSON.stringify({
        userId:id, score
    })
   }).then(res=> res.json())
   .then(result => {
       console.log(result)
   })
   history.push("/leaderboard")
}

return(
    <div className="score-board">
        <div className="score">You Scored {score} / 10 correct answers! <br />{showResult()}</div>
        <div className = "Btn">
        {/* <Button className = "playBtn" variant="outline-dark" onClick={()=>history.push("/home")}>Return Home</Button> */}
        
        <Button className = "playBtn" variant="outline-dark" onClick={()=>upscore(userData._id)}>Check Leaderboard</Button>
        </div>
    </div>
)
}
export default Result;