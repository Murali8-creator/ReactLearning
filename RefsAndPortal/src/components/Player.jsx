import { useState } from "react";

export default function Player() {

  const [user, setUser] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e){
    setSubmitted(false);
    setUser(e.target.value);
    console.log(user);
  }

  function handleClick(){
    setSubmitted(true);
  }
  return (
    <section id="player">
      <h2>Welcome {!submitted ? 'unknown entity' : user}</h2>
      <p>
        <input onChange={handleChange} value={user}  type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
