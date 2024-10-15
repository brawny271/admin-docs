import { ShieldAlert } from "lucide-react";
import React from "react";

const Status = () => {
  return (
    <div className="p-8 bg-[#fbfbfb] shadow-md rounded-lg mx-auto h-full overflow-x-auto scrollbar">
      <h2 className="text-3xl font-semibold #4b8d94 mb-4 text-gray-800 underline flex flex-wrap justify-between gap-2">
        Errors and Status Codes
        <span>
          <ShieldAlert />
        </span>
      </h2>
      <p className="mb-4 text-gray-700 ">
        Standard HTTP error codes are returned in the case of a failure. 2xx
        codes indicate a successful message; 4xx codes indicate an error caused
        by information provided by the client; and 5xx codes indicate an error
        on Apix's servers.
      </p>

      <h3 className="text-2xl font-semibold mb-4 text-gray-800">
        Status Codes
      </h3>
      <table className="min-w-full  bg-white border shadow rounded-lg overflow-hidden">
        <thead className="">
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">Status Code</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border">200</td>
            <td className="py-2 px-4 border">OK</td>
            <td className="py-2 px-4 border">Successful Request.</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border">201</td>
            <td className="py-2 px-4 border">Created</td>
            <td className="py-2 px-4 border">Resource successfully created.</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border">202</td>
            <td className="py-2 px-4 border">Accepted</td>
            <td className="py-2 px-4 border">
              Asynchronous Request. Response will be sent to configured Webhook.
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border">204</td>
            <td className="py-2 px-4 border">No Content</td>
            <td className="py-2 px-4 border">Successful with no Response.</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Error Codes</h3>
      <table className="min-w-full  bg-white border shadow rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">Error Code</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border">400</td>
            <td className="py-2 px-4 border">Bad Request</td>
            <td className="py-2 px-4 border">Malformed request</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border">401</td>
            <td className="py-2 px-4 border">Unauthorized</td>
            <td className="py-2 px-4 border">
              Invalid authorization credentials
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border">403</td>
            <td className="py-2 px-4 border">Forbidden</td>
            <td className="py-2 px-4 border">Action prohibited</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border">404</td>
            <td className="py-2 px-4 border">Not Found</td>
            <td className="py-2 px-4 border">Resource not found</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border">422</td>
            <td className="py-2 px-4 border">Unprocessable Entity</td>
            <td className="py-2 px-4 border">Validation error</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border">429</td>
            <td className="py-2 px-4 border">Too Many Requests</td>
            <td className="py-2 px-4 border">Rate limit reached</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-2xl font-semibold mb-4 mt-5 text-gray-800">
        Server Error Codes
      </h3>
      <table className="min-w-full  bg-white border shadow rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">Status Code</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border">500</td>
            <td className="py-2 px-4 border">Internal Server Error</td>
            <td className="py-2 px-4 border">
              An unexpected error occurred on the server.
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border">501</td>
            <td className="py-2 px-4 border">Not Implemented</td>
            <td className="py-2 px-4 border">
              The server does not support the functionality required to fulfill
              the request.
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border">502</td>
            <td className="py-2 px-4 border">Bad Gateway</td>
            <td className="py-2 px-4 border">
              The server received an invalid response from the upstream server.
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border">503</td>
            <td className="py-2 px-4 border">Service Unavailable</td>
            <td className="py-2 px-4 border">
              The server is currently unable to handle the request due to
              temporary overload or maintenance.
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border">504</td>
            <td className="py-2 px-4 border">Gateway Timeout</td>
            <td className="py-2 px-4 border">
              The server did not receive a timely response from the upstream
              server.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Status;
