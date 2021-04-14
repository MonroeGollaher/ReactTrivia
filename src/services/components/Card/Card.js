import React from 'react'
import './Card.css'

function Card({ question, correct_answer }){

  return (
    <div>
      <h1>Question: { question }</h1>
      <h5>Answer: { correct_answer } </h5>
    </div>
  )

}

export default Card