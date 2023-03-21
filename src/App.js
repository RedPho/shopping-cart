import React, {ReactDOM} from "react";
import Navbar from "./components/Navbar";
import LightIcon from "./sun-svgrepo-com.svg";
import DarkIcon from "./moon-svgrepo-com.svg";

function App() {
  return (
    <div className="App">
      <Navbar showItemsBtn={false} lightIcon={LightIcon} darkIcon={DarkIcon}></Navbar>
    </div>
  );
}

export default App;
