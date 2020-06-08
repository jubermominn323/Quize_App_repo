import React, { Component } from "react";
import "./assets/style.css";
import quizeService from "./quizService/index"
import QuestionBox from "./components/QuestionBox"
import Result from "./components/result"
import Navigation from "./components/navbar"



class Quize extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0,
    count: 10
  };
  getQuestions = () => {
    quizeService().then(question => {
      this.setState({
        questionBank: question
      })

      this.setState({
        count : 10
      })

      this.setState({
        responses: this.state.responses < 11 ? this.state.responses + 1 : this.state.count === 0  
      })      
    })
    // console.log(this.state.responses)
  }
  computeAnswer = (answer, correctAnswer) => {
    const { score  } = this.state;
    if(answer === correctAnswer) {
      this.setState ({
        score: score + 1
      })
      this.getQuestions(); 
    }
    else {
      this.getQuestions();    
    }
}

showResult = () => {
  const score = this.state.score
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
  const checkResponse = this.state.responses
    if( checkResponse === 11 ) {
      if(this.state.count !== 0){
        this.setState({
          count : 0
        })
      }
      return (
      <Result score={this.state.score} showResult={this.showResult} />
      )
    }
    else{
      return null
    }
  }
  
  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0,
      count: 0
    })
    
  }
  componentDidMount() {
    this.getQuestions();
    this.myInterval = setInterval(() => {
      this.setState({
        count : this.state.count === 0 && this.state.responses < 11  ? this.getQuestions() : this.state.count - 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  render() {
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
        {
        this.state.questionBank.length > 0 &&
        this.state.responses < 11 &&
        this.state.questionBank.map(
          ({question, answers, correct, questionId}) => 
          <QuestionBox 
          question={question} 
          options={answers} 
          key={questionId}
          selected={answer => this.computeAnswer(answer, correct)} 
          />
        )}

        {this.displayResult() }
        {/* {this.state.responses === 11 ? (<Result score={this.state.score} playAgain={this.playAgain}  /> ) : null} */}
        </div>
      </div>
      
      
    ); 
  }
}

export default Quize