import StartScreen from "./StartScreen";
import Quiz from "./Quiz";
import EndScreen from "./EndScreen";
import { useState } from "react";
import { GameStateContext } from "../utils/Contexts";

//Our main game component will put all the pieces together
function Game() {
  //initial gamestate and score = not playing and 0
  const [gameState, setGameState] = useState("StartScreen");
  const [score, setScore] = useState(0);

  return (
    <div className="Game">
      {/* Sets up game with our initial values*/} 
      <GameStateContext.Provider value={{gameState, setGameState, score, setScore,}}>

      {/* Changes game states and routes according to state schanges made during game */} 
        {gameState === "StartScreen" && <StartScreen />} 
        {gameState === "playing" && <Quiz /> }
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
}

//Exports to other components
export default Game;