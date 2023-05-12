import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>A list of countdowns</h1>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Timer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Countdown 1</td>
              <td>DD:HH:MM:SS</td>
            </tr>
            <tr>
              <td>Countdown 2</td>
              <td>DD:HH:MM:SS</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
