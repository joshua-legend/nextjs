"use client";

import { useState } from "react";

const Page = () => {
  //1. - 0 + 구현하기
  //2. 이모지 누르면 😎<->😴

  const [num, setNum] = useState(0);
  const minus = () => setNum((x) => x - 1);
  const plus = () => setNum((x) => x + 1);

  const [emoji, setEmoji] = useState("😎");
  const change = () => setEmoji((x) => !x);
  return (
    <>
      <button onClick={minus}>-</button>
      <span>{num}</span>
      <button onClick={plus}>+</button>

      <button onClick={change}>{emoji}</button>
    </>
  );
};

export default Page;
