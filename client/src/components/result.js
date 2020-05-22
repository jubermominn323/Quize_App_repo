import React from "react";
import { Button } from 'react-bootstrap'


const Result = ({score, playAgain}) => (
    <div className="score-board">
        <div className="score">Thank You for playing<br /> You Scored {score} / 10 correct answers!</div>
        <div className = "Btn">
        <Button className = "playBtn" variant="outline-dark" onClick={playAgain}> Play Again!</Button>
    </div>
    </div>
)

export default Result;