import React from "react";
import ReactJson from "react-json-view";

const MainContent = ({ selectedItem }) => {
  if (!selectedItem) {
    return (
      <div className="flex-1 p-8">
        Select an API from the sidebar to view details.
      </div>
    );
  }

  const staticData = {
    description: "Endpoint to verify Aadhaar QR and extract details.",
    authorization: "Bearer Token",
    endpointBaseUrl: "https://kyc-api.surepass.io/api/v1",
  };

  const requestExample = selectedItem.requestExample || {};

  const curlRequest = `
curl --location '${staticData.endpointBaseUrl}${selectedItem.endpoint}' \\
${
  Object.entries(requestExample).length > 0
    ? Object.entries(requestExample)
        .map(([key, value]) => {
          const isFileUpload = key === "file";
          return isFileUpload
            ? `--form '${key}=@"/path/to/file"'`
            : `--form '${key}="${value || ""}"'`;
        })
        .join(" \\\n")
    : ""
}
  `;

  const formatCurlRequest = (request) => {
    return request.split("\n").map((line, index) => {
      return (
        <span key={index}>
          {line.split(" ").map((part, partIndex) => {
            if (
              part.startsWith("curl") ||
              part.startsWith("--location") ||
              part.startsWith("--form")
            ) {
              return (
                <span key={partIndex} className="text-gray-500">
                  {part}{" "}
                </span>
              );
            }
            return (
              <span key={partIndex} style={{ color: "#a6e22e" }}>
                {part}{" "}
              </span>
            );
          })}
          <br />
        </span>
      );
    });
  };

  const formatRequestBody = (body) => {
    return (
      <pre className="bg-gray-100 p-4 rounded-md mb-4">
        <code className="text-orange-600 font-thin text-[14px]">
          {JSON.stringify(body, null, 2)}
        </code>
      </pre>
    );
  };

  const formatGetParameters = (params) => {
    return (
      <pre className="bg-gray-100 p-4 rounded-md mb-4">
        <code className="text-orange-600 font-thin text-[14px]">
          {Object.entries(params)
            .map(([key, value]) => `${key}=${value}`)
            .join("&")}
        </code>
      </pre>
    );
  };

  const getBodyWithUserId = (userId) => {
    return (
      <pre className="bg-gray-100 p-4 rounded-md mb-4">
        <code className="text-orange-600 font-thin text-[14px]">
          {JSON.stringify({ user_id: userId }, null, 2)}
        </code>
      </pre>
    );
  };

  const responseExample = selectedItem.responseExample ? (
    <div className="block bg-[#202020] p-4 rounded-md mb-4">
      <ReactJson
        src={selectedItem.responseExample}
        theme="monokai"
        collapsed={false}
        style={{ fontSize: "14px" }}
      />
    </div>
  ) : null;

  return (
    <div className="w-full flex flex-wrap">
      <div className="flex-1 p-8 bg-white w-[49%]">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">
            {selectedItem.method} {selectedItem.name}
          </h3>
          <p className="text-gray-700 mb-4">{staticData.description}</p>
          <code className="block bg-gray-100 p-4 rounded-md mb-4">
            {`${staticData.endpointBaseUrl}${selectedItem.endpoint}`}
          </code>
          <p className="text-gray-700 mb-4">
            <strong>AUTHORIZATION:</strong> {staticData.authorization}
          </p>
          <p className="text-gray-700 mb-4">Body:</p>
          {selectedItem.method === "GET" ? (
            <>{getBodyWithUserId("user_id")}</>
          ) : (
            Object.keys(requestExample).length > 0 &&
            formatRequestBody(requestExample)
          )}
        </div>
      </div>
      <div className="w-[49%] bg-[#303030] p-6 flex flex-col gap-6">
        <div>
          <div className="mb-3">
            <h5 className="font-semibold text-white">Example Request</h5>
          </div>
          <div className="bg-[#202020] w-full h-auto min-h-[180px] rounded overflow-auto">
            <code className="block p-4 text-white">
              {formatCurlRequest(curlRequest)}
            </code>
          </div>
        </div>
        <div>
          <div className="mb-3">
            <h5 className="font-semibold text-white">Example Response</h5>
          </div>
          <div className="bg-[#202020] w-full h-auto min-h-[200px] rounded overflow-auto">
            {responseExample}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainContent;
