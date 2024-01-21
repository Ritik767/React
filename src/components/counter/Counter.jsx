// import React from 'react'
import  React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex gap-10 items-center justify-center ">
      <button
        onClick={() => {
          if (count > 0) setCount(count - 1);
        }}
        className="p-4 border rounded-md font-semibold bg-slate-300"
      >
        Sub
      </button>
      <p>{count}</p>
      <button onClick={()=>{
        count < 10 && setCount((pre) => pre + 1);
      }}
      className="p-4 border rounded-md font-semibold bg-slate-300">Add</button>
    </div>
  );
}

export default Counter;
