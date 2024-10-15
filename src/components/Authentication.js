import { UserCog } from "lucide-react";
import React from "react";

const Authentication = () => {
  return (
    <div className="p-8 bg-[#fbfbfb] shadow-md rounded-lg mx-auto">
      <h2 className="text-3xl font-semibold #4b8d94 mb-5 text-gray-800 underline flex flex-wrap justify-between gap-2">
        Authentication
        <span>
          <UserCog />
        </span>
      </h2>
      <p className="mb-6 text-gray-700">
        The Apix API utilizes "basic-auth" authentication. You will be provided
        with a "username" and "password," which must be included in the
        authentication header of all requests made to the API.
      </p>
      <p className="mb-6 text-gray-700">
        All API requests must be made over HTTPS; any requests made over HTTP
        will fail.
      </p>
      <p className="mb-6 text-gray-700">
        Additionally, you will receive an "api-key" that must also be included
        in the header of all requests made to the API.
      </p>
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">
        Authentication Header Format
      </h3>
      <pre className="bg-gray-100 p-4 rounded-lg mb-6">
        <code>
          Authorization: Basic &lt;base64(username:password)&gt; <br />
          x-api-key: &lt;YOUR_API_KEY&gt;
        </code>
      </pre>
    </div>
  );
};

export default Authentication;
