import React, {ReactDOM} from "react";
import Item from "./components/Item";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar showItemsBtn={false}></Navbar>
    </div>
  );
}

export default App;
