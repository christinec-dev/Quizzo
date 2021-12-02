import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../utils/Contexts";

function Menu() {
  const { setGameState } = useContext(
    GameStateContext
  );
  return (
    <div className="Menu">
      <button className="game_start"
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start
      </button>
    </div>
  );
}

export default Menu;