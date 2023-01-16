import React, { Component, useState } from "react";
import "./App.css";

function App() {
  const [repeat, SetRepeat] = useState("");
  function ValueChange(e) {
    SetRepeat(e.target.value);
  }
  return (
    <div>
      <h1>Un repetidor</h1>
      <input
        type="text"
        placeholder="Empieza a escribir algo"
        onChange={ValueChange}
      />
      <p className="repeater">{repeat}</p>
    </div>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Un repetidor</h1>
//         <input type="text" placeholder="Empieza a escribir algo" />
//         <p className="repeater"></p>
//       </div>
//     );
//   }
// }

export default App;
