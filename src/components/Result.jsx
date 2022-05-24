import React from "react";

export const Result = (props) => {
    return (
        <div className='result-wrapper'>
            <h2 className='result-title'>правильных ответов:</h2>
            <div className='result-count'>{props.result}</div>
            <input onClick={props.getResult} className='result-button' type='button' value='RESTART' />
        </div>
    )
}