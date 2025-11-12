import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="text-4xl font-bold text-gray-800 mb-6">Task 1</div>
      <p className="text-2xl mb-6">Count: {count}</p>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600 transition-colors duration-200">
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="px-6 py-3 bg-gray-500 text-white font-semibold shadow-md hover:bg-gray-600 transition-colors duration-200">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
