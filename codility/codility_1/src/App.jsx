import React from "react";
import "./App.css";
import Formatter from "./component/Formatter";

const App = () => {
  const config = {
    maxTextLength: 10,
    showUnformatted: true,
  };

  return (
    <div className="App">
      <h1>Formatter Example</h1>
      <Formatter
        text="This is a long text that will be truncated"
        value={12345}
        config={config}
      />
      <br />
      <Formatter
        text="Short text"
        value={4567890}
        config={{ maxTextLength: 20, showUnformatted: false }}
      />
      <br />
      <Formatter text="Another text" value={999} config={{}} />
    </div>
  );
};

export default App;
