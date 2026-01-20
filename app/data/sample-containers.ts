import { Container, FileItem } from '../types';

// Clyde Baughman's Home Office Filing Cabinet
// Last Things Last - Los Angeles, 2009

export const clydeFilingCabinet: Container = {
  id: 'clyde-baughman-filing-cabinet',
  type: 'filing-cabinet',
  name: 'HOME OFFICE FILING CABINET',
  description: 'Standard 2-drawer filing cabinet located in the bedroom/office of Clyde Baughman. Unit 4, 1847 N. Kingsley Dr, Los Angeles, CA.',
  createdAt: '2009-03-15',
  files: [
    // === DRAWER 1: FINANCIAL / TAX RECORDS ===
    {
      id: 'folder-taxes',
      name: 'Tax_Returns',
      type: 'folder',
      priority: false,
      dateModified: '04/12/2008',
      children: [
        {
          id: 'tax-2008',
          name: '2008_Federal_Tax_Return.pdf',
          type: 'document',
          priority: false,
          dateModified: '04/12/2008',
          size: '45 KB',
          content: `FORM 1040 - U.S. Individual Income Tax Return
Tax Year 2008

Name: CLYDE R. BAUGHMAN
Address: 1847 N. Kingsley Dr #4, Los Angeles, CA 90027
SSN: XXX-XX-4851
Filing Status: Single

INCOME
Wages, salaries, tips: $67,432.00
Interest income: $234.12
Total Income: $67,666.12

ADJUSTED GROSS INCOME: $67,666.12

TAX AND CREDITS
Federal income tax withheld: $12,445.00
Refund amount: $1,203.44

[STANDARD TAX RETURN DOCUMENTATION]`
        },
        {
          id: 'tax-2007',
          name: '2007_Federal_Tax_Return.pdf',
          type: 'document',
          priority: false,
          dateModified: '04/08/2007',
          size: '52 KB',
          content: `FORM 1040 - U.S. Individual Income Tax Return
Tax Year 2007

Name: CLYDE R. BAUGHMAN
Address: 1847 N. Kingsley Dr #4, Los Angeles, CA 90027
SSN: XXX-XX-4851
Filing Status: Married Filing Jointly

Spouse: MARLENE T. BAUGHMAN
Spouse SSN: XXX-XX-7723

INCOME
Wages, salaries, tips: $64,891.00
Spouse wages: $42,340.00
Interest income: $567.23
Total Income: $107,798.23

[STANDARD TAX RETURN DOCUMENTATION]`
        },
        {
          id: 'tax-2006',
          name: '2006_Federal_Tax_Return.pdf',
          type: 'document',
          priority: false,
          dateModified: '04/10/2006',
          size: '48 KB',
          content: `FORM 1040 - U.S. Individual Income Tax Return
Tax Year 2006

Name: CLYDE R. BAUGHMAN
Filing Status: Married Filing Jointly
Spouse: MARLENE T. BAUGHMAN

[STANDARD TAX RETURN - NOTHING NOTABLE]`
        }
      ]
    },
    {
      id: 'folder-bank',
      name: 'Bank_Statements',
      type: 'folder',
      priority: false,
      dateModified: '02/28/2009',
      children: [
        {
          id: 'bank-feb-2009',
          name: 'WellsFargo_Feb2009.pdf',
          type: 'document',
          priority: false,
          dateModified: '02/28/2009',
          size: '23 KB',
          content: `WELLS FARGO BANK
Account Statement
February 1-28, 2009

Account Holder: CLYDE R BAUGHMAN
Account Number: ****4523
Account Type: Personal Checking

TRANSACTION SUMMARY
Beginning Balance: $4,234.56
Deposits: $2,845.12
Withdrawals: $3,102.44
Ending Balance: $3,977.24

TRANSACTIONS:
02/03 - RALPHS GROCERY #445      -$67.89
02/05 - DIRECT DEPOSIT PAYROLL   +$2,845.12
02/08 - SHELL OIL 04521          -$42.50
02/12 - AT&T WIRELESS            -$89.99
02/15 - CASH WITHDRAWAL ATM      -$200.00
02/18 - SOCAL EDISON             -$134.56
02/22 - CVS PHARMACY #8821       -$23.45
02/25 - BIG 5 SPORTING GOODS     -$156.78

[STANDARD BANK STATEMENT]`
        },
        {
          id: 'bank-jan-2009',
          name: 'WellsFargo_Jan2009.pdf',
          type: 'document',
          priority: false,
          dateModified: '01/31/2009',
          size: '22 KB',
          content: `WELLS FARGO BANK
Account Statement
January 2009

[STANDARD MONTHLY TRANSACTIONS]
Ending Balance: $4,234.56`
        }
      ]
    },

    // === DRAWER 2: PROPERTY / HOME ===
    {
      id: 'folder-property',
      name: 'Housing_and_Property',
      type: 'folder',
      priority: false,
      dateModified: '10/01/2008',
      children: [
        {
          id: 'lease-kingsley',
          name: 'Apartment_Lease_2008-2009.pdf',
          type: 'document',
          priority: false,
          dateModified: '10/01/2008',
          size: '45 KB',
          content: `RESIDENTIAL LEASE AGREEMENT

PROPERTY: 1847 N. Kingsley Drive, Unit 4
          Los Angeles, CA 90027

LANDLORD: Kingsley Arms LLC
          c/o Pacific Property Management
          P.O. Box 45521
          Los Angeles, CA 90045

TENANT: Clyde R. Baughman

LEASE TERM: October 1, 2008 through September 30, 2009
MONTHLY RENT: $975.00
SECURITY DEPOSIT: $975.00 (paid)
LATE FEE: $50.00 if rent received after 5th of month

PROPERTY DESCRIPTION:
One bedroom apartment, approximately 620 sq ft. Second floor rear unit. Includes stove, refrigerator. Tenant responsible for electricity and gas. Water/trash included.

SPECIAL CONDITIONS:
- No pets
- No smoking inside unit
- Quiet hours 10pm-8am
- Street parking only (no assigned space)
- Laundry facilities in basement (coin operated)

[STANDARD LEASE TERMS - 6 PAGES]

SIGNATURES:

_________________________     Date: 09/28/2008
Clyde R. Baughman (Tenant)

_________________________     Date: 09/28/2008  
Maria Santos (Property Manager)

---

MOVE-IN INSPECTION NOTES (attached):
- Carpet stained near kitchenette (pre-existing)
- Bathroom tile grout discolored (noted)
- Bedroom window sticks (noted)
- Water damage on ceiling, repaired (noted)
- Roach traps in kitchen (building-wide issue)`
        },
        {
          id: 'deed-cabin',
          name: 'Deed_2847_Pinecrest_Dr_Crestline.pdf',
          type: 'document',
          priority: true,
          dateModified: '03/18/2004',
          size: '92 KB',
          content: `GRANT DEED

RECORDING REQUESTED BY:
Mountain Communities Title

WHEN RECORDED MAIL TO:
Clyde R. Baughman
1847 N. Kingsley Dr #4
Los Angeles, CA 90027

Document: 2004-0284571
Recorded: 03/18/2004

---

FOR VALUABLE CONSIDERATION, receipt of which is hereby acknowledged,

ESTATE OF VERNON K. MUELLER, by executor Donald Mueller

hereby GRANTS to

CLYDE R. BAUGHMAN, a married man as his sole and separate property

the following described real property in the unincorporated area of San Bernardino County, State of California:

LOT 12 OF TRACT NO. 4156, LAKE GREGORY ESTATES, IN THE COMMUNITY OF CRESTLINE, AS PER MAP RECORDED IN BOOK 45, PAGE 78 OF MAPS, IN THE OFFICE OF THE COUNTY RECORDER OF SAID COUNTY.

APN: 0337-162-12-0000

Commonly known as: 2847 Pinecrest Drive, Crestline, CA 92325

PROPERTY DESCRIPTION:
Approximately 0.34 acres, improved with a single-story wood-frame cabin (approx. 1,100 sq ft), detached storage shed, and septic system. Mountain water district connection. Unpaved private drive access.

PURCHASE PRICE: $187,500.00

DATED: March 12, 2004

[SIGNATURES AND NOTARIZATION]

---

NOTE: Property purchased as sole and separate property.`
        },
        {
          id: 'renters-insurance',
          name: 'Renters_Insurance_2009.pdf',
          type: 'document',
          priority: false,
          dateModified: '01/15/2009',
          size: '18 KB',
          content: `STATE FARM INSURANCE
Renters Policy Declarations

Policy Number: 23-RQ-8845-2
Policy Period: 01/15/2009 to 01/15/2010

NAMED INSURED:
Clyde R. Baughman
1847 N. Kingsley Dr #4
Los Angeles, CA 90027

COVERAGE SUMMARY:
Personal Property: $15,000
Liability: $100,000
Medical Payments: $1,000

Annual Premium: $187.00

[STANDARD RENTERS INSURANCE POLICY]`
        }
      ]
    },
    {
      id: 'folder-utilities',
      name: 'Utility_Bills',
      type: 'folder',
      priority: false,
      dateModified: '03/01/2009',
      children: [
        {
          id: 'util-edison',
          name: 'SoCal_Edison_Mar2009.pdf',
          type: 'document',
          priority: false,
          dateModified: '03/01/2009',
          size: '12 KB',
          content: `SOUTHERN CALIFORNIA EDISON
Account: 3-042-5521-04

Service Address: 1847 N. Kingsley Dr #4, Los Angeles CA
Billing Period: Feb 1 - Feb 28, 2009

Current Charges: $134.56
Amount Due: $134.56
Due Date: March 15, 2009`
        },
        {
          id: 'util-gas',
          name: 'SoCal_Gas_Feb2009.pdf',
          type: 'document',
          priority: false,
          dateModified: '02/15/2009',
          size: '11 KB',
          content: `SOUTHERN CALIFORNIA GAS COMPANY
Service Address: 1847 N. Kingsley Dr #4

Amount Due: $67.23
Due Date: March 1, 2009`
        },
        {
          id: 'util-water',
          name: 'LADWP_Water_Feb2009.pdf',
          type: 'document',
          priority: false,
          dateModified: '02/20/2009',
          size: '10 KB',
          content: `LOS ANGELES DEPT OF WATER AND POWER
Water Service Bill

Service Address: 1847 N. Kingsley Dr #4
Billing Period: Jan 15 - Feb 15, 2009

Water Usage: 4,234 gallons
Amount Due: $45.67`
        }
      ]
    },

    // === DRAWER 3: PERSONAL / CORRESPONDENCE ===
    {
      id: 'folder-personal',
      name: 'Personal_Correspondence',
      type: 'folder',
      priority: false,
      dateModified: '12/10/2008',
      children: [
        {
          id: 'divorce-attorney-email',
          name: 'Email_Morrison_Law_Group_Print.pdf',
          type: 'document',
          priority: true,
          dateModified: '09/12/2007',
          size: '8 KB',
          content: `PRINTED EMAIL

From: receptionist@morrisonlawgroup.com
To: cbaughman_personal@yahoo.com
Date: Wednesday, September 12, 2007 2:34 PM
Subject: Initial Consultation - Baughman Dissolution Matter

Dear Mr. Baughman,

This email is to confirm that our office has been retained by Mrs. Marlene Baughman regarding the dissolution of your marriage.

Attorney Sarah Chen would like to schedule an initial consultation with you to discuss the matter and begin the process of reaching an amicable settlement. Mrs. Baughman has expressed her preference to handle this matter privately and without unnecessary conflict.

Please contact our office at your earliest convenience to schedule a meeting. We have availability on the following dates:

- Thursday, September 20th at 2:00 PM
- Monday, September 24th at 10:00 AM  
- Wednesday, September 26th at 3:30 PM

You may reach us at (310) 555-0147 or reply to this email.

Please note that you have the right to seek your own legal counsel. If you have retained an attorney, please provide their contact information and we will communicate through proper channels.

Sincerely,

Jennifer Walsh
Legal Assistant
Morrison Law Group
1901 Avenue of the Stars, Suite 450
Los Angeles, CA 90067
(310) 555-0147

---

[HANDWRITTEN NOTE AT BOTTOM OF PRINTED PAGE]:
"call L."`
        },
        {
          id: 'news-clipping-marlene',
          name: 'News_Clipping_LA_Times_Oct2007.pdf',
          type: 'document',
          priority: true,
          dateModified: '10/26/2007',
          size: '156 KB',
          content: `[NEWSPAPER CLIPPING - LOS ANGELES TIMES, OCTOBER 26, 2007]
[Clipped and laminated. Edges worn from handling.]

---

SEARCH CALLED OFF FOR MISSING HIKER

SAN BERNARDINO MOUNTAINS - After ten days of searching, San Bernardino County Search and Rescue has suspended active operations for Marlene Baughman, 44, of Los Angeles, who went missing on October 15th while hiking alone in the Lake Arrowhead area.

Mrs. Baughman, an experienced hiker and member of the Sierra Club, had told her husband she was going for a day hike on the Pacific Crest Trail near Deep Creek. When she failed to return by nightfall, her husband Clyde Baughman contacted authorities.

"She knew those trails like the back of her hand," said Susan Morales, a close friend. "Marlene wasn't careless. Something must have happened."

Search teams covered over 40 square miles of rugged terrain, utilizing helicopters, tracking dogs, and nearly 200 volunteers. Despite extensive efforts, no trace of Mrs. Baughman was found - not her pack, her vehicle, or any sign of her planned route.

"The area she was hiking is remote and unforgiving," said Sheriff's Deputy Ramon Ortega. "There are steep ravines, abandoned mine shafts, predators. Unfortunately, the mountains don't always give up their secrets."

Mrs. Baughman's car, a 2004 Honda CR-V, was found parked at the Deep Creek trailhead with her daypack inside, but authorities say this only deepens the mystery.

"It's unusual," admitted Deputy Ortega. "Most hikers don't leave their pack in the car. But we have no evidence of foul play."

Mr. Baughman, who works for LA County Public Works, has made several emotional appeals for information. "Please, if anyone saw anything, heard anything - I just need to know what happened to my wife," he said at a press conference Tuesday.

Friends describe the Baughmans as a devoted couple who enjoyed spending weekends at their mountain retreat.

Mrs. Baughman is presumed deceased. A memorial service is planned for November 3rd at First Presbyterian Church of Los Feliz.

Anyone with information is asked to contact the San Bernardino County Sheriff's Department.

---

[HANDWRITTEN IN MARGIN, BARELY LEGIBLE]:
"im sorry im sorry im sorry"`
        },
        {
          id: 'sympathy-card',
          name: 'Sympathy_Card_Nov2007.pdf',
          type: 'document',
          priority: false,
          dateModified: '11/05/2007',
          size: '4 KB',
          content: `[SYMPATHY CARD - CREAM COLORED, EMBOSSED LILIES]

Front: "With Deepest Sympathy"

Inside (printed):
"May loving memories bring you comfort during this difficult time."

Handwritten:
"Clyde - 

We are so sorry. Marlene was such a light in this world. We still can't believe she's gone.

Please know that Bob and I are here for you. Whatever you need.

The service was beautiful. She would have appreciated it.

Take care of yourself. Call us anytime.

With love,
Susan & Bob"

---

[A DRIED FLOWER IS PRESSED INSIDE THE CARD]`
        },
        {
          id: 'christmas-card-2006',
          name: 'Christmas_Card_2006.pdf',
          type: 'document',
          priority: false,
          dateModified: '12/18/2006',
          size: '5 KB',
          content: `[SCANNED CHRISTMAS CARD]

Front: "Wishing You Peace and Joy This Holiday Season"

Inside message (printed):
"Merry Christmas and Happy New Year!"

Handwritten:
"Clyde & Marlene -
Hope you two are doing well! We missed you at Thanksgiving. Maybe next year? Bob says hi. 
Love, Susan & Bob
P.S. - Clyde, call your sister sometime! :)"`
        },
        {
          id: 'birthday-card-marlene',
          name: 'Birthday_Card_Marlene_2006.pdf',
          type: 'document',
          priority: false,
          dateModified: '05/15/2006',
          size: '4 KB',
          content: `[SCANNED BIRTHDAY CARD]

Front: "To My Husband on His Birthday"

Inside (Marlene's handwriting):
"Clyde,

45 years old! Can you believe it? I remember when we met and you told me you'd never make it past 40 doing the work you do. Look at us now.

I know things have been hard lately. I know you can't tell me everything. But whatever you're carrying, you don't have to carry it alone. I'm here. I'll always be here.

Come back to me, Clyde. I miss you.

All my love,
Marlene

P.S. - Dinner at Musso's tonight? My treat."`
        }
      ]
    },
    {
      id: 'folder-medical',
      name: 'Medical_Records',
      type: 'folder',
      priority: false,
      dateModified: '11/03/2008',
      children: [
        {
          id: 'medical-physical-2008',
          name: 'Annual_Physical_2008.pdf',
          type: 'document',
          priority: false,
          dateModified: '11/03/2008',
          size: '28 KB',
          content: `KAISER PERMANENTE
Los Angeles Medical Center
Patient Summary

Patient: BAUGHMAN, CLYDE R.
DOB: 05/15/1961
Date of Visit: 11/03/2008
Provider: Dr. Robert Yamamoto

VITAL SIGNS:
Blood Pressure: 142/94 (elevated)
Heart Rate: 78 bpm
Weight: 198 lbs
Height: 5'11"

ASSESSMENT:
- Hypertension, stage 1 - recommend lifestyle modifications, follow-up in 3 months
- Patient reports difficulty sleeping, occasional nightmares
- Mild anxiety noted - declined referral to behavioral health
- Otherwise healthy for age

PRESCRIPTIONS:
- Lisinopril 10mg daily (blood pressure)
- Ambien 5mg as needed (sleep)

NOTES:
Patient appears fatigued. Dark circles under eyes. When asked about stress, patient was evasive. Encouraged patient to consider counseling. Patient declined.

Follow-up scheduled: February 2009`
        },
        {
          id: 'medical-insurance',
          name: 'Health_Insurance_Card.pdf',
          type: 'document',
          priority: false,
          dateModified: '01/01/2009',
          size: '6 KB',
          content: `KAISER PERMANENTE
Member ID Card

Member: CLYDE R BAUGHMAN
Member ID: 034-55-8821-01
Group: 78445 (LA County Employees)
Effective: 01/01/2009`
        }
      ]
    },

    // === DRAWER 4: MISCELLANEOUS ===
    {
      id: 'folder-auto',
      name: 'Auto_Documents',
      type: 'folder',
      priority: false,
      dateModified: '06/20/2008',
      children: [
        {
          id: 'auto-registration',
          name: 'Vehicle_Registration_2009.pdf',
          type: 'document',
          priority: false,
          dateModified: '12/15/2008',
          size: '8 KB',
          content: `CALIFORNIA DEPARTMENT OF MOTOR VEHICLES
REGISTRATION CARD

License Plate: 5XNK442
VIN: 1G1YY22G465108834
Year: 2006
Make: CHEVROLET
Model: IMPALA
Body Type: 4DR SEDAN

Registered Owner:
CLYDE R BAUGHMAN
1443 MARIPOSA AVE
LOS ANGELES CA 90027

Registration Expires: 05/15/2009
Fees Paid: $234.00`
        },
        {
          id: 'auto-insurance',
          name: 'Auto_Insurance_Geico.pdf',
          type: 'document',
          priority: false,
          dateModified: '01/01/2009',
          size: '18 KB',
          content: `GEICO
Auto Insurance Policy

Policy Number: 4287-55-2341
Policy Period: 01/01/2009 - 07/01/2009

Named Insured: Clyde R Baughman
Vehicle: 2006 Chevrolet Impala

Coverage:
Bodily Injury: $100,000/$300,000
Property Damage: $50,000
Collision: $500 deductible
Comprehensive: $250 deductible

6-Month Premium: $487.00`
        }
      ]
    },
    {
      id: 'folder-receipts',
      name: 'Receipts_2008-2009',
      type: 'folder',
      priority: false,
      dateModified: '02/28/2009',
      children: [
        {
          id: 'receipt-septic',
          name: 'Receipt_MtnSepticSupply_Oct2007.pdf',
          type: 'document',
          priority: true,
          dateModified: '10/08/2007',
          size: '6 KB',
          content: `MOUNTAIN SEPTIC & SUPPLY
"Serving the San Bernardino Mountains Since 1978"
1204 Highway 138, Crestline, CA 92325
(909) 555-0188

RECEIPT

Date: October 8, 2007
Receipt #: 07-3892

SOLD TO:
Clyde Baughman
2847 Pinecrest Dr
Crestline, CA 92325

ITEM                                    QTY     PRICE
---------------------------------------------------
1000-Gallon Polyethylene              1     $1,247.00
  Septic Tank (heavy duty)
Delivery Fee (Crestline)              1       $150.00
Installation NOT included

                          SUBTOTAL:   $1,397.00
                          TAX (7.75%):  $108.27
                          TOTAL:      $1,505.27

PAYMENT: VISA ****4851

DELIVERY SCHEDULED: October 12, 2007
Deliver to: 2847 Pinecrest Dr, Crestline
Customer will handle installation.

NOTE: Customer requested tank be left at rear of property near existing septic access.

---

Thank you for your business!
Questions? Call (909) 555-0188`
        },
        {
          id: 'receipt-home-depot',
          name: 'Receipt_HomeDepot_Oct2007.pdf',
          type: 'document',
          priority: false,
          dateModified: '10/10/2007',
          size: '5 KB',
          content: `THE HOME DEPOT
Store #6652 - Crestline
Receipt

Date: 10/10/2007

ITEMS:
50lb Bag Quickcrete (x4)         $15.96
PVC Pipe 4" x 10ft (x6)          $47.94  
PVC Fittings Assorted            $23.45
Shovel - Round Point             $24.99
Pickaxe                          $32.99
Work Gloves (2 pack)             $12.99

SUBTOTAL:                       $158.32
TAX:                             $12.27
TOTAL:                          $170.59

PAYMENT: DEBIT ****4523

Thank you for shopping at The Home Depot!`
        },
        {
          id: 'receipt-ralphs',
          name: 'Receipt_Ralphs_Mar2009.pdf',
          type: 'document',
          priority: false,
          dateModified: '03/08/2009',
          size: '4 KB',
          content: `RALPHS #445
4311 Los Feliz Blvd

03/08/2009  6:47 PM

Milk 2% Gallon         $3.49
Bread Wheat            $2.79
Eggs Large Dz          $2.99
Bananas               $1.23
Ground Beef 1lb        $4.99
Frozen Pizza           $5.99
Coffee Folgers         $7.99
Beer Budweiser 6pk     $6.99

TOTAL                 $36.46
VISA ****4851

THANK YOU FOR SHOPPING RALPHS!`
        },
        {
          id: 'receipt-cvs',
          name: 'Receipt_CVS_Feb2009.pdf',
          type: 'document',
          priority: false,
          dateModified: '02/22/2009',
          size: '3 KB',
          content: `CVS/pharmacy #8821

02/22/2009

Ambien 5mg (30)        $15.00
  (Insurance applied)
Advil 200ct            $8.45

TOTAL                  $23.45
VISA ****4851`
        }
      ]
    },
    {
      id: 'folder-work',
      name: 'Work_Documents',
      type: 'folder',
      priority: false,
      dateModified: '12/20/2008',
      children: [
        {
          id: 'work-paystub',
          name: 'Paystub_Dec2008.pdf',
          type: 'document',
          priority: false,
          dateModified: '12/20/2008',
          size: '12 KB',
          content: `LOS ANGELES COUNTY
EMPLOYEE EARNINGS STATEMENT

Employee: BAUGHMAN, CLYDE R
Employee ID: 445-2891
Department: PUBLIC WORKS - FACILITIES
Pay Period: 12/01/2008 - 12/15/2008
Pay Date: 12/20/2008

EARNINGS:
Regular Hours: 80.00    Rate: $32.45    Amount: $2,596.00

DEDUCTIONS:
Federal Tax:           $412.34
State Tax:             $156.78
Social Security:       $160.95
Medicare:               $37.64
Health Insurance:       $89.45
Retirement (LACERA):   $207.68

NET PAY: $1,531.16

Direct Deposit: Wells Fargo ****4523`
        },
        {
          id: 'work-badge',
          name: 'Employee_Badge_Copy.pdf',
          type: 'document',
          priority: false,
          dateModified: '03/15/2005',
          size: '15 KB',
          content: `[PHOTOCOPY OF EMPLOYEE ID BADGE]

LOS ANGELES COUNTY
DEPARTMENT OF PUBLIC WORKS

CLYDE R. BAUGHMAN
Facilities Maintenance Supervisor
Badge #: 4521
Issued: 03/15/2005

[PHOTO: Middle-aged white male, brown hair with gray at temples, tired eyes, slight frown]

ACCESS: LEVEL 2 - COUNTY FACILITIES`
        }
      ]
    },

    // === LOOSE FILES IN CABINET (not in folders) ===
    {
      id: 'handwritten-note',
      name: 'Handwritten_Note_Loose.pdf',
      type: 'document',
      priority: true,
      dateModified: '03/14/2009',
      size: '3 KB',
      content: `[SCAN OF HANDWRITTEN NOTE - LOOSE PAPER, HEAVILY CREASED]
[Handwriting is erratic. Some words crossed out. Small drawings in margins.]

---

L wont return calls

cant sleep     cant sleep     cant sleep

[scribbled out line]

IT WORKED but also it didnt?? wrong wrong wrong something WRONG

check the pronunciation. i checked. L checked. 3 times.

[drawing: small spiral]

the eyes      the eyes      the eyes

i have to fix it. the coup. fix it at the coup.

[written sideways in margin]:
still hear her
still hear

forgive me

[bottom of page, different pen]:
tomorrow`
        },
    {
      id: 'old-photo',
      name: 'Photo_Clyde_and_Marlene.jpg',
      type: 'photo',
      priority: false,
      dateModified: '07/04/2005',
      size: '2.1 MB',
      content: `[PHOTOGRAPH - Color print, slightly faded]

Shows a couple at what appears to be a 4th of July barbecue. American flag bunting visible in background. Sunny day.

MAN (Clyde): Mid-40s, brown hair, wearing a blue polo shirt. He's smiling but there's something guarded in his expression. His arm is around the woman protectively.

WOMAN (Marlene): Similar age, blonde hair in a ponytail, wearing a red sundress. Genuine warm smile. She's leaning into him comfortably.

They look happy. They look normal.

Written on back in pen: "4th of July 2005 - Bob & Susan's place - Good day. One of the last good days."`
    },
    {
      id: 'warranty-docs',
      name: 'Appliance_Warranties.pdf',
      type: 'document',
      priority: false,
      dateModified: '09/10/2006',
      size: '34 KB',
      content: `ASSORTED WARRANTY DOCUMENTS

- Kenmore Refrigerator Model #795 - Purchased 2006 - 5 Year Warranty
- GE Microwave - Purchased 2004 - Warranty Expired
- Carrier AC Unit - Purchased 2003 - 10 Year Compressor Warranty

[STANDARD WARRANTY PAPERWORK]`
    },
    {
      id: 'owners-manual',
      name: 'Chevy_Impala_Owners_Manual.pdf',
      type: 'document',
      priority: false,
      dateModified: '04/22/2006',
      size: '156 KB',
      content: `2006 CHEVROLET IMPALA
OWNER'S MANUAL

[Standard vehicle owner's manual - 342 pages]

Some pages are dog-eared:
- Page 45: Tire pressure specifications
- Page 123: Fuse box locations  
- Page 201: Trunk emergency release`
    }
  ]
};

