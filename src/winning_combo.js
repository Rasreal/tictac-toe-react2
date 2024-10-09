export const WINNING_COMBINATIONS = [
     [
       { row: 0, column: 0 },
       { row: 0, column: 1 },
       { row: 0, column: 2 },
     ],
     [
       { row: 1, column: 0 },
       { row: 1, column: 1 },
       { row: 1, column: 2 },
     ],
     [
       { row: 2, column: 0 },
       { row: 2, column: 1 },
       { row: 2, column: 2 },
     ],
     [
       { row: 0, column: 0 },
       { row: 1, column: 0 },
       { row: 2, column: 0 },
     ],
     [
       { row: 0, column: 1 },
       { row: 1, column: 1 },
       { row: 2, column: 1 },
     ],
     [
       { row: 0, column: 2 },
       { row: 1, column: 2 },
       { row: 2, column: 2 },
     ],
     [
       { row: 0, column: 0 },
       { row: 1, column: 1 },
       { row: 2, column: 2 },
     ],
     [
       { row: 0, column: 2 },
       { row: 1, column: 1 },
       { row: 2, column: 0 },
     ],
   ];

export  function generateWinningCombinations(boardSize) {
     const winningCombinations = [];
   
     // Rows
     for (let row = 0; row < boardSize; row++) {
       const rowCombo = [];
       for (let col = 0; col < boardSize; col++) {
         rowCombo.push({ row, col });
       }
       winningCombinations.push(rowCombo);
     }
   
     // Columns
     for (let col = 0; col < boardSize; col++) {
       const colCombo = [];
       for (let row = 0; row < boardSize; row++) {
         colCombo.push({ row, col });
       }
       winningCombinations.push(colCombo);
     }
   
     // Main diagonal (top-left to bottom-right)
     const mainDiagonal = [];
     for (let i = 0; i < boardSize; i++) {
       mainDiagonal.push({ row: i, col: i });
     }
     winningCombinations.push(mainDiagonal);
   
     // Anti-diagonal (top-right to bottom-left)
     const antiDiagonal = [];
     for (let i = 0; i < boardSize; i++) {
       antiDiagonal.push({ row: i, col: boardSize - 1 - i });
     }
     winningCombinations.push(antiDiagonal);
   
     return winningCombinations;
   }