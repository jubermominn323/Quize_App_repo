import React, { useState, useEffect } from 'react'
import Navigation from "./navbar"

const Leaderboard = () => {
    const [ data, setData ] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/api/detail",{
            headers: {
                "Authorization":"Bearer"
            }
        }).then(res=> res.json())
        .then(result=>{
            
            setData(result)
        })
    },[])

    return(
        <div>
            <Navigation />
            <div>
                <div style={{position:"relative",float:"left"}}><img src="https://www.freeiconspng.com/uploads/leaderboard-icon-9.png"
                 alt="leader" width="100px" height="100px" /></div>
                <p style={{textAlign:"center",fontSize:"45px",padding:"10px"}}>Welcome to Leaderboard</p>
            </div>
              
            <div className="leader" >
            <table className="table table-striped">
                <tbody>    
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                {
                    data.map(item => {
                    return(
                            
                    <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.score}</td>
                    </tr>
               
                    )        
                    })
                }
                 </tbody>    
                </table>
            </div>
   
        </div>    
    )
}
export default Leaderboard