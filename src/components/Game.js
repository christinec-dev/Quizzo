import Menu from "./Menu";
import Quiz from "./Quiz";
import EndScreen from "./EndScreen";
import { useState } from "react";
import { GameStateContext } from "../utils/Contexts";

function Game() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="Game">
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <Menu />} 
        {gameState === "playing" && <Quiz /> }
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
}

export default Game;