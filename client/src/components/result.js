import React from "react";
import { Button } from 'react-bootstrap'
//import { Link } from 'react-router-dom'

const Result = ({score, playAgain}) => (
    <div className="score-board">
        <div className="score">Thank You for playing<br /> You Scored {score} / 10 correct answers!</div>
        {/* <div className = "playBtn"> <Link to="/home">Click to go Home</Link></div> */}
        <Button className = "playBtn" variant="outline-dark" onClick={playAgain}> Play Again!</Button>
    </div>
)

export default Result;