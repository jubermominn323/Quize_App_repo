import React, { useState } from "react";
import { useHistory,  Link } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const Signup = () => {
  const history = useHistory()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const uploadFields=()=>{

    fetch("/api/signup",{
    method:"post",
    headers:{
    "Content-Type":"application/json"
    },
    body:JSON.stringify({
        name,email,password,
    })
   }).then(res=>{return res.json()})
   .then(data=>{

       if(data.error){
        toast.error(data.error)
       }
       else{
           toast.success("Account Created")
        history.push('/')
        }
   }).catch(err=>console.log(err))


  }
const handleSubmit=()=>{
      uploadFields() 
    }

  const signupForm = () => (
    <div className="list-body">
        <ul style={{listStyleType:"none"}}>
        <div className="form-group">
        <li><label  style={{fontSize:"20px"}}> Name: </label></li> 
            <input type="text" className="form-control-lg" style={{height:"40px",width:"90%"}} placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)}   required />
        </div>
        <div className="form-group">
        <li><label  style={{fontSize:"20px"}}>Email:</label></li>
            <input type="email" className="form-control-lg" style={{height:"40px",width:"90%"}} value={email} placeholder="Enter Email" onChange={e => setEmail(e.target.value)}   required />
        </div>
        <div className="form-group">
        <li><label  style={{fontSize:"20px"}}> Password: </label></li>
        <input type="password" className="form-control-lg" style={{height:"40px",width:"90%"}} value={password} placeholder="Enter Password" onChange={e => setPassword(e.target.value)}   required />
        <small className="form-text text-muted">Password must contain atleast 6 characters.</small>
        </div><br />
        <button type="submit" onClick={()=>handleSubmit()} className="btn btn-outline-success btn-block btn-lg" style={{height:"40px",width:"90%"}} > Submit </button>
        <br />
        <Link to="/">
        Already have an account?
        </Link>
        </ul>
        </div>
  )

  return (
    
      <div className="addPost">
        <ToastContainer />
        <h1 className="pt-5 text-center" style={{fontSize:"30px"}}>Sign up</h1>

        {signupForm()}
      </div>
   
  );
};

export default Signup;
