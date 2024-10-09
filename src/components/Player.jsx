/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";

export default function Player({ name, symbol, activePlayer }) {
  const [isEdit, setEdit] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  let editBtn = <button onClick={editBtnHandler}>Edit</button>;
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  function editBtnHandler() {
    setEdit(true);
  }
  function saveBtnHandler() {
    setEdit(false);
  }
  function nameEditHandler(event) {
    console.log(event.target.value);
    setPlayerName(event.target.value);
  }

  if (isEdit) {
    editBtn = <button onClick={saveBtnHandler}>Save</button>;

    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={nameEditHandler}
      ></input>
    );
  }

  return (
    <li className={activePlayer === symbol ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      {editBtn}
    </li>
  );
}
