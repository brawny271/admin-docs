import { Route } from "lucide-react";
import React from "react";

const EndPoints = () => {
  return (
    <div className="p-8 bg-[#fbfbfb] shadow-md rounded-lg  mx-auto">
      <h2 className="text-3xl font-semibold #4b8d94 mb-4 text-gray-800 underline flex flex-wrap justify-between gap-2">
        Endpoints
        <span>
          <Route color="#ffb029" size={30} />
        </span>
      </h2>
      <p className="mb-5 text-gray-700 ">
        The Apix API is accessed by making HTTP requests to specific version
        endpoint URLs, where GET or POST variables contain the necessary
        information about the data you wish to access. All endpoints are secured
        using SSL-enabled HTTPS.
      </p>
      <p className="mb-5 text-gray-700 ">
        Every API call is fixed to a version number, which must be included with
        each request. Different versions are available at different endpoint
        URLs. The latest version is Version 1.0.
      </p>
      <h4 className="text-xl font-semibold mb-2 text-gray-800">
        Production End Point
      </h4>
      <pre className="bg-gray-100 p-4 rounded-lg mb-6">
        <code>https://uat.nyofin.com/apix-apisuit/pan/1.0/</code>
      </pre>
      <h3 className="text-2xl font-semibold mb-3 text-gray-800">Responses</h3>
      <p className="mb-4 text-gray-700 ">
        Each response from the Apix API is wrapped in a <code>data</code> tag,
        ensuring that any response will always be contained within this data
        field. Additionally, every response includes a status code, a success
        flag, a type, and a message to provide clarity on the outcome of the
        request.
      </p>
    </div>
  );
};

export default EndPoints;
