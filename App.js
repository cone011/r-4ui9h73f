import React, { useState } from "react";
import "./App.css";

function App() {
  const [word, SetWord] = useState("");
  const inpuntHandlerEvent = (event) => {
    SetWord(event.target.value);
  };
  return (
    <div>
      <h1>Un repetidor</h1>
      <input
        type="text"
        placeholder="Empieza a escribir algo"
        onChange={inpuntHandlerEvent}
      />
      <p className="repeater">{word}</p>
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
