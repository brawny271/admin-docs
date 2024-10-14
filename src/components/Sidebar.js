import React, { useState } from "react";
import { ChevronDown, ChevronRight, Folder, FolderOpen } from "lucide-react";
import FolderList from "./FolderList";

const Sidebar = ({ setSelectedItem, folders }) => {
  const [openFolders, setOpenFolders] = useState({});

  const toggleFolder = (index) => {
    setOpenFolders((prevOpenFolders) => ({
      ...prevOpenFolders,
      [index]: !prevOpenFolders[index],
    }));
  };

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 h-[100%] p-4">
      <h2 className="text-lg font-semibold pl-1  mb-6 rounded-sm text-gray-800">
        <span className="text-blue-700">Safex</span>
        <span className="text-green-500">pay</span> API
      </h2>
      <ul>
        {folders.map((folder, folderIndex) => (
          <li key={folderIndex} className="mb-4">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => toggleFolder(folderIndex)}
            >
              {openFolders[folderIndex] ? (
                <ChevronDown className="mr-2" size={15} />
              ) : (
                <ChevronRight className="mr-2" size={15} />
              )}
              {openFolders[folderIndex] ? (
                <FolderOpen className="mr-2" color="orange" size={16} />
              ) : (
                <Folder className="mr-2" color="orange" size={16} />
              )}
              <span className="font-semibold text-gray-800">{folder.name}</span>
            </div>

            {openFolders[folderIndex] && (
              <FolderList
                folderList={folder.subfolders}
                folderIndex={folderIndex}
                openFolders={openFolders}
                toggleFolder={toggleFolder}
                setSelectedItem={setSelectedItem}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;