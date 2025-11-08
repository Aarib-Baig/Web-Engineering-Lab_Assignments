import React, { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <hr />
      <h2>Task 4</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"/>
      <p>Your name: {name}</p>
    </div>
  );    
}

export default UserForm;
