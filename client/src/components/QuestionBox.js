import React, { useState } from "react";

const QuestionBox = ({question, options, selected}) => {
    const [answer ] = useState(options);
    return (
        <div className="questionBox">
            <div className="question">{question}</div>
            {answer.map((text, index) => (
                <ul key={index}>
                <button  
                className="answerBtn" 
                onClick = {() =>{
                    
                    selected(text);
                }}>
                    {text}
                </button>
                </ul>
            ))}
        </div>
    )
}

export default QuestionBox;