import { Questions } from "../utils/Quizzes";
import { useState, useContext } from "react";
import { GameStateContext } from "../utils/Contexts";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, setGameState } = useContext(
    GameStateContext
  );

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const prevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  return (
    <div className="Quiz">
      <div className="gameBoy_img">
      <h1 className="question">{Questions[currentQuestion].prompt}</h1>
      <div className="answers">
        <button className="option-btn"
          onClick={() => {
            chooseOption("optionA");
          }}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button className="option-btn"
          onClick={() => {
            chooseOption("optionB");
          }}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button className="option-btn"
          onClick={() => {
            chooseOption("optionC");
          }}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button className="option-btn-last"
          onClick={() => {
            chooseOption("optionD");
          }}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion" className="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <div>
          <button onClick={prevQuestion} id="prevQuestion" className="nextQuestion">
            Previous Question
          </button>
          <button onClick={nextQuestion} id="nextQuestion" className="nextQuestion">
            Next Question
          </button> 
      </div>
      )}
    </div></div>
  );
}

export default Quiz;