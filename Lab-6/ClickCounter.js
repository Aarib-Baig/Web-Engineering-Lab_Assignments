import React, { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <hr />
      <h2>Task 2</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click to check click count</button>
    </div>
  );
}

export default ClickCounter;