// Cabin Footlocker - Found at 2847 Pinecrest Dr, Crestline
export const cabinFootlocker: Container = {
  id: 'cabin-footlocker',
  type: 'footlocker',
  name: 'METAL FOOTLOCKER',
  description: 'Military-style footlocker found in the cabin bedroom closet. Padlocked (lock has been cut). 2847 Pinecrest Dr, Crestline, CA.',
  createdAt: '2009-03-15',
  files: [
    {
      id: 'ammo-box',
      name: 'Ammunition_Box.jpg',
      type: 'evidence',
      priority: false,
      dateModified: '08/30/2008',
      size: '1.2 MB',
      imageUrl: 'https://cdn11.bigcommerce.com/s-yqqkx/images/stencil/1280x1280/products/630969/566324/219994__95131.1738762298.jpg?c=2',
      content: `12 Gauge 00 Buckshot. Box indicates 25 shells. Approximately 9 remaining.`
    },
    {
      id: 'instruction-note',
      name: 'Handwritten_Instructions.jpg',
      type: 'document',
      priority: true,
      dateModified: '03/10/2009',
      size: '340 KB',
      content: `[SCAN OF HANDWRITTEN NOTE - SINGLE PAGE, YELLOW LEGAL PAD]
[Handwriting is shaky but deliberate. Written in black ink.]

---

God forgive me.

If you're reading this, I couldn't do it. I thought I could but I COULDN'T.

You have to finish it. Please. For everyone's sake.

The gasoline is in the shed out back. 5 gallon can, should be enough.

Pour it down the hatch. ALL of it. Then light it. 

DO NOT OPEN THE HATCH.
DO NOT LOOK INSIDE.

I'm sorry I couldn't be stronger.

                                        - C.B.`
    },
    {
      id: 'spell-pages',
      name: 'Torn_Pages_Unknown_Text.jpg',
      type: 'document',
      priority: true,
      dateModified: '10/20/2007',
      size: '1.4 MB',
      content: `[SCAN OF TORN PAGES - PHOTOCOPIES, HEAVILY DEGRADED]
[Stained. Burned at edges. Handwritten notes in margins.]

---

[FRAGMENT 1]

...giveth freely what is taken. The Mother's 
name spoken backward openeth the [illegible]
and that which waiteth shall

                    HEAR

salt. nine. the corners must not

[HANDWRITTEN, CRAMPED]: "3x"

---

[FRAGMENT 2]

do not look upon the face of
do not look upon the face of  
do not look upon the face of

Y'ai 'ng'ngah
Yog-Sothoth
h'ee - Loss - G'wrath

[illegible symbols - appear hand-drawn, circular]

the door is the key
the key is the door
that which is named is that which

[HANDWRITTEN]: "L says keep eyes closed"

---

[FRAGMENT 3]

...when the vessel spilleth over, THEY
pour through like water through fingers. what
remaineth weareth the shape but 

        NOT THE WEIGHT

cold. cold. the flesh remembereth cold.

do not speak to it
do not answer it
it learneth the voice by LISTENING

[large section torn/burned away]

...nnot be undon. once called, once 
answered, the

[rest missing]

---

[BACK OF FRAGMENT - HANDWRITTEN ONLY]

wrong
wrong
wrong wrong wrong

something ELSE

please

please`
    },
    {
      id: 'dg-folder',
      name: 'Green_Folder_Case_Files',
      type: 'folder',
      priority: true,
      dateModified: '06/15/2004',
      children: [
        {
          id: 'dg-folder-cover',
          name: 'Folder_Description.txt',
          type: 'document',
          priority: false,
          dateModified: '06/15/2004',
          size: '1 KB',
          content: `[GREEN FOLDER - FADED]

Standard manila folder, but dyed dark green.
Front has a hand-drawn triangle symbol in black marker.
Papers inside are worn and coffee-stained.
Some pages have been torn out.`
        },
        {
          id: 'dg-case-1',
          name: 'Case_Notes_1998.pdf',
          type: 'document',
          priority: true,
          dateModified: '11/22/1998',
          size: '34 KB',
          content: `OPERATION [REDACTED] - AFTER ACTION REPORT
Date: November 1998
Location: [REDACTED], Colorado
Operatives: C. Baughman, M. Wells, [REDACTED]

SUMMARY:
Team responded to reports of [REDACTED] at abandoned [REDACTED] facility. Local law enforcement had already lost two officers investigating.

Upon arrival, team discovered [REDACTED] in basement level. Witnesses described [HEAVY REDACTION - MULTIPLE LINES BLACKED OUT]

Subject was neutralized using [REDACTED]. Remains were disposed of per protocol. 

CASUALTIES:
- M. Wells: deceased (cause: [REDACTED])
- C. Baughman: minor injuries, psychological evaluation recommended

NOTES:
Baughman exhibited signs of acute stress following incident. Recommended 2 weeks leave. Subject insists he is "fine" and wishes to continue field work.

[REMAINDER OF DOCUMENT HEAVILY REDACTED]`
        },
        {
          id: 'dg-case-2',
          name: 'Case_Notes_2002.pdf',
          type: 'document',
          priority: true,
          dateModified: '04/08/2002',
          size: '28 KB',
          content: `OPERATION [REDACTED] - PRELIMINARY NOTES
Date: April 2002  
Location: [REDACTED], California
Lead: C. Baughman

SITUATION:
Civilian reported [REDACTED] activity at residence following purchase of items from estate sale. Items included [REDACTED] and a collection of books, one of which [HEAVY REDACTION]

RESPONSE:
Items were confiscated and transferred to [REDACTED] for storage/disposal. Civilian was administered [REDACTED] and given cover story (gas leak causing hallucinations).

ITEM OF NOTE:
One book could not be located. Civilian claims it was "already gone" when team arrived. Book described as [REDACTED], leather binding, text in unknown language. 

Baughman has requested permission to continue search for missing book. Request denied - case closed per handler directive.

[HANDWRITTEN NOTE IN MARGIN]:
"L. says he might know where it went. Following up."

STATUS: CLOSED`
        },
        {
          id: 'dg-case-3',
          name: 'Personnel_Memo.pdf',
          type: 'document',
          priority: false,
          dateModified: '09/30/2005',
          size: '12 KB',
          content: `INTERNAL MEMORANDUM
TO: [REDACTED]
FROM: [REDACTED]  
RE: Operative C. Baughman - Status Review

Baughman has been a reliable operative for 11 years. However, recent performance reviews indicate potential burnout. Operative has:

- Declined three (3) assignments in past 6 months
- Missed two (2) scheduled check-ins
- Failed to submit after-action report for [REDACTED] operation

Additionally, operative's wife has initiated divorce proceedings. Baughman requested time off which was granted.

RECOMMENDATION:
Reduced operational status. Desk work only until psychological evaluation completed.

[HANDWRITTEN AT BOTTOM]:
"Denied. We need him in the field. - A."`
        }
      ]
    },
    {
      id: 'marlene-note',
      name: 'Letter_From_M.jpg',
      type: 'document',
      priority: true,
      dateModified: '10/14/2007',
      size: '890 KB',
      content: `[SCAN OF HANDWRITTEN LETTER - FLORAL STATIONERY]
[Neat handwriting in blue ink. Paper is creased as if folded and unfolded many times.]

---

October 14, 2007

Clyde,

I don't know how else to say this, so I'm just going to say it.

I need a divorce.

I've tried talking to you. I've tried waiting for you to come back to me. I've tried pretending everything is fine. I can't do it anymore.

You're not the man I married. I don't know when it happened, but somewhere along the way I lost you. You don't sleep. You don't eat. You stare at nothing for hours. And when you DO talk to me, it's like you're looking right through me.

I know your job is hard. I know there are things you can't tell me. I accepted that years ago. But this is different. You're DIFFERENT. 

Last week you called me "Marlene" like you weren't sure that was my name. Like you were checking. Who else would I be, Clyde?

I love you. I will always love the man you used to be. But I can't live like this anymore. I can't keep waiting for someone who isn't coming back.

The lawyer's information is on the kitchen counter. Please, Clyde. Just let me go. Let us both move on.

I'm staying at Susan's until this is sorted out. Don't come there. I need space.

I'm sorry.

                                        Marlene`
    },
    {
      id: 'misc-items',
      name: 'Miscellaneous_Contents.txt',
      type: 'document',
      priority: false,
      dateModified: '03/15/2009',
      size: '2 KB',
      content: `[INVENTORY OF REMAINING FOOTLOCKER CONTENTS]

- Military dog tags (name worn off, unreadable)
- Waterproof flashlight, black, functional
- Box of wooden matches (Ohio Blue Tip)
- Folding knife, 4" blade, slight rust
- Roll of duct tape, partially used
- Coil of rope, approx 20 feet, nylon
- Empty whiskey bottle (Jim Beam)
- Pack of cigarettes (Marlboro Reds), 3 remaining
- Disposable lighter, yellow, functional`
    },
    {
      id: 'bloody-suit',
      name: 'Cardboard_Box_Clothing.jpg',
      type: 'evidence',
      priority: false,
      dateModified: '11/22/1998',
      size: '890 KB',
      content: `[EVIDENCE PHOTOGRAPH]

Standard moving box, unsealed.
Contents: One men's suit, neatly folded.
  - Jacket: Navy blue, 42 Regular
  - Trousers: Matching, 34x32
  - White dress shirt
  - Burgundy necktie

Condition: All items are heavily stained with what appears to be dried blood. Staining is extensive - estimated 2-3 liters based on saturation. Suit has been carefully folded despite condition.

No identification or tags visible.

[HANDWRITTEN TAG ATTACHED TO BOX]:
"WELLS - DENVER - 11/98
DO NOT DESTROY"`
    },
    {
      id: 'shoebox',
      name: 'Old_Shoebox_Sealed',
      type: 'folder',
      priority: false,
      dateModified: '06/15/2004',
      children: [
        {
          id: 'shoebox-desc',
          name: 'Shoebox_Description.txt',
          type: 'document',
          priority: false,
          dateModified: '06/15/2004',
          size: '1 KB',
          content: `[ITEM DESCRIPTION]

Men's shoebox, Nike brand, size 11.
Box has been reinforced with packing tape.
Exterior marked with black marker: "PERSONAL - DO NOT DISCARD"

Contents are tightly packed and wrapped in newspaper (Los Angeles Times, various dates 1994-2002).`
        },
        {
          id: 'reel-tapes',
          name: 'Reel_To_Reel_Tapes_Box.jpg',
          type: 'evidence',
          priority: false,
          dateModified: '09/29/1962',
          size: '1.8 MB',
          content: `[EVIDENCE PHOTOGRAPH]

Cardboard box containing seven reel-to-reel audio tapes.
Tapes are labeled with dates: 8/15/62 through 9/29/62
Total runtime estimated: 21 hours

Handwritten label on box: "YUMA COUNTY - DO NOT COPY"

[PARTIAL TRANSCRIPT - TAPE 3, APPROX 00:14:30]

[Background sounds: rhythmic chanting, tambourines, what may be snakes rattling]

VOICE 1 (male, Appalachian accent): "...and Saint Yig did crawl forth from the pit, and his scales were as the armor of righteousness..."

CONGREGATION: "Praise the Scaled Redeemer!"

VOICE 1: "...and he did take the serpent unto his bosom, for the serpent is the flesh of the Blessed One made manifest..."

VOICE 2 (female, hysterical): "I FEEL HIM! I FEEL HIM INSIDE ME!"

[sounds of someone speaking in unknown language or glossolalia]

VOICE 1: "Receive the blessing! Receive the coils of the Blessed Serpent! For Saint Yig watches over his faithful and—"

[TAPE DEGRADES - REMAINDER UNINTELLIGIBLE]

Note: Listening to full recordings is not recommended.`
        },
        {
          id: 'dissertation',
          name: 'Doctoral_Dissertation_1975.pdf',
          type: 'document',
          priority: false,
          dateModified: '06/15/1975',
          size: '4.2 MB',
          content: `[BOUND MANUSCRIPT - HEAVILY ANNOTATED]

"SKY DEVILS: ARCHETYPICAL FIGURES IN NATIVE AMERICAN MYTHOLOGY"

A Dissertation Submitted to the Faculty of the Graduate School
of Indiana University, Bloomington
In Partial Fulfillment of the Requirements for the Degree
Doctor of Philosophy in the Department of Folklore

By
Karen Elise Barr
June 1975

STATUS: REJECTED

[REJECTION LETTER FOLDED INSIDE FRONT COVER]
"...committee finds the conclusions drawn in chapters 7-9 to be fundamentally unsound and unsupported by established anthropological evidence. The author's insistence that certain mythological figures represent 'genuine encounters' rather than cultural archetypes demonstrates a troubling departure from academic rigor..."

---

[ANNOTATIONS THROUGHOUT IN MULTIPLE HANDS]

Page 142 [underlined heavily]:
"The Mi-Go, or 'Sky Devils' of Appalachian indigenous accounts, bear striking similarities to entities described in Himalayan folklore. The consistency of physical descriptions across cultures separated by thousands of miles suggests either a common source or—more disturbingly—a common subject."

[MARGIN NOTE]: "She was RIGHT. See Pabodie expedition files."

Page 203 [circled]:
"Accounts from the Seneca nation describe beings that 'wore the faces of men but moved wrong' and could 'take a man apart and put him back different.'"

[MARGIN NOTE]: "Vermont. 1928. CONFIRMED."

Page 267 [entire paragraph highlighted]:
"The recurring motif of 'brain removal' in these accounts cannot be dismissed as mere sacrificial metaphor..."

[MARGIN NOTE]: "WHY WAS THIS REJECTED???"`
        },
        {
          id: 'tear-gas',
          name: 'Tear_Gas_Grenades.jpg',
          type: 'evidence',
          priority: false,
          dateModified: '04/12/2002',
          size: '456 KB',
          content: `[EVIDENCE PHOTOGRAPH]

Three cylindrical canisters, military grade.
Markings indicate: "CS GAS - RIOT CONTROL"
Manufacturer: Defense Technology Corp.
Lot Number: DT-4421-98

Condition: Unused, pins intact.
Expiration: 08/2005 (EXPIRED)

Note: Handle with caution. CS gas remains effective well past printed expiration.`
        },
        {
          id: 'iron-knife',
          name: 'Iron_Knife_Artifact.jpg',
          type: 'evidence',
          priority: false,
          dateModified: '03/30/1994',
          size: '1.1 MB',
          content: `[EVIDENCE PHOTOGRAPH]

Large iron knife, approximately 14 inches total length.
Blade: 9 inches, single-edged, heavy corrosion but edge still keen.
Handle: Bone (appears to be recent replacement, contrast with blade age).

Blade appears to be of considerable age. Style is consistent with Anglo-Saxon seax knives, circa 6th-8th century CE. How such an artifact came to North America is unknown.

Inscriptions: Blade bears markings on both sides. Script appears to be Ogham (ancient Celtic alphabet) but does not correspond to any known translation. Characters may be a cipher or non-standard usage.

[RUBBING OF INSCRIPTIONS ATTACHED]

᚛ᚈᚐᚄᚉᚐᚈᚆ ᚅᚐ ᚄᚒᚂ᚜
᚛ᚇᚑᚏᚉᚆᚐᚇᚐᚄ᚜

[HANDWRITTEN NOTE]:
"DO NOT ATTEMPT TO TRANSLATE.
DO NOT READ ALOUD.
- M.W. 3/94"`
        },
        {
          id: 'leather-pouch',
          name: 'Leather_Pouch_Contents.jpg',
          type: 'evidence',
          priority: false,
          dateModified: '08/15/2001',
          size: '567 KB',
          content: `[EVIDENCE PHOTOGRAPH]

Small leather drawstring pouch, approximately 4x3 inches.
Leather is old but well-maintained. No identifying marks.

Contents (photographed separately):
- Clump of dark hair, human, approximately 3 inches length
- Four teeth, human molars, adult
- Seven feathers, black, possibly crow or raven
- Small quantity of grave dirt (analysis confirmed)

Purpose unknown. Consistent with components described in various folk magic traditions.

[HANDWRITTEN NOTE]:
"Gris-gris? Mojo bag? Left on body at [REDACTED] scene.
DO NOT OPEN - DO NOT SEPARATE CONTENTS"`
        },
        {
          id: 'glass-sphere',
          name: 'Glass_Sphere_Anomalous.jpg',
          type: 'evidence',
          priority: false,
          dateModified: '07/22/1999',
          size: '234 KB',
          content: `[EVIDENCE PHOTOGRAPH]

Glass sphere, approximately 3 cm diameter.
Appears to be solid glass, no visible seams or bubbles.
Color: Clear with faint iridescence.

for those affected
!ROLL SANITY CHECK!

[HANDWRITTEN ADDENDUM]:
"Where is the case? Where is the CASE??"`
        }
      ]
    }
  ]
};

