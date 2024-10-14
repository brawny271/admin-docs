const apiFolders = {
  title: "SUREPASS API",
  folders: [
    {
      name: "Aadhaar",
      subfolders: [
        {
          name: "Upload QR",
          endpoint: "/aadhaar/upload/qr",
          method: "POST",
        },
        {
          name: "Upload XML",
          endpoint: "/aadhaar/upload/xml",
          method: "POST",
        },
        {
          name: "QR Status",
          subfolders: [
            {
              name: "Check QR Status",
              endpoint: "/aadhaar/qr/status",
              method: "GET",
            },
            {
              name: "Cancel QR",
              endpoint: "/aadhaar/qr/cancel",
              method: "DELETE",
            },
          ],
        },
      ],
    },
    {
      name: "RC",
      subfolders: [
        {
          name: "Upload RC",
          endpoint: "/rc/upload",
          method: "POST",
        },
        {
          name: "RC Status",
          subfolders: [
            {
              name: "Check RC Status",
              endpoint: "/rc/status",
              method: "GET",
            },
          ],
        },
      ],
    },
    {
      name: "FasTag",
      subfolders: [
        {
          name: "Upload FasTag",
          endpoint: "/fastag/upload",
          method: "POST",
        },
        {
          name: "FasTag Status",
          subfolders: [
            {
              name: "Check FasTag Status",
              endpoint: "/fastag/status",
              method: "GET",
            },
          ],
        },
      ],
    },
    {
      name: "Bank Verification",
      subfolders: [
        {
          name: "Verify Bank Account",
          endpoint: "/bank/verify",
          method: "POST",
        },
        {
          name: "Statement Analysis",
          endpoint: "/bank/statement/analyze",
          method: "POST",
        },
        {
          name: "Account Balance",
          subfolders: [
            {
              name: "Get Balance",
              endpoint: "/bank/balance",
              method: "GET",
            },
          ],
        },
      ],
    },
    {
      name: "Voter ID",
      subfolders: [
        {
          name: "Verify Voter ID",
          endpoint: "/voterid/verify",
          method: "POST",
        },
        {
          name: "Voter ID Status",
          subfolders: [
            {
              name: "Check Voter ID Status",
              endpoint: "/voterid/status",
              method: "GET",
            },
          ],
        },
      ],
    },
    {
      name: "Driving License",
      subfolders: [
        {
          name: "Verify License",
          endpoint: "/drivinglicense/verify",
          method: "POST",
        },
        {
          name: "License Status",
          subfolders: [
            {
              name: "Check License Status",
              endpoint: "/drivinglicense/status",
              method: "GET",
            },
          ],
        },
      ],
    },
    {
      name: "Passport",
      subfolders: [
        {
          name: "Verify Passport",
          endpoint: "/passport/verify",
          method: "POST",
        },
        {
          name: "Passport Status",
          subfolders: [
            {
              name: "Check Passport Status",
              endpoint: "/passport/status",
              method: "GET",
            },
          ],
        },
      ],
    },
    {
      name: "Corporate",
      subfolders: [
        {
          name: "Verify GSTIN",
          endpoint: "/corporate/gstin/verify",
          method: "POST",
        },
        {
          name: "Verify Company",
          endpoint: "/corporate/company/verify",
          method: "POST",
        },
        {
          name: "Corporate Status",
          subfolders: [
            {
              name: "Check Corporate Status",
              endpoint: "/corporate/status",
              method: "GET",
            },
          ],
        },
      ],
    },
    {
      name: "Face",
      subfolders: [
        {
          name: "Face Match",
          endpoint: "/face/match",
          method: "POST",
        },
        {
          name: "Face Recognition Status",
          subfolders: [
            {
              name: "Check Face Recognition Status",
              endpoint: "/face/recognition/status",
              method: "GET",
            },
          ],
        },
      ],
    },
    {
      name: "OCR",
      subfolders: [
        {
          name: "Document OCR",
          endpoint: "/ocr/document",
          method: "POST",
        },
        {
          name: "OCR Status",
          subfolders: [
            {
              name: "Check OCR Status",
              endpoint: "/ocr/status",
              method: "GET",
            },
          ],
        },
      ],
    },
  ],
};

export default apiFolders;
