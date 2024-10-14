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
          requestExample: {
            qr_text: "Aadhaar QR code text",
          },
          responseExample: {
            status: "success",
            data: {
              name: "John Doe",
              aadhaar_number: "1234-5678-9123",
            },
          },
        },
        {
          name: "Upload XML",
          endpoint: "/aadhaar/upload/xml",
          method: "POST",
          requestExample: {
            xml_file: "base64_encoded_xml",
          },
          responseExample: {
            status: "success",
            data: {
              name: "John Doe",
              aadhaar_number: "1234-5678-9123",
            },
          },
        },
        {
          name: "QR Status",
          subfolders: [
            {
              name: "Check QR Status",
              endpoint: "/aadhaar/qr/status",
              method: "GET",
              requestExample: null,
              responseExample: {
                status: "pending",
                message: "Aadhaar QR verification is still in progress.",
              },
            },
            {
              name: "Cancel QR",
              endpoint: "/aadhaar/qr/cancel",
              method: "DELETE",
              requestExample: {
                qr_id: "123456789",
              },
              responseExample: {
                status: "success",
                message: "QR verification canceled.",
              },
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
          requestExample: {
            rc_image: "base64_encoded_rc_image",
          },
          responseExample: {
            status: "success",
            data: {
              registration_number: "MH12AB1234",
              owner_name: "John Doe",
            },
          },
        },
        {
          name: "RC Status",
          subfolders: [
            {
              name: "Check RC Status",
              endpoint: "/rc/status",
              method: "GET",
              requestExample: null,
              responseExample: {
                status: "verified",
                message: "RC verification completed successfully.",
              },
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
          requestExample: {
            fastag_image: "base64_encoded_fastag_image",
          },
          responseExample: {
            status: "success",
            data: {
              vehicle_number: "MH12AB1234",
              fastag_id: "FT123456789",
            },
          },
        },
        {
          name: "FasTag Status",
          subfolders: [
            {
              name: "Check FasTag Status",
              endpoint: "/fastag/status",
              method: "GET",
              requestExample: null,
              responseExample: {
                status: "verified",
                message: "FasTag verification completed.",
              },
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
          requestExample: {
            account_number: "1234567890",
            ifsc_code: "SBIN0001234",
          },
          responseExample: {
            status: "success",
            data: {
              account_holder_name: "John Doe",
              bank_name: "State Bank of India",
            },
          },
        },
        {
          name: "Statement Analysis",
          endpoint: "/bank/statement/analyze",
          method: "POST",
          requestExample: {
            statement_file: "base64_encoded_statement_pdf",
          },
          responseExample: {
            status: "success",
            data: {
              summary: {
                total_credits: "₹50000",
                total_debits: "₹30000",
                balance: "₹20000",
              },
            },
          },
        },
        {
          name: "Account Balance",
          subfolders: [
            {
              name: "Get Balance",
              endpoint: "/bank/balance",
              method: "GET",
              requestExample: null,
              responseExample: {
                status: "success",
                data: {
                  balance: "₹20000",
                },
              },
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
          requestExample: {
            voter_id: "ABCDE12345",
          },
          responseExample: {
            status: "success",
            data: {
              name: "John Doe",
              voter_id: "ABCDE12345",
            },
          },
        },
        {
          name: "Voter ID Status",
          subfolders: [
            {
              name: "Check Voter ID Status",
              endpoint: "/voterid/status",
              method: "GET",
              requestExample: null,
              responseExample: {
                status: "verified",
                message: "Voter ID verification completed.",
              },
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
          requestExample: {
            license_number: "DL1234567890",
          },
          responseExample: {
            status: "success",
            data: {
              name: "John Doe",
              license_number: "DL1234567890",
            },
          },
        },
        {
          name: "License Status",
          subfolders: [
            {
              name: "Check License Status",
              endpoint: "/drivinglicense/status",
              method: "GET",
              requestExample: null,
              responseExample: {
                status: "verified",
                message: "Driving License verification completed.",
              },
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
          requestExample: {
            passport_number: "M1234567",
          },
          responseExample: {
            status: "success",
            data: {
              name: "John Doe",
              passport_number: "M1234567",
            },
          },
        },
        {
          name: "Passport Status",
          subfolders: [
            {
              name: "Check Passport Status",
              endpoint: "/passport/status",
              method: "GET",
              requestExample: null,
              responseExample: {
                status: "verified",
                message: "Passport verification completed.",
              },
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
          requestExample: {
            gstin: "22AAAAA0000A1Z5",
          },
          responseExample: {
            status: "success",
            data: {
              company_name: "ABC Pvt Ltd",
              gstin: "22AAAAA0000A1Z5",
            },
          },
        },
        {
          name: "Verify Company",
          endpoint: "/corporate/company/verify",
          method: "POST",
          requestExample: {
            company_name: "ABC Pvt Ltd",
            cin: "L12345MH2000PLC123456",
          },
          responseExample: {
            status: "success",
            data: {
              company_name: "ABC Pvt Ltd",
              cin: "L12345MH2000PLC123456",
              status: "Active",
            },
          },
        },
        {
          name: "Corporate Status",
          subfolders: [
            {
              name: "Check Corporate Status",
              endpoint: "/corporate/status",
              method: "GET",
              requestExample: null,
              responseExample: {
                status: "active",
                message: "Corporate verification completed.",
              },
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
          requestExample: {
            image1: "base64_encoded_image1",
            image2: "base64_encoded_image2",
          },
          responseExample: {
            status: "success",
            match: true,
            confidence: 98.5,
          },
        },
        {
          name: "Face Recognition Status",
          subfolders: [
            {
              name: "Check Face Recognition Status",
              endpoint: "/face/recognition/status",
              method: "GET",
              requestExample: null,
              responseExample: {
                status: "completed",
                match: true,
                confidence: 98.5,
              },
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
          requestExample: {
            document_image: "base64_encoded_image",
          },
          responseExample: {
            status: "success",
            extracted_text: "Sample extracted text from document.",
          },
        },
        {
          name: "OCR Status",
          subfolders: [
            {
              name: "Check OCR Status",
              endpoint: "/ocr/status",
              method: "GET",
              requestExample: null,
              responseExample: {
                status: "completed",
                extracted_text: "Sample extracted text.",
              },
            },
          ],
        },
      ],
    },
  ],
};

export default apiFolders;
