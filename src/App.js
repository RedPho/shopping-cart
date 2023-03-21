import React, { ReactDOM } from "react";
import Navbar from "./components/Navbar";
import LightIcon from "./sun-svgrepo-com.svg";
import DarkIcon from "./moon-svgrepo-com.svg";
import GithubBlack from "./github-mark.svg"
import GithubWhite from "./github-mark-white.svg"
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  const [githubIcon, setGithubIcon] = useState(GithubWhite);

  useEffect(() => {
    let themeBtn = document.getElementById("themeBtn");
    function handleclick() {
      if (theme == "dark") {
        setTheme("light");
        setGithubIcon(GithubBlack);
      }
      else {
        setTheme("dark");
        setGithubIcon(GithubWhite);
      }
    }
    themeBtn.addEventListener("click", handleclick);
    return () => themeBtn.removeEventListener("click", handleclick);
  })

  return (
    <div className="App">
      <Navbar showItemsBtn={false} lightIcon={LightIcon} darkIcon={DarkIcon}></Navbar>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-center max-w-xl mt-10">New NFT's! They are all amazing. Click the Shop to see them.</h1>
        <div className="mt-10 flex"><p className="text-xl">See my Github here</p><a href="https://github.com/RedPho" target={"_blank"} rel={"noopener noreferrer"}><img className="object-contain h-8 ml-2" src={githubIcon}></img></a></div>
        <footer className="flex-row justify-center items-center absolute bottom-0"><p className="mb-3">All arts made by Midjourney AI</p></footer>
      </div>
    </div>
  );
}

export default App;
