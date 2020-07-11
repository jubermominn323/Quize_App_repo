import React from "react";

const QuestionBox = ({question, options,queId , selected}) => {
    
    return (
        <div className="questionBox">
            <div className="question">{question}</div>
            {options.map((text, index) => (
                <ul key={index}>
                <button  
                className="answerBtn" 
                onClick = {() =>{
                    
                    selected(text, queId);
                }}>
                    {text}
                </button>
                </ul>
            ))}
        </div>
    )
}

export default QuestionBox;