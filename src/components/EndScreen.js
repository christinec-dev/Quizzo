import React from "react";
//we can pass the entire context object to useContext() to consume context at the top of our component
import { useContext } from "react";
//createContext allows us to share data (state) across our components more easily
import { GameStateContext } from "../utils/Contexts";
////Quiz questions and answers needed for our quiz to work
import { Questions } from "../utils/Quizzes";

//We set the final state gathered from all of our components
const EndScreen = () => {
  const { score, setScore, setGameState } = useContext(GameStateContext);

  //We reset the states to intitial values specified on StartScreen component and routes back to it
  const restartQuiz = () => {
    setScore(0);
    setGameState("StartScreen");
  };

  //When quiz is finished we display the score
  return (
    <div className="EndScreen">
      <h1>👾👾👾</h1>
      <h1 className="results-score">
        Final Score:  {score} / {Questions.length}
      </h1>
      {/* If the score is below average (16 / 20 * 100 = 80%), then it's below average, else above */}
      {score <= 16 ? (
        <p>Oh No! You scored below average. That's okay, it just means you have to get gaming! Get out there and play some games. </p>
      ) : (
        <p>Congratulations! You scored above average. That means you are a true gamer. Get out there and play some games to claim another victory.  </p>
      )}

      {/* Will route back to StartScreen*/}
      <button onClick={restartQuiz} className="retry">Retry Mission</button>
    </div>
  );
};

//Exports to other components
export default EndScreen;