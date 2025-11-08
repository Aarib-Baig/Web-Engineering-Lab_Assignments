import React from "react";

function ItemList() {
  const items = ["Apple", "Banana", "Orange"];

  return (
    <div>
      <hr />
      <h2>Task 3</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
