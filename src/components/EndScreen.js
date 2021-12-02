import React from "react";
import { useContext } from "react";
import { GameStateContext } from "../utils/Contexts";
import { Questions } from "../utils/Quizzes";

const EndScreen = () => {
  const { score, setScore, setGameState } = useContext(
    GameStateContext
  );

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="EndScreen">
      <h1>GAME OVER</h1>
      <h1>
        {score} / {Questions.length}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;