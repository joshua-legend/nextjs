"use client";

import { Trash } from "lucide-react";
import { useState } from "react";

const Page = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <>
      <input onChange={(e) => setInput((prev) => e.target.value)} placeholder="오늘 할 일" className="border-2 border-red-200" type="text" />
      <button onClick={() => setTodo((prev) => [...prev, input])} className="bg-sky-100 p-1">
        등록
      </button>
      <div className="flex flex-col">
        <span>오늘 할일</span>
        {todo.map((v, i) => (
          <div key={i} className="flex gap-1">
            <span className="text-red-700">{v}</span>
            <Trash onClick={() => setTodo((prev) => [...prev].filter((x) => x != v))} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
