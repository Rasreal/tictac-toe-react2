/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import { WINNING_COMBINATIONS } from "./winning_combo";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivePlayer(gameTurns) {
  let curPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") curPlayer = "O";

  return curPlayer;
}
function App() {
  const [gameTurns, setGameTurns] = useState([]);

  let activePlayer = derivePlayer(gameTurns);

  let winner = null
  let gameBoard = [...initialGameBoard.map(arr => [...arr])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const combo of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combo[0].row][combo[0].column];
    const secondSymbol = gameBoard[combo[1].row][combo[1].column];
    const thirdSymbol = gameBoard[combo[2].row][combo[2].column];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      secondSymbol === thirdSymbol
    ) {
      winner = firstSymbol
      break;
    }
  }

  const draw = !winner && gameTurns.length === 9;

  function restart(){
    setGameTurns([]);
    
  }

  function handleSquareClick(rowIx, colIx) {
    //setActive((active) => (active === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let curPlayer = derivePlayer(prevTurns);
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
        {(winner || draw) && <GameOver winner={winner} restartFunc={restart}/>}
        <GameBoard onSelectSquare={handleSquareClick} board={gameBoard} />
      </div>
    </main>
  );
}

export default App;
