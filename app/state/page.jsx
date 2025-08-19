"use client";
import { Heart } from "lucide-react";
import { useState } from "react";

const Page = () => {
  const [num, setNum] = useState(0);
  const [fill, setFill] = useState(false);

  return (
    <div>
      <button onClick={() => setNum((x) => x - 1)}>-</button>
      <span style={{ color: num >= 5 ? "green" : num <= -5 ? "red" : "black" }}>{num}</span>
      <button onClick={() => setNum((x) => x + 1)}>+</button>

      <Heart fill={fill ? "red" : "white"} onClick={() => setFill((x) => !x)} />
      {/* 2. 하트 누르면 꽉찬거 다시누르면 빈하트 만들기 */}
    </div>
  );
};

export default Page;
