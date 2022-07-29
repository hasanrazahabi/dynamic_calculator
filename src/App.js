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
        <label
          htmlFor="number"
          style={{
            textAlign: "left",
            padding: "10px",
            fontSize: "32px",
            fontWeight: 700,
            width: "200px",
            marginTop: "30px",
          }}
        >
          Please Enter the Number to get Table
        </label>
        <div>
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
        </div>
        <ul style={{ listStyleType: "none" }}>
          {result.map((item, index) => {
            return (
              <li
                key={index}
                style={{ marginTop: "10px", fontSize: "32px", fontWeight: 700 }}
              >
                {`The mutiple of ${item}*${number}=${item * number}`}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
