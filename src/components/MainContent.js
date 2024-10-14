import React from "react";

const MainContent = ({ selectedItem }) => {
  const staticData = {
    description: "Endpoint to verify Aadhaar QR and extract details.",
    authorization: "Bearer Token",
    requestBody: [{ key: "qr_text", value: "Aadhaar QR code text" }],
    endpointBaseUrl: "https://kyc-api.surepass.io/api/v1",
  };

  if (!selectedItem) {
    return (
      <div className="flex-1 p-8">
        Select an API from the sidebar to view details.
      </div>
    );
  }

  return (
    <div className="flex-1 p-8 bg-white">
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
        {staticData.requestBody.map((field, index) => (
          <code key={index} className="block bg-gray-100 p-4 rounded-md mb-4">
            {`${field.key} = ${field.value}`}
          </code>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
