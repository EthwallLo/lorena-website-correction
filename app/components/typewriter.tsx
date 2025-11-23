import { useState, useEffect } from "react";

export default function Typewriter() {
  const text = "Au mot juste";
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCurrentText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 180); 

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="font-cutive text-4xl md:text-5xl font-bold mb-2 text-gray-800
        whitespace-nowrap border-r-4 border-gray-800 animate-typing animate-cursor">
      {currentText}
    </h1>
  );
}
