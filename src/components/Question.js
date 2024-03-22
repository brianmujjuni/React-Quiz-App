import React from 'react'
import Option from './Options'
export default function Question({question}) {

  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question}/>
    </div>
  )
}
