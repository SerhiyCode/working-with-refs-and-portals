import { useState } from "react";

export default function Player() {   


  return (
    <section id="player">
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
