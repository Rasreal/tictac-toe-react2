/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";



function derivePlayer(gameTurns){
  let curPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X') curPlayer = 'O';

  return curPlayer
}
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  //const [activePlayer, setActive] = useState("X");
  let activePlayer = derivePlayer(gameTurns)
  function handleSquareClick(rowIx, colIx) {
    //setActive((active) => (active === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let curPlayer = derivePlayer(prevTurns)
      const updatedTurns = [
        { square: { row: rowIx, col: colIx }, player: curPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" activePlayer={activePlayer} />
          <Player name="Player 2" symbol="O" activePlayer={activePlayer} />
        </ol>
        <GameBoard onSelectSquare={handleSquareClick} turns={gameTurns} />
      </div>
    </main>
  );
}

export default App;
