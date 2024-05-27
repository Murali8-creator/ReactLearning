import { useState } from "react";

export default function Player({
  initialName,
  playerSymbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    // setIsEditing(isEditing ? false : true); not recommended
    // since we are updating state on previous state
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(playerSymbol, playerName);
    }
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  //   let buttonValue = "Edit";
  let playerNameVal = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    // buttonValue = "Save";
    playerNameVal = (
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        required
        value={playerName}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameVal}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={() => handleEditClick()}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
