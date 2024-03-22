import React from 'react'

export default function StartScreen({numQuestion,dispatch}) {
  return (
    <div className='start'>
        <h3>Welcome to the React Quiz</h3>
        <p>{numQuestion} questions to test your react mastery</p>
        <button className='btn btn-ui' onClick={()=>dispatch({type: 'start'})}>Start</button>
    </div>
  )
}
