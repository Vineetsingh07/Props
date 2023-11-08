import React, { useState } from "react";
import YatinScore from "./YatinScore";
import CustomAppBar from "./CustomAppBar";

export default function Home() {
  const [yatinScore, setYatinScore] = useState(0);

  const handleYatinScore = (value) => {
    if (value < 0) return;
    setYatinScore(value);
  };

  return (
    <div>
      <CustomAppBar count={yatinScore} />
      <YatinScore yatinScore={yatinScore} updateYatinScore={handleYatinScore} />
      <YatinScore yatinScore={yatinScore} updateYatinScore={handleYatinScore} />
      <YatinScore yatinScore={yatinScore} updateYatinScore={handleYatinScore} />
      <YatinScore yatinScore={yatinScore} updateYatinScore={handleYatinScore} />
    </div>
  );
}

// Team A
// Yatin and Ujjwal

// Team B
// Arsh and Sparsh
