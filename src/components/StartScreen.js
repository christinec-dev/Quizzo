//createContext allows us to share data (state) across our components more easily
import { useContext } from "react";
//Needed to change the state of our game from start  -> finish and vice versa
import { GameStateContext } from "../utils/Contexts";

//Our Main Screen or "Menu"
function StartScreen() {
  const { setGameState } = useContext(GameStateContext);

  //When pressed, our game will start and switch to state "playing"
  return (
    <div className="StartScreen">
      <button className="game_start" onClick={() => {setGameState("playing");}}>
        Start
      </button>
    </div>
  );
}

//Exports to other components
export default StartScreen;