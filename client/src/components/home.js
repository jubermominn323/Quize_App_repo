import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Navigation from './navbar'
const Home = () => {
    const history = useHistory()

    return (
        <div>
            <Navigation />
        <div className="addpost">
            <div className="home-title">
            <h1 className="p-5 text-center">Welcome to the QuizTech App</h1>
            </div>
            <div className="rules">
            <h3><b>Rules and Regulation</b></h3>
            <ul>
                <li>The quiz consist of 10 question.</li>
                <li>Each question has 4 options.</li>
                <li>Only 1 correct between the 4 options. </li>
                <li>Each question has 10 seconds of time.</li>
                <li>If you give more than 5 correct answers you win an exciting prize.</li>
                
            </ul>   
            </div>
            <div className="start-link">
            <Button className = "playBtn" variant="outline-dark" onClick={()=>history.push("/quize")}>Click to start</Button>
            </div>
        </div>
        </div>
    )
}

export default Home