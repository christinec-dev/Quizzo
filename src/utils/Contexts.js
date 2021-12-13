//createContext allows us to share data (state) across our components more easily
import { createContext } from "react";

//Thus we can change the state of our game from start  -> finish and vice versa
export const GameStateContext = createContext("");