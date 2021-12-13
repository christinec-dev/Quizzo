import { Questions } from "../utils/Quizzes";
import { useState, useContext } from "react";
import { GameStateContext } from "../utils/Contexts";

//Our Main Quiz component will allow us to skip back/forth between questions and render new questions
function Quiz() {
  //sets up initial questions and options to null (since we haven't started playing)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  //enable us to pass the game state and score changes accordingly
  const { score, setScore, setGameState } = useContext(GameStateContext);

  //enable us to pass the chosen answers and changes accordingly 
  const chooseOption = (option) => {setOptionChosen(option);};

  const nextQuestion = () => {
    //if our answer is correct, up the score
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    //skip to next question
    setCurrentQuestion(currentQuestion + 1);
  };

  const prevQuestion = () => {
      //if our answer is correct, do nothing to the score (otherwise it will add another)
      if (Questions[currentQuestion].answer === optionChosen) {
        setScore(score + 0);
      }
    //skip to previous question
    setCurrentQuestion(currentQuestion - 1);
  };

  //
  const finishQuiz = () => {
    //if our answer is correct, up the score
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    //updates game state to finished when clicked
    setGameState("finished");
  };

  return (
    <div className="Quiz">
      <div className="gameBoy_img">
      {/* Will show the question */}
      <h1 className="question">{Questions[currentQuestion].prompt}</h1>
      <div className="answers">
        {/* Option A */}
        <button className="option-btn"onClick={() => {chooseOption("optionA");}}>
          {Questions[currentQuestion].optionA}
        </button>

        {/* Option B */}
        <button className="option-btn" onClick={() => {chooseOption("optionB");}}>
          {Questions[currentQuestion].optionB}
        </button>
        <div className="break"></div>

        {/* Option C */}
        <button className="option-btn" onClick={() => {chooseOption("optionC");}}>
          {Questions[currentQuestion].optionC}
        </button>

        {/* Option D */}
        <button className="option-btn" onClick={() => {chooseOption("optionD");}}>
          {Questions[currentQuestion].optionD}
        </button>
      </div>
        
      {/* If we are on our last question end the game*/}
      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion" className="lastQuestion">
          End Mission
        </button>
      ) : (
      //Else allow us to skip backwards/forward between questions
        <div className="answer-skip">
          <button onClick={prevQuestion} id="prevQuestion" className="nextQuestion">
            <i className="fas fa-chevron-circle-left"></i>
          </button>
          <button onClick={nextQuestion} id="nextQuestion" className="nextQuestion">
            <i className="fas fa-chevron-circle-right"></i>
          </button> 
      </div>
      )}
      </div>
    </div>
  );
}

//Exports to other compnents
export default Quiz;