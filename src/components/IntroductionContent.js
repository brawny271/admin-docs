import { NotebookText } from "lucide-react";
import React from "react";

const IntroductionContent = () => {
  return (
    <div className="p-8 bg-[#fbfbfb] shadow-md rounded-lg  mx-auto">
      <h2 className="text-3xl font-semibold #4b8d94 mb-5 text-gray-800 underline flex flex-wrap justify-between gap-2">
        Introduction{" "}
        <span>
          <NotebookText />
        </span>
      </h2>
      <p className="mb-6 text-gray-700 font-medium">
        The API is built using RESTful endpoints and standard HTTP verbs.
      </p>
      <ol className="list-decimal list-inside space-y-3 text-gray-800">
        <li className="flex items-start">
          <span className="mr-2">1.</span>
          <p className="flex-1">
            Response status is used to indicate the status of the message and
            any error codes.
          </p>
        </li>
        <li className="flex items-start">
          <span className="mr-2">2.</span>
          <p className="flex-1">
            JSON is returned on all our API responses, including errors, with a
            consistent structure for all messages.
          </p>
        </li>
        <li className="flex items-start">
          <span className="mr-2">3.</span>
          <p className="flex-1">
            Authentication to the API is performed via token-based
            authentication.
          </p>
        </li>
        <li className="flex items-start">
          <span className="mr-2">4.</span>
          <p className="flex-1">
            Requests to our API should be made as JSON, except when uploading
            documents.
          </p>
        </li>
        <li className="flex items-start">
          <span className="mr-2">5.</span>
          <p className="flex-1">
            All API requests must be made over HTTPS. Calls made over plain HTTP
            will fail.
          </p>
        </li>
        <li className="flex items-start">
          <span className="mr-2">6.</span>
          <p className="flex-1">
            Text fields support UTF-8 but do not allow certain special
            characters that could be used maliciously.
          </p>
        </li>
      </ol>
      <div className="mt-6">
        <p className="mb-6 text-[#6b6b6b]">
          Our API is designed with RESTful principles, ensuring clear
          communication through response status codes and a consistent JSON
          structure for all messages, including errors. We implement token-based
          authentication to secure user sessions, requiring valid tokens for
          each request. All interactions must occur over HTTPS to protect
          sensitive data, while supporting UTF-8 encoding in text fields to
          accommodate diverse character sets. We also restrict certain special
          characters to enhance security, providing a reliable and safe API
          experience.
        </p>
      </div>
    </div>
  );
};

export default IntroductionContent;