// Mission Briefing - Received at start of operation
export const missionBriefing: Container = {
  id: 'mission-briefing',
  type: 'inbox',
  name: 'OPERATION BRIEFING: LAST THINGS LAST',
  description: 'Secure briefing materials for assigned personnel. Read in full before proceeding.',
  createdAt: '2009-03-16',
  files: [
    {
      id: 'briefing-cover',
      name: 'BRIEFING_Cover_Sheet.pdf',
      type: 'document',
      priority: true,
      dateModified: '03/16/2009',
      size: '12 KB',
      content: `▲ DELTA GREEN ▲
EYES ONLY

OPERATION: LAST THINGS LAST
DATE: March 16, 2009
CLASSIFICATION: NEED TO KNOW

ASSIGNED PERSONNEL: [YOUR CELL DESIGNATION]

---

SITUATION:

One of ours is dead.

Clyde Raymond Baughman, age 47, was found deceased in his Los Angeles apartment on March 15, 2009. Cause of death: cardiac arrest. Local authorities have ruled it natural causes. No investigation is pending.

Baughman was a long-serving friendly with operational experience. His apartment and any other properties must be sanitized before civilian authorities, family members, or other parties discover materials that could compromise the group or its operations.

YOUR MISSION:

1. Proceed to Baughman's residence at 1847 N. Kingsley Dr, Unit 4, Los Angeles, CA 90027

2. Search the premises thoroughly for any materials related to the group or its operations

3. Secure or destroy all such materials per standing protocol

4. Report any anomalous items or situations immediately

TIME SENSITIVE: Baughman's sister (Susan Morales, Riverside CA) has been notified of his death and may attempt to access the apartment within 24-48 hours to collect personal effects.

COVER: You are representatives of Baughman's employer conducting a routine collection of work materials. Badge and documentation enclosed.

---

DO NOT ENGAGE LOCAL AUTHORITIES.
DO NOT CONTACT NEXT OF KIN.
DO NOT DEVIATE FROM MISSION PARAMETERS.

Good luck.

- A.`
    },
    {
      id: 'personnel-file',
      name: 'PERSONNEL_Baughman_Clyde_R.pdf',
      type: 'document',
      priority: true,
      dateModified: '03/16/2009',
      size: '34 KB',
      content: `▲ PERSONNEL FILE ▲
RESTRICTED

---

NAME: Baughman, Clyde Raymond
STATUS: DECEASED (3/15/2009)

D.o.B.: 5/15/1961
D.o.D.: 3/15/2009
CAUSE: Cardiac arrest (natural causes)

---

FAMILY:
- Wife: Marlene Teresa Baughman (née Hoffman)
  Status: DECEASED (10/2007) - hiking accident, body not recovered
  
- Sister: Susan Elaine Morales (née Baughman)
  Status: Living, Riverside CA
  Note: NOT READ IN. Standard cover applies.

---

EMPLOYMENT (COVER):
Los Angeles County Department of Public Works
Position: Facilities Maintenance Supervisor
Dates: 3/15/1994 – 3/15/2009
Clearance: Standard county employee (Level 2 facility access)

---

ASSOCIATION WITH GROUP:
- Recruited: 1994 (Operation PALE HORSE)
- Status: Active operative 1994-2006, Friendly 2006-2009
- Operations: 11+ confirmed field operations
- Specialty: Facilities access, evidence disposal, site sanitation
- Handler: [REDACTED]

---

OPERATIONAL HISTORY (PARTIAL):

1994 - PALE HORSE (Recruitment operation, Los Angeles)
1995 - [REDACTED]
1996 - [REDACTED]
1998 - SUMMIT RIDGE (Denver, CO) - Partner M. Wells KIA
1999 - [REDACTED]
2001 - [REDACTED]
2002 - BOOK RETURN (California) - Civilian contact, item not recovered
2004 - [REDACTED]
2006 - Status changed to FRIENDLY (operative request)

---

NOTES:
- Requested reduced status following wife's death in 2007
- Declined psychological evaluation (3 occasions)
- Last contact: 2/28/2009 - routine check-in, no concerns noted
- No indication of compromise or instability reported

---

FILE UPDATED: 3/16/2009`
    },
    {
      id: 'cover-credentials',
      name: 'COVER_Documentation.pdf',
      type: 'document',
      priority: false,
      dateModified: '03/16/2009',
      size: '18 KB',
      content: `COVER DOCUMENTATION PACKAGE

---

ENCLOSED:

1. Los Angeles County Department of Public Works identification badges (temporary)
   - Valid for 72 hours from issue
   - Will pass cursory inspection only
   - DO NOT present to actual county employees

2. Letter of Authorization
   - Signed by "Deputy Director of Facilities"
   - Authorizes collection of "county equipment and work materials" from employee residence
   - Present to building manager if challenged

3. Business cards
   - Generic "Administrative Services" 
   - Phone number routes to answering service

---

COVER STORY:

You are administrative personnel from LA County Public Works, sent to collect any county-owned equipment (laptop, files, keys, badges) from the residence of deceased employee Clyde Baughman.

If questioned:
- Express condolences, remain professional
- Explain this is "standard procedure" when an employee passes
- You are "just doing your job"
- Decline to discuss details of employment or cause of death

If pressed:
- Provide business card
- Suggest they contact "the main office" with questions
- Disengage and proceed with mission

---

DO NOT:
- Claim to be law enforcement
- Claim to be federal agents
- Provide real names or contact information
- Engage in extended conversation with neighbors or building staff`
    },
    {
      id: 'map-location',
      name: 'LOCATION_Map_Apartment.pdf',
      type: 'document',
      priority: false,
      dateModified: '03/16/2009',
      size: '245 KB',
      content: `[MAP PRINTOUT - GOOGLE MAPS 2009]

TARGET LOCATION:
1847 N. Kingsley Dr #4
Los Angeles, CA 90027

NEIGHBORHOOD: East Hollywood
Cross streets: Kingsley Dr & Franklin Ave

BUILDING DESCRIPTION:
- 2-story apartment building, circa 1960s
- 8 units total
- Rear parking lot (no assigned spaces)
- Unit 4 is second floor, rear of building
- External stairwell access

ENTRY:
- Main entrance: Street level, no security
- Unit door: Standard residential lock
- Building manager: Maria Santos, Unit 1
  (Avoid if possible)

PARKING:
- Street parking on Kingsley
- Visitor spaces in rear lot

NEAREST CROSS STREETS:
- Franklin Ave (2 blocks north)
- Hollywood Blvd (4 blocks north)

---

Note: Building is in working-class neighborhood. Moderate foot traffic. Recommend daytime entry to avoid suspicion.`
    },
  ]
};

// All available containers
export const containers: Container[] = [
  missionBriefing,
  clydeFilingCabinet,
  cabinFootlocker
];

export function getContainerById(id: string): Container | undefined {
  return containers.find(c => c.id === id);
}

export function flattenFiles(files: FileItem[]): FileItem[] {
  const result: FileItem[] = [];
  
  function traverse(items: FileItem[]) {
    for (const item of items) {
      result.push(item);
      if (item.children) {
        traverse(item.children);
      }
    }
  }
  
  traverse(files);
  return result;
}

export function getPriorityFiles(files: FileItem[]): FileItem[] {
  return flattenFiles(files).filter(f => f.priority);
}
