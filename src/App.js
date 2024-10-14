import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import apiFolders from "./ApiFolders.js";

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="h-screen">
      <div className="h-[3rem] w-full border shadow flex items-center bg-slate-300">
        <span className="w-[200px] flex justify-center text-[24px] font-semibold text-slate-600">
          {" "}
          Admin Console
        </span>
      </div>
      <div className="flex h-[calc(100%-3rem)]">
        <Sidebar
          folders={apiFolders.folders}
          setSelectedItem={setSelectedItem}
        />
        <MainContent selectedItem={selectedItem} />
      </div>
    </div>
  );
};

export default App;
