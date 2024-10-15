import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import apiFolders from "./ApiFolders.js";
import apix from "./assets/svg/apix-logo.svg";

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="h-screen">
      <div className="h-[3rem] w-full border shadow flex items-center justify-between px-3 bg-slate-100">
        <div>
          <span className="w-[200px] ml-4 pt-1 flex justify-start text-[24px] font-semibold text-slate-600">
            {" "}
            <img src={apix} />
          </span>
        </div>
        <div className="pr-4">
          <button
            className="bg-green-600 rounded-full px-6 py-1  text-white font-medium transition ease-in-out hover:bg-green-500 hover:shadow-text-white-glow"
            onClick={() =>
              (window.location.href = "https://uatui.nyofin.com/sign-up")
            }
          >
            Sign up
          </button>
        </div>
      </div>
      <div className="flex h-[calc(100%-3rem)]">
        <Sidebar
          folders={apiFolders.folders}
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
        />
        <MainContent selectedItem={selectedItem} />
      </div>
    </div>
  );
};

export default App;
