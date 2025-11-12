import React, { useState } from "react";

function ThemeSwitcher() {
  const [color, setColor] = useState("gray");
  const colors = ["red", "green", "blue", "gray"];

  return (
    <div className={`min-h-screen flex flex-col bg-${color}-500 transition-all`}>
      <h2 className="text-center text-4xl font-bold text-white mb-6">
        Task 2
      </h2>
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-white text-2xl mb-4">Theme Switcher</h1>
        <div className="flex gap-4">
          {colors.map((c) => (
            <button key={c} onClick={() => setColor(c)} 
            className={`bg-${c}-500 text-white p-2 rounded transition hover:opacity-80 ${color === c ? "ring-4 ring-white" : ""}`}>
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
