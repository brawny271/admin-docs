const apiFolders = {
  title: "APIX API",
  folders: [
    {
      name: "PAN",
      subfolders: [
        {
          name: "PAN Verification",
          endpoint: "/pan/1.0/verification",
          method: "POST",
          details:
            "This API verifies the provided PAN (Permanent Account Number) by checking it against government databases. It ensures that the PAN is valid and belongs to the person in question.",
          requestExample: {
            product_code: "API0001",
            trans_id: "BV576862_1234567890",
            pan_no: "ASXXXXX75J",
          },
          responseExample: {
            trans_id: "BV576862_1234567890",
            status: "success",
            message: "pan verification successful",
            pan_no: "ASXXXXX75J",
            fullname: "BHUSHAN RAGHUNATH VISHE",
            category: "person",
            pan_status: "valid",
            upstream_rrn: "pan_OhMyzrRngvjfghpSuiZZ",
          },
        },
        {
          name: "PAN Comprehensive",
          endpoint: "/pan/1.0/comprehensive",
          method: "POST",
          details:
            "This API provides a comprehensive verification of the PAN, including additional details such as the PAN holder's full name, date of birth, address, and linkage to Aadhaar, if available.",
          requestExample: {
            product_code: "API0002",
            trans_id: "BV576862_1234567891",
            pan_no: "ASXXXXX75J",
          },
          responseExample: {
            trans_id: "BV576862_1234567891",
            status: "success",
            message: "pan verification successful",
            pan_no: "ASXXXXX75J",
            firstname: "BHUSHAN",
            middlename: "RAGHUNATH",
            lastname: "VISHE",
            fullname: "BHUSHAN RAGHUNATH VISHE",
            dob: "1992-06-06",
            pan_status: "valid",
            pan_status_code: "E",
            gender: "M",
            email: "bhushanrvishe@gmail.com",
            phone_number: "8975168703",
            aadhaar_link_status: true,
            masked_aadhaar: "XXXXXXXX5582",
            address: {
              line1: "H.No. 84",
              line2: "Near Hanuman Mandir",
              street: "at-post:Pashane,Tal:Karjat",
              state: "MAHARASHTRA",
              city: "RAIGARH(MH)",
              pincode: "410201",
              country: "INDIA",
              full_address:
                "H.No. 84 Near Hanuman Mandir at-post:Pashane,Tal:Karjat 410201 RAIGARH(MH) MAHARASHTRA INDIA",
            },
            upstream_rrn: "pan_comprehensive_ahrTLLAbeRaJXpdrdSvy",
            category: "person",
          },
        },
      ],
    },
    {
      name: "Aadhaar",
      subfolders: [
        {
          name: "Generate Otp",
          endpoint: "/aadhaar/1.0/generate-otp",
          method: "POST",
          details:
            "This API generates an OTP (One-Time Password) sent to the mobile number linked with the provided Aadhaar number. The OTP is used for further Aadhaar verification processes.",
          requestExample: {
            product_code: "API0003",
            trans_id: "BV576862_1234567891",
            aadhaar_no: "XXXXXXXX5582",
          },
          responseExample: {
            trans_id: "BV576862_1234567891",
            aadhaar_no: "XXXXXXXX5582",
            status: "success",
            message: "otp sent on aadhaar registered mobile number",
            is_otp_sent: true,
            otp_reference_no: "aadhaar_v2_YxfeokIhjlucpWooNbpr",
          },
        },
        {
          name: "Validate Otp",
          endpoint: "/aadhaar/1.0/validate-otp",
          method: "POST",
          details:
            "This API validates the OTP sent to the Aadhaar-linked mobile number. Once the OTP is verified, it allows access to the Aadhaar details for further processing.",
          requestExample: {
            product_code: "API0004",
            trans_id: "BV576862_1234567892",
            otp_reference_no: "aadhaar_v2_YxfeokIhjlucpWooNbpr",
            otp: "745618",
          },
          responseExample: {
            data: {
              client_id: "aadhaar_v2_YxfeokIhjlucpWooNbpr",
              full_name: "Bhushan Raghunath Vishe",
              aadhaar_number: "XXXXXXXXXXXX",
              dob: "1992-06-06",
              gender: "M",
              address: {
                country: "India",
                dist: "Raigarh",
                state: "Maharashtra",
                po: "Manivali",
                loc: "Pashane",
                vtc: "Pashane",
                subdist: "Karjat",
                street: "",
                house: "House No. 84",
                landmark: "Near Hanuman Mandir",
              },
              face_status: false,
              face_score: -1,
              zip: "410101",
              profile_image: "base64 image",
              has_image: true,
              email_hash:
                "087fa3a9c8760b444fa87dd3df69eafc9f6e4c36eb64105cb7224783ad515903",
              mobile_hash:
                "f216eafdc7707ddff74366e8c1965a114d92ccc5a43aa04a7439f1556eb5ca4f",
              raw_xml: "xml url",
              zip_data: "zip kyc data folder url",
              care_of: null,
              share_code: "3990",
              mobile_verified: false,
              reference_id: "558220241010185833327",
              aadhaar_pdf: null,
              status: "success_aadhaar",
              uniqueness_id:
                "c26d044ec7ba81e9e37792af70c523c0ab3b0d5d02048f20b5be811aec166d31",
            },
            trans_id: "BV576862_1234567892",
            status: "success",
            message: "aadhaar submit otp verified successfully",
            upstream_rrn: "aadhaar_v2_YxfeokIhjlucpWooNbpr",
          },
        },
        {
          name: "Basic Verification",
          endpoint: "/aadhaar/1.0/verification",
          method: "POST",
          details:
            "This API verifies the Aadhaar number by checking its validity and provides basic demographic details such as age range, gender, and whether the mobile number is linked to Aadhaar.",
          requestExample: {
            product_code: "API0005",
            trans_id: "BV576862_1234567893",
            aadhaar_no: "712489735582",
          },
          responseExample: {
            trans_id: "BV576862_1234567893",
            status: "success",
            message: "aadhaar verification successful",
            upstream_rrn: "aadhaar_validation_obcwQfxHqblhBhxwqnrT",
            aadhaar_no: "712489735582",
            aadhaar_status: "valid",
            age_range: "30-40",
            gender: "M",
            is_mobile_linked: true,
            mobile_last_digits: "380",
            state: "Maharashtra",
          },
        },
      ],
    },
    {
      name: "Bank",
      subfolders: [
        {
          name: "Bank Account",
          endpoint: "/bank/1.0/account",
          method: "POST",
          details:
            "This API verifies a bank account by matching the account number and IFSC code to ensure that the bank account is valid and belongs to the given holder.",
          requestExample: {
            product_code: "API0006",
            trans_id: "BV576862_1234567894",
            bank_account_no: "1234567890",
            ifsc_code: "SBIN0001234",
          },
          responseExample: {
            trans_id: "BV576862_1234567894",
            status: "success",
            message: "bank account verification successful",
            account_holder_name: "John Doe",
            bank_name: "State Bank of India",
          },
        },
        {
          name: "Bank Account Penny Drop",
          endpoint: "/bank/1.0/penny-drop",
          method: "POST",
          details:
            "This API performs a penny drop test by depositing a small amount into the bank account, verifying that the account is active and capable of receiving funds.",
          requestExample: {
            product_code: "API0007",
            trans_id: "BV576862_1234567895",
            bank_account_no: "1234567890",
            ifsc_code: "SBIN0001234",
          },
          responseExample: {
            trans_id: "BV576862_1234567895",
            status: "success",
            message: "Penny drop successful",
            transaction_id: "TRX1234567890",
          },
        },
      ],
    },
    {
      name: "GST",
      subfolders: [
        {
          name: "Basic GST",
          endpoint: "/gst/1.0/basic",
          method: "POST",
          details:
            "This API provides basic verification of a GSTIN (Goods and Services Tax Identification Number), confirming the validity of the GSTIN and returning essential details like business name and registration date.",
          requestExample: {
            product_code: "API0006",
            trans_id: "BV576862_1234567894",
            gstin: "27AXXXXXXX8M1ZP",
          },
          responseExample: {
            trans_id: "BV576862_1234567894",
            status: "success",
            message: "GST verification successful",
            gstin: "27AXXXXXXX8M1ZP",
            gstin_status: "valid",
            registration_date: "2023-09-08",
            registration_type: "Private Limited Company",
            registration_name: "REGISTER NAME OF COMPANY",
            nature_of_business_activities:
              "Office / Sale Office|Retail Business|Supplier of Services|Works Contract",
            e_invoicing_status: "NO",
            legal_name_of_business: "LEGAL NAME OF COMPANY",
            constitution_of_business: "Private Limited Company",
            centre_jurisdiction:
              "State - CBIC,Zone - MUMBAI,Commissionerate - BHIWANDI,Division - DIVISION IV,Range - RANGE-I (Jurisdiction)",
            error: {},
          },
        },
        {
          name: "GST With Filling",
          endpoint: "/gst/1.0/comprehensive",
          method: "POST",
          details:
            "This API provides detailed verification of a GSTIN, including business activities, invoicing status, and jurisdiction details, offering a comprehensive view of the GST profile.",
          requestExample: {
            product_code: "API0008",
            trans_id: "Abcd12345456229",
            gstin: "27xxxxxxxxxxP",
            financial_year: "2022-23",
          },
          responseExample: {
            trans_id: "BV576862_1234567895",
            status: "success",
            message: "GST verification successful",
            gstin: "27AXXXXXXX8M1ZP",
            gstin_status: "valid",
            registration_date: "2023-09-08",
            registration_type: "Private Limited Company",
            registration_name: "REGISTER NAME OF COMPANY",
            nature_of_business_activities:
              "Office / Sale Office|Retail Business|Supplier of Services|Works Contract",
            e_invoicing_status: "NO",
            legal_name_of_business: "LEGAL NAME OF COMPANY",
            constitution_of_business: "Private Limited Company",
            centre_jurisdiction:
              "State - CBIC,Zone - MUMBAI,Commissionerate - BHIWANDI,Division - DIVISION IV,Range - RANGE-I (Jurisdiction)",
            error: {},
          },
        },
        {
          name: "Advance GST",
          endpoint: "/gst/1.0/advance",
          method: "POST",
          details:
            "The Advance GST API provides an in-depth analysis of a GSTIN, including historical data, business turnover, return filing status, and compliance rating. This allows for a comprehensive financial view of the business.",
          requestExample: {
            product_code: "API0009",
            trans_id: "BV576862_1234567896",
            gstin: "27AXXXXXXX8M1ZP",
          },
          responseExample: {
            trans_id: "BV576862_1234567896",
            status: "success",
            message: "Advance GST verification successful",
            gstin: "27AXXXXXXX8M1ZP",
            gstin_status: "valid",
            registration_date: "2023-09-08",
            registration_name: "REGISTER NAME OF COMPANY",
            nature_of_business_activities:
              "Office / Sale Office|Retail Business|Supplier of Services|Works Contract",
            compliance_rating: "A",
            last_return_filed_date: "2024-09-30",
            annual_turnover: "₹2,50,00,000",
            return_filing_status: "Filed",
            e_invoicing_status: "NO",
            constitution_of_business: "Private Limited Company",
            business_address: {
              street: "Some Street",
              city: "Mumbai",
              state: "Maharashtra",
              pincode: "400001",
            },
            jurisdiction_details:
              "State - CBIC,Zone - MUMBAI,Commissionerate - BHIWANDI,Division - DIVISION IV,Range - RANGE-I (Jurisdiction)",
            error: {},
          },
        },
        {
          name: "GST by PAN",
          endpoint: "/gst/1.0/by-pan",
          method: "POST",
          details:
            "The GST by PAN API allows verification of all GST registrations associated with a specific PAN. It returns multiple GSTINs linked to the PAN and their details, including business names, states, and registration status.",
          requestExample: {
            product_code: "API0007",
            trans_id: "BV576862_1234567897",
            pan_no: "ASXXXXX75J",
          },
          responseExample: {
            trans_id: "BV576862_1234567897",
            status: "success",
            message: "GST by PAN verification successful",
            pan_no: "ASXXXXX75J",
            gstin_list: [
              {
                gstin: "27AXXXXXXX8M1ZP",
                registration_name: "REGISTER NAME OF COMPANY 1",
                state: "Maharashtra",
                gstin_status: "Active",
              },
              {
                gstin: "07AXXXXXXX8M1ZA",
                registration_name: "REGISTER NAME OF COMPANY 2",
                state: "Delhi",
                gstin_status: "Inactive",
              },
            ],
            error: {},
          },
        },
      ],
    },
  ],
};

export default apiFolders;
