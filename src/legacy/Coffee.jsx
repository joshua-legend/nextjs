"use client";
import { useState } from "react";

const Coffee = () => {
  const [total, setTotal] = useState(0);
  const americano = () => {
    setTotal((x) => x + 2000);
  };
  const latte = () => {
    setTotal((x) => x + 3000);
  };
  const valiina = () => {
    setTotal((x) => x + 3500);
  };

  return (
    <>
      <button onClick={americano}>아메리카노 2000원 추가</button>
      <button onClick={latte}>라떼 3000원 추가</button>
      <button onClick={valiina}>바닐라 3500원 추가</button>
      <span>총 금액: {total}원</span>
    </>
  );
};

export default Coffee;
