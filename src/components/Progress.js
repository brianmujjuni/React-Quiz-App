import React from 'react'

export default function Progress({index,numQuestions,points,maxPossiblePoints,answer}) {
  return (
    <header className='progress'>
        <progress max={numQuestions} value={index + Number(answer !== null)}/>
        <p>Question <em>{index + 1}</em>/ {numQuestions}</p>
        <p><em>{points}</em> / {maxPossiblePoints}</p>
    </header>
  )
}
