import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './navbar'
const Home = () => {

    return (
        <div>
            <Navigation />
        <div className="addpost">
            <div className="home-title">
            <h1 className="p-5 text-center">Welcome to the Quize App</h1>
            </div>
            <div className="rules">
            <h3><b>Rules and Regulation</b></h3>
            <ul>
                <li>The quize consist of 10 question.</li>
                <li>Each question has 4 options.</li>
                <li>Only 1 correct between the 4 options. </li>
                <li>Each question has 10 seconds of time.</li>
                <li>Play again and try to maximize score and knowledge.</li>
                
            </ul>   
            </div>
            <div className="start-link">
            <h1><Link to="/quize">Click here to start Quize</Link></h1>
            </div>
        </div>
        </div>
    )
}

export default Home