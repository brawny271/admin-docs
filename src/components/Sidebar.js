import React, { useState } from "react";
import { ChevronDown, ChevronRight, Folder, FolderOpen } from "lucide-react";
import FolderList from "./FolderList";
import { Link } from "react-router-dom";

const Sidebar = ({ setSelectedItem, folders }) => {
  const [openFolders, setOpenFolders] = useState({});

  const toggleFolder = (index) => {
    setOpenFolders((prevOpenFolders) => ({
      ...prevOpenFolders,
      [index]: !prevOpenFolders[index],
    }));
  };

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 h-[100%] p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold pl-1 mb-6 rounded-sm text-gray-800">
        <span className="text-blue-700">Safex</span>
        <span className="text-green-500">pay</span> API
      </h2>
      <ul>
        <li className="mb-4">
          <Link
            to="/introduction"
            className="font-semibold text-[16px] text-[#696969] hover:underline hover:text-black"
          >
            Introduction
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/getting-started"
            className="font-semibold text-[16px] text-[#696969] hover:underline hover:text-black"
          >
            Getting Started
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/endpoints"
            className="font-semibold text-[16px] text-[#696969] hover:underline hover:text-black"
          >
            Endpoints
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/authentication"
            className="font-semibold text-[16px] text-[#696969] hover:underline hover:text-black"
          >
            Authentication
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/errors-status-codes"
            className="font-semibold text-[16px] text-[#696969] hover:underline hover:text-black"
          >
            Errors and Status Codes
          </Link>
        </li>

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
              <span className="font-semibold text-[#696969] text-[16px] hover:underline hover:text-black">
                {folder.name}
              </span>
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
