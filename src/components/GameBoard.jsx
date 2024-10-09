/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare, turns}) {
    let gameBoard = initialGameBoard

    for(const turn of turns){
      const {square, player } = turn
      const {row, col} = square
      gameBoard[row][col] = player
    }
     // const [gameBoard, setBoard] = useState(initialGameBoard);

     // function squareClickHandler(rowIx, colIx){
     //      setBoard((prevGameBoard) => {
     //           const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
     //           updatedGameBoard[rowIx][colIx] = activePlayerSymbol;
     //           return updatedGameBoard;
     //      })

     //      activePlayerFunction()
     // }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>onSelectSquare(rowIndex, colIndex) } disabled={playerSymbol!=null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
