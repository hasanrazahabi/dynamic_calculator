import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
function App() {
  const [number, setNumber] = useState(1);
  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, id) => start + id);
  }
  const result = range(1, 12); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

  return (
    <>
      <div className="App">
        <input
          style={{
            padding: "10px",
            fontSize: "32px",
            fontWeight: 700,
            width: "200px",
            marginTop: "30px",
          }}
          type="number"
          name="number"
          value={number}
          id="number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <ul style={{ listStyleType: "none" }}>
          {result.map((item, index) => {
            return (
              <li
                key={index}
                style={{ marginTop: "10px", fontSize: "32px", fontWeight: 700 }}
              >
                {item}*{number}={item * number}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
