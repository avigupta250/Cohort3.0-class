import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const UseDebounce = () => {
  const [input, setInput] = useState("");

  useEffect(() => {
    const time = setTimeout(() => {
      console.log("Expensive Operation");
    }, 5000);

    return () => {
      clearTimeout(time);
    };
  }, [input]);

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
    </div>
  );
};

export default UseDebounce;
