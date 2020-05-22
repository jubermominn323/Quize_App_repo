import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const Signin = ( ) => {
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () =>{
    fetch("/api/signin",{
    method:"post",
    headers:{
    "Content-Type":"application/json"
    },
    body:JSON.stringify({
        email,password
    })
   }).then(res=>{return res.json()})
   .then(data=>{
    console.log(data)
       if(data.error){
         console.log("invalid")
        toast.error("Invalid Username and Password")
       }
       else{
        localStorage.setItem("token",data.token)   
        localStorage.setItem("user",JSON.stringify(data.user))   
        toast.success("Signed in successfully")

        history.push("/home")
        }
   })
   .catch(err=>
    console.log(err)
    )
}

  const signinForm = () => (
    <div className="list-body">
        <ul style={{listStyleType:"none"}}>
        <div className="form-group">
        <li><label style={{fontSize:"20px"}} >Email:</label></li>
            <input type="email" className="form-control-lg" style={{width:"300px"}} value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
        <li><label  style={{fontSize:"20px"}} > Password: </label></li>
        <input type="password" className="form-control-lg" style={{width:"300px"}} value={password} onChange={e => setPassword(e.target.value)} required />
        
        </div>
        <br />
        <button type="submit" onClick={()=>handleSubmit()} className="btn btn-outline-success btn-block btn-lg" style={{height:"40px"}} > Submit </button>
        <br />
        <Link to="/signup">
        Don't have an account?
        </Link>
        </ul>
        </div>
  );

  return (
    <div className="addPost">
      <ToastContainer />
    <h1 className="p-5 text-center" style={{fontSize:"30px"}}>Sign in</h1>
    {signinForm()}
    </div>

  );
};

export default Signin;