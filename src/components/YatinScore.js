import React, { useState } from "react";

export default function YatinScore({ yatinScore, updateYatinScore }) {
  return (
    <div
      style={{
        display: "flex",
        width: "60%",
        margin: "auto",
      }}
    >
      <button onClick={() => updateYatinScore(yatinScore - 1)}>Decrement</button>

      <p>
        Yatin's Score <span style={{ color: "red" }}> {yatinScore} </span>
      </p>

      <button onClick={() => updateYatinScore(yatinScore + 1)}>Increment</button>
    </div>
  );
}
