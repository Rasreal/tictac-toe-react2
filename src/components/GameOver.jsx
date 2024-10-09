/* eslint-disable react/react-in-jsx-scope */
export default function GameOver({ winner, restartFunc}) {
  
  
  return (
    <div id="game-over">
      <h2>Ойын бітті!</h2>
      {winner && <p>{winner} Ұтты</p>}
      {!winner && <p>Тең ойын</p>}
      <p>
        <button onClick={restartFunc} >Басынан бастау!</button>
      </p>
    </div>
  );
}
