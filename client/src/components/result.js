import React from "react";
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


const Result = ({ score, showResult}) =>{
    const history = useHistory()
    // const userId = JSON.parse(localStorage.getItem("user"))._id
    // console.log(userId)
    // const [score, setScore] = useState(0)
    // useEffect(() => {
    //     fetch("http://localhost:8000/api/score",{
    //         method:"post",
    //         headers: {
    //             "Authorization":"Bearer"
    //         },
    //         body: JSON.stringify({
    //             userID : userId 
    //         }) 
    //     }).then(res=> res.json())
    //     .then(result=>{
    //         console.log(result)
    //         setScore(result)
    //     })
    // })
    console.log(score)
    
return(
    <div className="score-board">
        <div className="score">You Scored {score} / 10 correct answers! <br />{showResult()}</div>
        
        
        <div className = "Btn">
        {/* <Button className = "playBtn" variant="outline-dark" onClick={()=>history.push("/home")}>Return Home</Button> */}
        
        <Button className = "playBtn" variant="outline-dark" onClick={()=>history.push("/leaderboard")}>Check Leaderboard</Button>
        </div>
    </div>
)
}
export default Result;