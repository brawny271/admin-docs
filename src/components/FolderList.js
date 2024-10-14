import React from "react";
import {
  ChevronDown,
  ChevronRight,
  Folder,
  FolderOpen,
  FileJson2,
} from "lucide-react";

const FolderList = ({
  folderList,
  folderIndex,
  openFolders,
  toggleFolder,
  setSelectedItem,
}) => {
  const renderFolders = (folders, parentIndex) => {
    return (
      <ul className="ml-6 mt-2">
        {folders.map((folder, subIndex) => {
          const currentIndex = `${parentIndex}-${subIndex}`;

          return (
            <li key={subIndex} className="mb-2">
              {folder.subfolders ? (
                <>
                  <div
                    className="flex items-center cursor-pointer bg-gray-100"
                    onClick={() => toggleFolder(currentIndex)}
                  >
                    {openFolders[currentIndex] ? (
                      <ChevronDown className="mr-2" size={15} />
                    ) : (
                      <ChevronRight className="mr-2" size={15} />
                    )}
                    {openFolders[currentIndex] ? (
                      <FolderOpen className="mr-2" color="orange" size={16} />
                    ) : (
                      <Folder className="mr-2" color="orange" size={16} />
                    )}
                    <span className="font-semibold text-gray-800">
                      {folder.name}
                    </span>
                  </div>

                  {openFolders[currentIndex] &&
                    renderFolders(folder.subfolders, currentIndex)}
                </>
              ) : (
                folder.endpoint && (
                  <button
                    onClick={() => setSelectedItem(folder)}
                    className="text-gray-500 hover:text-gray-900 text-[12px] font-semibold ml-5 flex items-center"
                  >
                    <span className="text-[9px] mr-2 flex items-center gap-1 text-orange-300">
                      {/* <FileJson2 size={14} color="orange" /> */}
                      {folder.method}
                    </span>
                    <span className="hover:underline">{folder.name}</span>
                  </button>
                )
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return <>{renderFolders(folderList, folderIndex)}</>;
};

export default FolderList;
