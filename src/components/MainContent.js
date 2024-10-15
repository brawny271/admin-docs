import { Copy, CopyCheck } from "lucide-react";
import React, { useState } from "react";
import ReactJson from "react-json-view";
import { Route, Routes } from "react-router-dom";

const MainContent = ({ selectedItem }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isEndpointCopied, setIsEndpointCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(curlRequest).then(
      () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  const copyEndpointToClipboard = () => {
    const endpointUrl = `${endpointBaseUrl}${selectedItem.endpoint}`;
    navigator.clipboard.writeText(endpointUrl).then(
      () => {
        setIsEndpointCopied(true);
        setTimeout(() => setIsEndpointCopied(false), 2000);
      },
      (err) => {
        console.error("Could not copy endpoint: ", err);
      }
    );
  };

  const endpointBaseUrl = "https://kyc-api.surepass.io/api/v1";
  const curlRequest = selectedItem
    ? `curl --location '${endpointBaseUrl}${
        selectedItem.endpoint
      }' \\\n${Object.entries(selectedItem.requestExample || {})
        .map(([key, value]) =>
          key === "file"
            ? `--form '${key}=@"/path/to/file"'`
            : `--form '${key}="${value || ""}"'`
        )
        .join(" \\\n")}`
    : "";

  const formatRequestBody = () => {
    if (selectedItem?.method === "GET") {
      return (
        <pre className="bg-gray-100 p-4 rounded-md mb-4">
          <code className="text-orange-600 font-thin text-[14px]">
            {JSON.stringify({ user_id: "user_id" }, null, 2)}
          </code>
        </pre>
      );
    }
    if (selectedItem && Object.keys(selectedItem.requestExample).length > 0) {
      return (
        <pre className="bg-gray-100 p-4 rounded-md mb-4">
          <code className="text-orange-600 font-thin text-[14px]">
            {JSON.stringify(selectedItem.requestExample, null, 2)}
          </code>
        </pre>
      );
    }
    return null;
  };

  return (
    <>
      {!selectedItem ? (
        <div className="flex-1 p-8">
          <Routes>
            <Route
              path="/introduction"
              element={<div>Introduction Content</div>}
            />
            <Route
              path="/getting-started"
              element={<div>Getting Started Content</div>}
            />
            <Route path="/endpoints" element={<div>Endpoints Content</div>} />
            <Route
              path="/authentication"
              element={<div>Authentication Content</div>}
            />
            <Route
              path="/errors-status-codes"
              element={<div>Errors and Status Codes Content</div>}
            />
            <Route
              path="/rate-limits"
              element={<div>Rate Limits Content</div>}
            />
          </Routes>
        </div>
      ) : (
        <div className="w-full flex flex-wrap">
          <div className="flex-1 p-8 bg-white w-[49%]">
            <div className="mb-6">
              <h3 className="text-[18px] font-semibold mb-4 underline">
                <span className="font-semibold text-[18px] mr-3 text-[#ad7a03]">
                  {selectedItem.method}
                </span>
                {selectedItem.name}
              </h3>
              <p className="text-[16px] text-[#a6a6a6] font-normal mb-4">
                Endpoint to verify Aadhaar QR and extract details.
              </p>
              <div className="flex justify-between items-center bg-gray-100 rounded mb-6">
                <code className="block bg-gray-100 p-4 rounded-md">
                  {`${endpointBaseUrl}${selectedItem.endpoint}`}
                </code>
                <button
                  onClick={copyEndpointToClipboard}
                  className="text-blue-500 hover:underline pr-2"
                  title="Copy To Clipboard"
                >
                  {isEndpointCopied ? (
                    <CopyCheck color="black" size={20} />
                  ) : (
                    <Copy color="black" size={20} />
                  )}
                </button>
              </div>
              <p className="text-[16px] text-[#a6a6a6] font-normal mb-1">
                <span className="font-semibold text-black text-[18px] mr-3 underline">
                  AUTHORIZATION
                </span>
                Bearer Token
              </p>
              <p className=" font-medium mb-4">Body</p>
              {formatRequestBody()}
            </div>
            <div>
              <h3 className="font-semibold text-[18px] underline mb-2">
                Details
              </h3>
              <p className="text-gray-500">{selectedItem?.details}</p>
            </div>
          </div>
          <div className="w-[49%] bg-[#303030] p-6 flex flex-col gap-6">
            <div>
              <div className="mb-3 flex justify-between items-center">
                <h5 className="font-semibold text-white">Example Request</h5>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center text-blue-400 hover:underline"
                  title="Copy To Clipboard"
                >
                  {isCopied ? (
                    <CopyCheck color="black" size={20} />
                  ) : (
                    <Copy color="white" size={20} />
                  )}
                </button>
              </div>
              <div className="bg-[#202020] w-full h-auto min-h-[180px] rounded overflow-auto">
                <code className="block p-4 text-white">
                  {curlRequest.split("\n").map((line, index) => (
                    <div key={index} className="flex flex-wrap">
                      {line.split(" ").map((part, partIndex) => {
                        const isCommand =
                          part.startsWith("curl") ||
                          part.startsWith("--location") ||
                          part.startsWith("--form");
                        return (
                          <span
                            key={partIndex}
                            className={
                              isCommand ? "text-gray-500" : "text-green-400"
                            }
                            style={{ marginRight: "4px", whiteSpace: "nowrap" }}
                          >
                            {part}
                          </span>
                        );
                      })}
                    </div>
                  ))}
                </code>
              </div>
            </div>
            {selectedItem.responseExample && (
              <div>
                <div className="mb-3">
                  <h5 className="font-semibold text-white">Example Response</h5>
                </div>
                <div
                  className="block bg-[#202020] p-4 rounded-md mb-4 max-h-[320px] overflow-x-auto scrollbar-thin scrollbar-thumb-[#555555] scrollbar-track-[#2b2b2b]"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#555555 #2b2b2b",
                  }}
                >
                  <ReactJson
                    src={selectedItem.responseExample}
                    theme="monokai"
                    collapsed={false}
                    style={{ fontSize: "14px" }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MainContent;
