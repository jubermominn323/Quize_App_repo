import React, { Component } from "react";
import "./assets/style.css";
import QuestionBox from "./components/QuestionBox"
import Result from "./components/result"
import Navigation from "./components/navbar"



class Quize extends Component {
  state = {
    questionBank: [],
    selectedAnswers:[],
    score: 0,
    activeQue: 0,
    responses: 0,
    count: 10,
    userInfo: [],
    userId: "",
    fetchResult: false,
  };
  
showResult = () => {
  const score = this.state.score.score
  console.log(score)
  if(score <= 5) {
      return(
          <p style={{color:"red"}}>Better Luck Next Time!</p>
      )
  }
  if(score > 5 && score <= 7 ) {
    return(
      <p style={{color:"red"}}>Congratulations!<br />You win an iPhone XR</p>
  )
  }
  else{
    return(
      <p style={{color:"red"}}> Congratulations!<br />You win a MacBook Pro</p>
  )
  }
}
  
displayResult = () => {
      if(this.state.selectedAnswers.length === 0){
        return (
          <Result score={0} showResult={this.showResult} />
          )  
      }
      else{
      return (
      <Result score={this.state.score.score} showResult={this.showResult} />
      )
    }
    }
  
  sendData = () =>{
    console.log(this.state.selectedAnswers.length)
    if(this.state.selectedAnswers.length === 0 ){
       this.setState({
         score: {score : 0},
         count: 0,
       })
       
       return ;
    }
    fetch("http://localhost:8000/api/result",{
      method: "post",
      headers : {
        "Content-Type":"application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        answers: this.state.selectedAnswers,
        quesBank: this.state.questionBank,
        userID: this.state.userInfo._id
      })
    }) 
    .then((res) => res.json())
    .then(data =>{
      this.setState({
        score: data,
        fetchResult: true,
        count: 0,
      },()=>{ console.log(this.state.score)})
    })
  }
  
  nextQue = (ans, quesId) =>{
  this.setState({
    count: 0 , selectedAnswers: [...this.state.selectedAnswers, {ans, quesId} ]
  },()=> console.log(this.state.selectedAnswers))

  this.setState({
    userInfo: JSON.parse(localStorage.getItem("user"))
  })
  console.log(this.state.activeQue)
    if(this.state.activeQue === 9){
      console.log(this.state.selectedAnswers.length)
      this.sendData();
    }
  }

  nextIndex = () =>{
    if(this.state.activeQue === 9){
      clearInterval(this.myInterval)
      // this.sendData();
    }
    
    this.setState({
      activeQue: this.state.activeQue + 1
    })
    
    return 10;
  }
  componentDidMount() {
    const temp = this
    temp.setState({
      fetchResult : false
    })
    fetch("http://localhost:8000/api/randomque")
    .then((res) => res.json())
    .then(ques =>{
      this.setState({ questionBank: ques},
        () => {
          temp.myInterval = setInterval(() =>{
            temp.setState({
              count : temp.state.count === 0 && temp.state.activeQue < 10 ? temp.nextIndex() : temp.state.count - 1    
            })
            
          }, 1000)
        }
        
      )
    })
  }


  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  render() {
    if(this.state.questionBank.length === 0){
      return null;
    }
    const {question, options, _id} = this.state.questionBank[this.state.activeQue]
    // console.log(question)
    return (
      <div>
        <Navigation />
      <div className="container">
        <div className="title">
          Quiz
          <div className = "timer">
              Time : {this.state.count > 0 ? this.state.count - 1 : 0} 
          </div>
          </div>

          {this.state.activeQue < 10 && !this.state.fetchResult ?
          <QuestionBox 
          question={question} 
          options={options}
          queId={_id} 
          key={_id}
          selected={this.nextQue} 
          /> : this.displayResult()
        } 
          

          {/* {this.displayResult() } */}
        

        
        {/* {this.state.responses === 11 ? (<Result score={this.state.score} playAgain={this.playAgain}  /> ) : null} */}
        </div>
      </div>
      
      
    ); 
  }
}

export default Quize