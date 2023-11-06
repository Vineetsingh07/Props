import React, { useState } from "react";

export default function YatinScore() {
  const [count, setCount] = useState(70);
  const [name, setName] = useState("Sparsh");

  return (
    <div
      style={{
        display: "flex",
        width: "60%",
        margin: "auto",
      }}
    >
      <button onClick={() => setName("Yatin")}>Decrement</button>

      <p>
        Yatin's Score <span style={{ color: "red" }}> {name} </span>
      </p>

      <button onClick={() => setName("Ujjwal")}>Increment</button>
    </div>
  );
}
