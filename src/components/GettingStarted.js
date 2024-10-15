import { BadgeInfo } from "lucide-react";
import React from "react";

const GettingStarted = () => {
  return (
    <div className="p-8 bg-[#fbfbfb] shadow-md rounded-lg mx-auto">
      <h2 className="text-3xl font-semibold #4b8d94 mb-4 text-gray-800 underline flex flex-wrap justify-between gap-2">
        Getting Started{" "}
        <span>
          <BadgeInfo />
        </span>
      </h2>
      <p className="mb-3 text-gray-700 font-normal">
        Apix's API provides access to our comprehensive suite of services
        through a standardized programmatic interface. With the Apix API, you
        can utilize all of our offerings using your preferred programming
        language. Our API is a RESTful service that operates via HTTP requests
        and JSON responses.
      </p>
      <p className="mb-3 text-gray-700 font-normal">
        This is version 1.0 of the API, and all requests must be made over
        HTTPS.
      </p>
      <p className="mb-4 text-gray-700 font-normal">
        To begin using the Apix API, simply click the "Run in Postman" button
        above. Postman is a free tool that assists developers in running and
        debugging API requests, serving as the official reference for this
        documentation. All documented endpoints are accessible through our
        Postman collection.
      </p>
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">Need Help?</h3>
      <p className="mb-3 text-gray-700 font-normal">
        Our Apix engineers are available to assist you with any questions. The
        quickest way to get support is to contact us at{" "}
        <a
          href="mailto:techsupport@apix.io"
          className="text-blue-500 underline"
        >
          techsupport@apix.io
        </a>
        .
      </p>
      <p className="mb-5 text-gray-700 font-normal">
        All resources require Token Authentication, so each request must include
        an authorization header with your token:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg mb-6">
        <code>Authorization: Bearer &lt;YOUR_TOKEN&gt;</code>
      </pre>
      <h3 className="text-2xl font-semibold mb-3 text-gray-800">
        Registration Quickstart
      </h3>
      <p className="mb-4 text-gray-700">
        To obtain a token for staging and subsequently for production, please
        reach out to us at{" "}
        <a
          href="mailto:techsupport@apix.io"
          className="text-blue-500 underline"
        >
          techsupport@apix.io
        </a>
        .
      </p>
      <h3 className="text-2xl font-semibold mb-3 text-gray-800">Trial Usage</h3>
      <p className=" text-gray-700 font-normal">
        The Apix API offers a trial period of 3 days with a limit of 50
        requests. Contact us at{" "}
        <a
          href="mailto:techsupport@apix.io"
          className="text-blue-500 underline"
        >
          techsupport@apix.io
        </a>{" "}
        to initiate your trial.
      </p>
    </div>
  );
};

export default GettingStarted;
