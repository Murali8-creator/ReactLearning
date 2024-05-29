import { useState,useRef } from "react";


export default function Player() {

  const playerName = useRef();
  const [user, setUser] = useState(null);
  // const [submitted, setSubmitted] = useState(false);

  
  function handleClick(){
    setUser(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {user ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
