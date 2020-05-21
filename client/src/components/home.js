import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './navbar'
const Home = () => {

    return (
        <div>
            <Navigation />
        <div className="addPost">
            <div className="home-title">
            <h1>Welcome to the Quize App</h1>
            <h3>Rules and Regulation of quize</h3>
            <ul>
                <li>The quize consist of 10 question.</li>
                <li>Each question has 4 options.</li>
                <li>Only 1 correct between the 4 options. </li>
                <li>Each question has 10 seconds of time.</li>
                
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