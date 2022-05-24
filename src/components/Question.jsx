import React from "react";
// import { NavLink, Route } from "react-router-dom";

export const Question = (props) => {
    return (
        // <Route exact path={props.path}>
        <div className='test-wrapper'>
          <h2 className='question-title'><span>{props.questionNumber}</span>{props.question}</h2>
          
          <div className='question-inputs'>
            <input onClick={(event) => props.getAnswer(event)} className='question-input' type='radio' id='q1' name='q1' value={props.value1} />
            <label htmlFor='q1'>{props.var1}</label>
          </div>
          <div className='question-inputs'>
            <input onClick={(event) => props.getAnswer(event)} className='question-input' type='radio' id='q2' name='q1' value={props.value2} />
            <label htmlFor='q2'>{props.var2}</label>
          </div>
          <div className='question-inputs'>
            <input onClick={(event) => props.getAnswer(event)} className='question-input' type='radio' id='q3' name='q1' value={props.value3} />
            <label htmlFor='q3'>{props.var3}</label>
          </div>
          <div className='question-inputs'>
            <input onClick={(event) => props.getAnswer(event)} className='question-input' type='radio' id='q4' name='q1' value={props.value4} />
            <label htmlFor='q4'>{props.var4}</label>
          </div>

          <div className="question-button">
            {/* <NavLink to={props.link}></NavLink> */}
            <input onClick={props.getReset} className='question-button-next' type='button' value={props.next} />
          </div>

        </div>
        // </Route>
         
    )
}