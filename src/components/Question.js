import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(() => {
    let timerId = setTimeout(() => {
      setTimeRemaining(timeRemaining => {
        if (timeRemaining <= 0) {
          onAnswered(false)
          return 10
        }
        return timeRemaining - 1
      })
    }, 1000)
    return function cleanUp() {
      clearTimeout(timerId)
    }
  })
  if (timeRemaining === 0) {
    setTimeout(10)
  }
  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
