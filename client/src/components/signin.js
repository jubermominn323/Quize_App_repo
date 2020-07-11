import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const Signin = ( ) => {
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () =>{
    fetch("http://localhost:8000/api/signin",{
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
<<<<<<< HEAD
         console.log(data.error)
=======
         console.log("invalid")
>>>>>>> 17159dc664837890b49a9342978555e1248de3d9
        toast.error(data.error)
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
            <input type="email" className="form-control-lg" style={{height:"40px",width:"90%"}} value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
        <li><label  style={{fontSize:"20px"}} > Password: </label></li>
        <input type="password" className="form-control-lg" style={{height:"40px",width:"90%"}} value={password} onChange={e => setPassword(e.target.value)} required />
        
        </div>
        <br />
        <button type="submit" onClick={()=>handleSubmit()} className="btn btn-outline-success btn-block btn-lg" style={{height:"40px",width:"90%"}} > Submit </button>
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
    <h1 className="pt-5 text-center" style={{fontSize:"30px"}}>Sign in</h1>
    {signinForm()}
    </div>

  );
};

export default Signin;
