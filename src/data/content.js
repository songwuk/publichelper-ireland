export const lastVerified = "26 May 2026";
export const heroImage =
  "https://commons.wikimedia.org/wiki/Special:FilePath/Government%20Buildings%2C%20Dublin%2C%20Ireland.jpg?width=1600";

export const agencies = [
  {
    id: "dsp",
    name: "Department of Social Protection",
    short: "Social Protection",
    domain: "gov.ie",
    url: "https://www.gov.ie/en/organisation/department-of-social-protection/",
    phone: "0818 405 060",
    summary:
      "PPS numbers, Public Services Cards, MyGovID identity services, welfare payments, pensions and Intreo offices.",
    tags: ["Identity", "Benefits", "Pensions"],
  },
  {
    id: "revenue",
    name: "Revenue Commissioners",
    short: "Revenue",
    domain: "revenue.ie",
    url: "https://www.revenue.ie/",
    phone: "01 738 3636",
    summary:
      "Income tax, PAYE, myAccount, tax credits, Local Property Tax, customs and business tax registration.",
    tags: ["Taxes", "Work", "Business"],
  },
  {
    id: "hse",
    name: "Health Service Executive",
    short: "HSE",
    domain: "hse.ie",
    url: "https://www2.hse.ie/",
    phone: "1800 700 700",
    summary:
      "Public healthcare information, medical cards, GP visit cards, maternity care, vaccines and local services.",
    tags: ["Healthcare", "Family"],
  },
  {
    id: "immigration",
    name: "Immigration Service Delivery",
    short: "Immigration",
    domain: "irishimmigration.ie",
    url: "https://www.irishimmigration.ie/",
    phone: "Online portal",
    summary:
      "Irish residence permission, IRP registration and renewals, visas, citizenship and permission changes.",
    tags: ["Immigration", "Travel"],
  },
  {
    id: "dfa",
    name: "Department of Foreign Affairs",
    short: "Passport Service",
    domain: "ireland.ie",
    url: "https://www.ireland.ie/en/dfa/passports/",
    phone: "01 671 1633",
    summary:
      "Passport Online, passport tracking, urgent renewal appointments, travel advice and consular services.",
    tags: ["Passport", "Travel"],
  },
  {
    id: "rsa",
    name: "RSA and NDLS",
    short: "Driving services",
    domain: "rsa.ie / ndls.ie",
    url: "https://www.rsa.ie/services",
    phone: "Online services",
    summary:
      "Learner permits, driver testing, driving licences, licence exchange, road safety and vehicle services.",
    tags: ["Driving", "Transport"],
  },
  {
    id: "citizens",
    name: "Citizens Information",
    short: "Citizens Information",
    domain: "citizensinformation.ie",
    url: "https://www.citizensinformation.ie/",
    phone: "0818 07 4000",
    summary:
      "Plain-language explanations of public services, rights, entitlements and local information centres.",
    tags: ["Advice", "Rights"],
  },
  {
    id: "education",
    name: "Education and Student Support",
    short: "Education",
    domain: "gov.ie / susi.ie",
    url: "https://www.gov.ie/en/organisation/department-of-education/",
    phone: "Online services",
    summary:
      "Schools, student grants, higher education applications, recognition of qualifications and school transport.",
    tags: ["Education", "Students"],
  },
  {
    id: "local",
    name: "Local Authorities",
    short: "Local services",
    domain: "localgov.ie",
    url: "https://www.localgov.ie/",
    phone: "Local council",
    summary:
      "Housing supports, libraries, parking, planning, waste services, voter registration and local community supports.",
    tags: ["Housing", "Community"],
  },
];

export const categories = [
  "All",
  "Identity",
  "Taxes",
  "Family",
  "Healthcare",
  "Employment",
  "Education",
  "Transport",
  "Travel & Immigration",
  "Housing",
  "Business",
  "Community",
];

export const services = [
  {
    title: "Get a Personal Public Service Number",
    description:
      "Apply for a PPS number with identity evidence, address evidence and a reason you need the number.",
    category: "Identity",
    agency: "dsp",
    url: "https://www.gov.ie/en/department-of-social-protection/services/get-a-personal-public-service-pps-number/",
    flags: ["MyGovID", "Online", "EN"],
    highlight: true,
  },
  {
    title: "Create or verify MyGovID",
    description:
      "Use MyGovID as a secure login for MyWelfare, Revenue and other Irish public services.",
    category: "Identity",
    agency: "dsp",
    url: "https://www.gov.ie/en/service/b6ecfd-sign-up-for-mygovid/",
    flags: ["Online", "EN"],
    highlight: true,
  },
  {
    title: "Get a Public Services Card",
    description:
      "Apply through the MyGovID app if eligible, or book a PSC appointment at a local centre.",
    category: "Identity",
    agency: "dsp",
    url: "https://www.gov.ie/en/department-of-social-protection/services/how-to-get-a-public-services-card-psc/",
    flags: ["MyGovID", "Online", "EN"],
    highlight: true,
  },
  {
    title: "MyWelfare dashboard",
    description:
      "Apply for welfare payments, upload documents, track claims and read secure messages.",
    category: "Employment",
    agency: "dsp",
    url: "https://www.gov.ie/en/department-of-social-protection/services/mywelfare/",
    flags: ["MyGovID", "Online", "EN"],
  },
  {
    title: "Register for Revenue myAccount",
    description:
      "Manage PAYE, tax credits, health expenses, Local Property Tax and tax returns online.",
    category: "Taxes",
    agency: "revenue",
    url: "https://www.revenue.ie/en/online-services/services/register-for-an-online-service/register-for-myaccount.aspx",
    flags: ["MyGovID", "Online", "EN"],
    highlight: true,
  },
  {
    title: "Register a new job or pension",
    description:
      "Use Revenue Jobs and Pensions to avoid emergency tax when starting employment.",
    category: "Employment",
    agency: "revenue",
    url: "https://www.revenue.ie/en/jobs-and-pensions/starting-your-first-job/index.aspx",
    flags: ["Online", "EN"],
  },
  {
    title: "Review tax credits and reliefs",
    description:
      "Claim credits, update your circumstances and check your Tax Credit Certificate.",
    category: "Taxes",
    agency: "revenue",
    url: "https://www.revenue.ie/en/jobs-and-pensions/tax-credits/index.aspx",
    flags: ["Online", "EN"],
  },
  {
    title: "Claim the Rent Tax Credit",
    description:
      "Claim rent relief through Revenue where you meet the qualifying conditions.",
    category: "Housing",
    agency: "revenue",
    url: "https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/land-and-property/rent-credit/index.aspx",
    flags: ["Online", "EN"],
  },
  {
    title: "Apply for a Medical Card or GP Visit Card",
    description:
      "Apply online for help with GP and healthcare costs; HSE assessment guidelines are effective from April 2026.",
    category: "Healthcare",
    agency: "hse",
    url: "https://www2.hse.ie/services/schemes-allowances/medical-cards/applying/apply/",
    flags: ["Online", "EN"],
    highlight: true,
  },
  {
    title: "Find HSE services near you",
    description:
      "Search for local health centres, primary care, vaccination, screening and support services.",
    category: "Healthcare",
    agency: "hse",
    url: "https://www2.hse.ie/services/",
    flags: ["Online", "EN"],
  },
  {
    title: "Register an immigration permission",
    description:
      "Non-EU, non-UK and non-Swiss nationals staying more than 90 days generally need to register permission.",
    category: "Travel & Immigration",
    agency: "immigration",
    url: "https://www.irishimmigration.ie/registering-your-immigration-permission/",
    flags: ["Online", "EN"],
    highlight: true,
  },
  {
    title: "Renew an Irish Residence Permit",
    description:
      "Submit IRP renewal applications online and check current processing guidance.",
    category: "Travel & Immigration",
    agency: "immigration",
    url: "https://www.irishimmigration.ie/registering-your-immigration-permission/how-to-renew-your-current-permission/renewing-your-registration-permission-if-you-live-in-the-republic-of-ireland/",
    flags: ["Online", "EN"],
  },
  {
    title: "Apply for an Irish passport online",
    description:
      "Passport Online supports Irish citizens applying from Ireland and many overseas locations.",
    category: "Travel & Immigration",
    agency: "dfa",
    url: "https://www.gov.ie/en/department-of-foreign-affairs/services/apply-for-a-passport-online/",
    flags: ["Online", "EN"],
    highlight: true,
  },
  {
    title: "Track a passport application",
    description:
      "Use your 11-digit application number to check passport application progress.",
    category: "Travel & Immigration",
    agency: "dfa",
    url: "https://www.ireland.ie/en/dfa/passports/tracking/",
    flags: ["Online", "EN"],
  },
  {
    title: "Apply for a first learner permit",
    description:
      "Apply online after passing the driver theory test; PSC and verified MyGovID are needed online.",
    category: "Transport",
    agency: "rsa",
    url: "https://www.rsa.ie/services/learner-drivers/learner-permit/apply-for-your-first-permit",
    flags: ["MyGovID", "Online", "EN"],
  },
  {
    title: "Apply for or renew a driving licence",
    description:
      "Use NDLS Online to apply, renew, replace or exchange a learner permit or driving licence.",
    category: "Transport",
    agency: "rsa",
    url: "https://www.rsa.ie/services/licensed-drivers/apply-online",
    flags: ["MyGovID", "Online", "EN"],
  },
  {
    title: "Book a driving test",
    description:
      "Apply online for the RSA driving test using your driver number, PPSN and payment card.",
    category: "Transport",
    agency: "rsa",
    url: "https://www.rsa.ie/services/learner-drivers/the-driving-test/how-to-apply",
    flags: ["Online", "EN"],
  },
  {
    title: "Pay motor tax",
    description:
      "Renew motor tax online for a car, motorcycle or commercial vehicle.",
    category: "Transport",
    agency: "local",
    url: "https://www.motortax.ie/",
    flags: ["Online", "EN"],
  },
  {
    title: "Register a birth in Ireland",
    description:
      "Register a birth within three months; online registration uses verified MyGovID where eligible.",
    category: "Family",
    agency: "dsp",
    url: "https://www.gov.ie/en/department-of-social-protection/services/register-a-birth-in-ireland/",
    flags: ["MyGovID", "Online", "EN"],
    highlight: true,
  },
  {
    title: "Apply for Child Benefit",
    description:
      "Monthly payment for qualifying children. Current standard rate is EUR 140 per child.",
    category: "Family",
    agency: "dsp",
    url: "https://www.gov.ie/en/service/f14140-child-benefit/",
    flags: ["MyWelfare", "Online", "EN"],
    highlight: true,
  },
  {
    title: "Apply for Maternity Benefit",
    description:
      "Current standard rate is EUR 299 a week for 26 weeks where PRSI conditions are met.",
    category: "Family",
    agency: "dsp",
    url: "https://www.gov.ie/en/department-of-social-protection/services/maternity-benefit/",
    flags: ["MyWelfare", "Online", "EN"],
  },
  {
    title: "Apply for Parent's Benefit",
    description:
      "Current rate is EUR 299 a week for nine weeks for each eligible parent.",
    category: "Family",
    agency: "dsp",
    url: "https://www.gov.ie/en/department-of-social-protection/services/parents-benefit/",
    flags: ["MyWelfare", "Online", "EN"],
  },
  {
    title: "Apply for the National Childcare Scheme",
    description:
      "Get subsidies toward childcare costs from registered childcare providers.",
    category: "Family",
    agency: "education",
    url: "https://www.ncs.gov.ie/",
    flags: ["Online", "EN"],
  },
  {
    title: "Apply for Jobseeker's Pay-Related Benefit",
    description:
      "For people fully unemployed from 31 March 2025 onward who have enough PRSI contributions.",
    category: "Employment",
    agency: "dsp",
    url: "https://www.gov.ie/en/department-of-social-protection/services/jobseekers-pay-related-benefit/",
    flags: ["MyWelfare", "Online", "EN"],
    highlight: true,
  },
  {
    title: "Apply for Jobseeker's Allowance",
    description:
      "Means-tested support. The full personal weekly payment for people 25+ with no means is EUR 254.",
    category: "Employment",
    agency: "dsp",
    url: "https://www.gov.ie/en/department-of-social-protection/services/jobseekers-allowance/",
    flags: ["MyWelfare", "Online", "EN"],
  },
  {
    title: "Find an Intreo centre",
    description:
      "Find your local Intreo centre for jobseeker support, appointments and employment services.",
    category: "Employment",
    agency: "dsp",
    url: "https://www.gov.ie/en/directory/category/e1f4b5-intreo-offices/",
    flags: ["Online", "EN"],
  },
  {
    title: "Search JobsIreland",
    description:
      "Search jobs, create a profile and access public employment service supports.",
    category: "Employment",
    agency: "dsp",
    url: "https://www.jobsireland.ie/",
    flags: ["Online", "EN"],
  },
  {
    title: "Working Family Payment",
    description:
      "Weekly tax-free support for employees with children, based on family income and size.",
    category: "Family",
    agency: "dsp",
    url: "https://www.gov.ie/en/department-of-social-protection/services/working-family-payment-wfp/",
    flags: ["MyWelfare", "Online", "EN"],
  },
  {
    title: "Apply for a SUSI student grant",
    description:
      "Apply for student maintenance and fee grants for approved further or higher education courses.",
    category: "Education",
    agency: "education",
    url: "https://www.susi.ie/",
    flags: ["Online", "EN"],
  },
  {
    title: "Apply through CAO",
    description:
      "Apply for undergraduate courses in Irish higher education institutions.",
    category: "Education",
    agency: "education",
    url: "https://www.cao.ie/",
    flags: ["Online", "EN"],
  },
  {
    title: "State Pension Contributory",
    description:
      "Weekly PRSI-based pension available from age 66. Current maximum personal rate is EUR 299.30.",
    category: "Employment",
    agency: "dsp",
    url: "https://www.gov.ie/en/department-of-social-protection/services/state-pension-contributory/",
    flags: ["MyWelfare", "Online", "EN"],
  },
  {
    title: "Free Travel Scheme",
    description:
      "From 1 March 2026, Free Travel needs a valid in-date Free Travel Public Services Card.",
    category: "Transport",
    agency: "dsp",
    url: "https://www.gov.ie/en/service/9bba61-free-travel-scheme/",
    flags: ["PSC", "EN"],
  },
  {
    title: "Apply for Housing Assistance Payment",
    description:
      "Apply through your local authority for rent support where you qualify for social housing support.",
    category: "Housing",
    agency: "local",
    url: "https://www.gov.ie/en/department-of-housing-local-government-and-heritage/services/housing-assistance-payment/",
    flags: ["Local authority", "EN"],
  },
  {
    title: "Register to vote",
    description:
      "Check or update your electoral registration details online.",
    category: "Community",
    agency: "local",
    url: "https://www.checktheregister.ie/",
    flags: ["Online", "EN"],
  },
  {
    title: "Find a Citizens Information Centre",
    description:
      "Get free information, advice and advocacy from a local centre or phone service.",
    category: "Community",
    agency: "citizens",
    url: "https://centres.citizensinformation.ie/",
    flags: ["EN"],
  },
  {
    title: "Start a company",
    description:
      "Register an Irish company through the Companies Registration Office.",
    category: "Business",
    agency: "revenue",
    url: "https://www.cro.ie/",
    flags: ["Online", "EN"],
  },
  {
    title: "Register business taxes",
    description:
      "Register for income tax, VAT, employer PAYE or corporation tax through Revenue services.",
    category: "Business",
    agency: "revenue",
    url: "https://www.revenue.ie/en/starting-a-business/registering-for-tax/index.aspx",
    flags: ["Online", "EN"],
  },
  {
    title: "Check employment rights",
    description:
      "Use Workplace Relations Commission guidance on contracts, pay, leave and workplace rights.",
    category: "Employment",
    agency: "citizens",
    url: "https://www.workplacerelations.ie/",
    flags: ["EN"],
  },
];

export const guides = [
  {
    id: "moving-to-ireland",
    title: "Moving to Ireland",
    category: "Moving & Registration",
    intro:
      "Core setup for newcomers: immigration permission, PPS number, MyGovID, tax, healthcare and local support.",
    time: "2-8 weeks for basic setup",
    steps: [
      {
        title: "Check visa or residence permission",
        agency: "immigration",
        important: true,
        service: "https://www.irishimmigration.ie/registering-your-immigration-permission/",
        detail:
          "If you are from outside the EU, UK or Switzerland and come to work, study, live or join family for more than 90 days, check whether you must register an immigration permission.",
      },
      {
        title: "Prepare address and identity documents",
        agency: "dsp",
        important: true,
        detail:
          "Most setup steps need proof of identity and proof of address. For PPSN applications, address evidence normally must show your name and be recent.",
      },
      {
        title: "Apply for a PPS number",
        agency: "dsp",
        important: true,
        service:
          "https://www.gov.ie/en/department-of-social-protection/services/get-a-personal-public-service-pps-number/",
        detail:
          "Apply online through MyWelfare with identity evidence, address evidence and a valid reason such as employment, tax, driving licence exchange or accessing a public service.",
      },
      {
        title: "Create MyGovID and arrange a Public Services Card",
        agency: "dsp",
        important: true,
        service:
          "https://www.gov.ie/en/department-of-social-protection/services/how-to-get-a-public-services-card-psc/",
        detail:
          "A basic MyGovID needs your name and email. A verified account usually depends on SAFE identity verification and is needed for higher-value services.",
      },
      {
        title: "Set up Revenue myAccount",
        agency: "revenue",
        service:
          "https://www.revenue.ie/en/online-services/services/register-for-an-online-service/register-for-myaccount.aspx",
        detail:
          "Use myAccount or verified MyGovID to manage PAYE, register a job, review tax credits and claim reliefs.",
      },
      {
        title: "Sort healthcare access",
        agency: "hse",
        service: "https://www2.hse.ie/services/schemes-allowances/medical-cards/applying/apply/",
        detail:
          "Find local HSE services, look for a GP, and check whether you qualify for a Medical Card or GP Visit Card.",
      },
      {
        title: "Review driving, transport and local services",
        agency: "rsa",
        service: "https://www.rsa.ie/services/licensed-drivers/apply-online",
        detail:
          "If you drive, check licence exchange or Irish learner-permit rules. For day-to-day services, your local authority and Citizens Information are useful starting points.",
      },
    ],
  },
  {
    id: "having-a-child",
    title: "Having a Child",
    category: "Family & Children",
    intro:
      "Pregnancy care, maternity and parent payments, birth registration, Child Benefit and childcare supports.",
    time: "Pregnancy through first two years",
    steps: [
      {
        title: "Access maternity care",
        agency: "hse",
        important: true,
        service: "https://www2.hse.ie/pregnancy-birth/",
        detail:
          "Use HSE pregnancy and birth information to plan public maternity care, appointments, scans and supports.",
      },
      {
        title: "Apply for Maternity Benefit if eligible",
        agency: "dsp",
        service:
          "https://www.gov.ie/en/department-of-social-protection/services/maternity-benefit/",
        detail:
          "The current standard rate is EUR 299 a week for 26 weeks where employment or self-employment PRSI conditions are met.",
      },
      {
        title: "Register the birth within three months",
        agency: "dsp",
        important: true,
        service:
          "https://www.gov.ie/en/department-of-social-protection/services/register-a-birth-in-ireland/",
        detail:
          "Birth registration is a legal requirement. Online registration uses verified MyGovID where eligible and needs the birth notification ID sent to the mother.",
      },
      {
        title: "Claim Child Benefit",
        agency: "dsp",
        service: "https://www.gov.ie/en/service/f14140-child-benefit/",
        detail:
          "The standard payment is EUR 140 per month per child. A Newborn Baby Grant of EUR 280 applies for children born on or after 1 December 2024.",
      },
      {
        title: "Plan Parent's Benefit and parent leave",
        agency: "dsp",
        service:
          "https://www.gov.ie/en/department-of-social-protection/services/parents-benefit/",
        detail:
          "Parent's Benefit is currently EUR 299 a week for nine weeks for each eligible parent and can be taken within the first two years.",
      },
      {
        title: "Check childcare subsidies",
        agency: "education",
        service: "https://www.ncs.gov.ie/",
        detail:
          "The National Childcare Scheme provides subsidies toward registered childcare.",
      },
      {
        title: "Arrange child documents and health checks",
        agency: "hse",
        service: "https://www.ireland.ie/en/dfa/passports/",
        detail:
          "After birth registration, plan GP registration, public health nurse visits, immunisations, PPSN records and passport needs.",
      },
    ],
  },
  {
    id: "starting-work",
    title: "Starting a New Job",
    category: "Work & Employment",
    intro:
      "Avoid emergency tax, set up Revenue, understand payslips and know your employment rights.",
    time: "1-2 weeks",
    steps: [
      {
        title: "Make sure you have a PPS number",
        agency: "dsp",
        important: true,
        service:
          "https://www.gov.ie/en/department-of-social-protection/services/get-a-personal-public-service-pps-number/",
        detail:
          "You need a PPS number to pay tax correctly and access many public services.",
      },
      {
        title: "Check employment permission if needed",
        agency: "immigration",
        important: true,
        service: "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/",
        detail:
          "Non-EEA workers may need an employment permit or other immigration permission before starting work.",
      },
      {
        title: "Register your job with Revenue",
        agency: "revenue",
        important: true,
        service: "https://www.revenue.ie/en/jobs-and-pensions/starting-your-first-job/index.aspx",
        detail:
          "Use Revenue Jobs and Pensions through myAccount so your employer receives the right tax details.",
      },
      {
        title: "Review tax credits",
        agency: "revenue",
        service: "https://www.revenue.ie/en/jobs-and-pensions/tax-credits/index.aspx",
        detail:
          "For 2026, the standard single personal tax credit and employee tax credit are each EUR 2,000. Check your own Tax Credit Certificate in Revenue.",
      },
      {
        title: "Check your payslip",
        agency: "revenue",
        detail:
          "Confirm gross pay, PAYE income tax, USC, PRSI, pension deductions and any benefit-in-kind entries.",
      },
      {
        title: "Know your workplace rights",
        agency: "citizens",
        service: "https://www.workplacerelations.ie/",
        detail:
          "Check minimum terms, written statement requirements, annual leave, public holidays, sick leave and pay rights.",
      },
      {
        title: "Keep MyGovID and myAccount updated",
        agency: "dsp",
        service: "https://www.mygovid.ie/",
        detail:
          "Keep your contact details current and use secure official channels for tax and welfare messages.",
      },
    ],
  },
  {
    id: "unemployment",
    title: "Losing Your Job",
    category: "Work & Employment",
    intro:
      "Work out which jobseeker payment applies, keep Revenue updated and connect with Intreo supports.",
    time: "First week is important",
    steps: [
      {
        title: "Apply within six weeks if pay-related benefit applies",
        agency: "dsp",
        important: true,
        service:
          "https://www.gov.ie/en/department-of-social-protection/services/jobseekers-pay-related-benefit/",
        detail:
          "Jobseeker's Pay-Related Benefit applies to fully unemployed people whose first day of unemployment is on or after 31 March 2025 and who have enough PRSI.",
      },
      {
        title: "Use the right jobseeker scheme",
        agency: "dsp",
        service: "https://www.gov.ie/en/department-of-social-protection/services/jobseekers-benefit/",
        detail:
          "Jobseeker's Benefit remains relevant for part-time, casual, short-time and seasonal workers. Jobseeker's Allowance is means-tested.",
      },
      {
        title: "Verify identity for online claims",
        agency: "dsp",
        service: "https://www.mygovid.ie/",
        detail:
          "Many jobseeker claims need SAFE Level 2 identity verification. A verified MyGovID gives access to online applications.",
      },
      {
        title: "Engage with Intreo",
        agency: "dsp",
        service: "https://www.gov.ie/en/directory/category/e1f4b5-intreo-offices/",
        detail:
          "Intreo can connect you with employers, CV support, training and activation services.",
      },
      {
        title: "Update Revenue if your income changes",
        agency: "revenue",
        service: "https://www.revenue.ie/en/jobs-and-pensions/changing-jobs/index.aspx",
        detail:
          "Check your tax record and tax credits after employment ends or when you start a new job.",
      },
      {
        title: "Check rent, family and emergency supports",
        agency: "dsp",
        service: "https://www.gov.ie/en/department-of-social-protection/services/additional-needs-payment/",
        detail:
          "Depending on your situation, check Additional Needs Payment, Working Family Payment changes, HAP or local authority supports.",
      },
    ],
  },
  {
    id: "driving-in-ireland",
    title: "Driving in Ireland",
    category: "Housing & Transport",
    intro:
      "Driving licence exchange, learner permit, training, driving test, insurance and vehicle obligations.",
    time: "Several months for new drivers",
    steps: [
      {
        title: "Check whether your foreign licence can be exchanged",
        agency: "rsa",
        important: true,
        service: "https://www.ndls.ie/licensed-driver/exchange-my-foreign-driving-licence.html",
        detail:
          "Some foreign licences can be exchanged. Others require the Irish learner-permit, training and test route once resident.",
      },
      {
        title: "Pass the driver theory test",
        agency: "rsa",
        service: "https://theorytest.ie/",
        detail:
          "For a first learner permit, you must pass the driver theory test in the relevant category.",
      },
      {
        title: "Apply for your learner permit",
        agency: "rsa",
        service: "https://www.rsa.ie/services/learner-drivers/learner-permit/apply-for-your-first-permit",
        detail:
          "Online learner-permit applications need a Public Services Card and verified MyGovID. The current first-permit fee shown by RSA is EUR 45.",
      },
      {
        title: "Complete mandatory training",
        agency: "rsa",
        detail:
          "Car learners normally complete Essential Driver Training and first-time learner permit holders in relevant categories must wait six months before a test.",
      },
      {
        title: "Book and prepare for the driving test",
        agency: "rsa",
        service: "https://www.rsa.ie/services/learner-drivers/the-driving-test/how-to-apply",
        detail:
          "RSA requires your learner permit details, PPSN and card payment. From 9 March 2026, drivers must present valid motor insurance evidence for the test vehicle.",
      },
      {
        title: "Apply for your first full licence",
        agency: "rsa",
        service: "https://www.rsa.ie/services/licensed-drivers/driving-licence/apply-for-your-first-licence",
        detail:
          "After passing the test, apply online or at NDLS. RSA lists EUR 65 as the current fee for a new 10-year licence.",
      },
    ],
  },
  {
    id: "retiring",
    title: "Retiring in Ireland",
    category: "Retirement & Pension",
    intro:
      "State pension, PRSI records, free travel, health supports and tax housekeeping.",
    time: "Start 3-6 months before retirement",
    steps: [
      {
        title: "Check State Pension Contributory entitlement",
        agency: "dsp",
        important: true,
        service:
          "https://www.gov.ie/en/department-of-social-protection/services/state-pension-contributory/",
        detail:
          "State Pension Contributory is PRSI-based and available from age 66. The current maximum personal weekly rate is EUR 299.30.",
      },
      {
        title: "Consider flexible pension timing",
        agency: "dsp",
        detail:
          "People born on or after 1 January 1958 can choose a State Pension Contributory start date between age 66 and 70.",
      },
      {
        title: "Review PRSI contributions and overseas records",
        agency: "dsp",
        detail:
          "If you worked abroad, check whether social insurance records can help your Irish pension assessment.",
      },
      {
        title: "Apply for Free Travel or renew your Free Travel PSC",
        agency: "dsp",
        service: "https://www.gov.ie/en/service/9bba61-free-travel-scheme/",
        detail:
          "From 1 March 2026, a valid in-date Free Travel Public Services Card is required. Paper passes are no longer valid.",
      },
      {
        title: "Check health and household supports",
        agency: "hse",
        service: "https://www2.hse.ie/services/schemes-allowances/medical-cards/",
        detail:
          "Check Medical Card, GP Visit Card, long-term illness and local HSE supports based on your circumstances.",
      },
      {
        title: "Update Revenue and pension providers",
        agency: "revenue",
        service: "https://www.revenue.ie/en/jobs-and-pensions/pension/index.aspx",
        detail:
          "Review tax credits, occupational pension details, health expenses and any rental or investment income.",
      },
    ],
  },
];

export const guideDocumentGuides = {
  "moving-to-ireland": {
    estimate: {
      en: "Allow 2-8 weeks for setup. A first immigration registration visit should take no longer than 30 minutes once you have an appointment; PSC cards are posted within 7-10 working days after an approved online application.",
      zh: "建议预留 2-8 周完成基础设置。首次移民登记在已有预约后现场办理通常不超过 30 分钟；在线 PSC 申请获批后，卡片通常 7-10 个工作日邮寄。",
      pt: "Reserve 2-8 semanas para a configuração inicial. A primeira visita de registo de imigração não deve demorar mais de 30 minutos quando já tiver marcação; o PSC é enviado em 7-10 dias úteis após aprovação online.",
      it: "Prevedi 2-8 settimane per la configurazione iniziale. La prima registrazione immigrazione, con appuntamento, non dovrebbe durare più di 30 minuti; la PSC arriva per posta in 7-10 giorni lavorativi dopo l'approvazione online.",
    },
    note: {
      en: "Start by collecting identity, address and immigration evidence before applying for PPSN, PSC/MyGovID, Revenue and healthcare services.",
      zh: "先整理身份证明、住址证明和移民许可材料，再申请 PPSN、PSC/MyGovID、Revenue 和医疗相关服务。",
      pt: "Comece por reunir prova de identidade, morada e imigração antes de pedir PPSN, PSC/MyGovID, Revenue e serviços de saúde.",
      it: "Prima raccogli prove di identità, indirizzo e permesso di immigrazione, poi richiedi PPSN, PSC/MyGovID, Revenue e servizi sanitari.",
    },
    items: [
      {
        label: {
          en: "Identity document",
          zh: "身份证明",
          pt: "Documento de identidade",
          it: "Documento di identità",
        },
        detail: {
          en: "Passport, national identity card or the official identity document accepted for your status.",
          zh: "护照、国家身份证，或符合你身份类别的官方身份证明文件。",
          pt: "Passaporte, cartão de cidadão/identidade nacional ou documento oficial aceite para a sua situação.",
          it: "Passaporto, carta d'identità nazionale o documento ufficiale accettato per il tuo status.",
        },
      },
      {
        label: {
          en: "Proof of address",
          zh: "住址证明",
          pt: "Comprovativo de morada",
          it: "Prova di indirizzo",
        },
        detail: {
          en: "For PPSN, use a document showing your name and address and normally dated within the last 3 months.",
          zh: "申请 PPSN 时，通常需要显示姓名和地址、且一般为近 3 个月内的文件。",
          pt: "Para o PPSN, use um documento com o seu nome e morada, normalmente dos últimos 3 meses.",
          it: "Per il PPSN usa un documento con nome e indirizzo, normalmente emesso negli ultimi 3 mesi.",
        },
      },
      {
        label: {
          en: "Reason for PPSN",
          zh: "申请 PPSN 的理由",
          pt: "Motivo para pedir PPSN",
          it: "Motivo per richiedere il PPSN",
        },
        detail: {
          en: "Employment, driving licence exchange, social welfare, birth registration, school or another public service reason.",
          zh: "例如就业、换驾照、社会福利、出生登记、入学或其他公共服务用途。",
          pt: "Emprego, troca de carta de condução, apoio social, registo de nascimento, escola ou outro serviço público.",
          it: "Lavoro, conversione patente, welfare, registrazione nascita, scuola o altro servizio pubblico.",
        },
      },
      {
        label: {
          en: "Immigration permission documents",
          zh: "移民许可材料",
          pt: "Documentos de permissão de imigração",
          it: "Documenti del permesso di immigrazione",
        },
        detail: {
          en: "Passport, entry visa or landing stamp where relevant, proof of address and stamp-specific evidence.",
          zh: "护照、适用的入境签证或入境章、住址证明，以及对应 Stamp 类别所需材料。",
          pt: "Passaporte, visto de entrada ou carimbo de chegada quando aplicável, prova de morada e documentos da categoria de stamp.",
          it: "Passaporto, visto d'ingresso o timbro di arrivo se pertinente, prova di indirizzo e documenti specifici dello stamp.",
        },
      },
    ],
    sources: [
      {
        label: "PPS Number official requirements",
        url: "https://www.gov.ie/en/department-of-social-protection/services/get-a-personal-public-service-pps-number/",
      },
      {
        label: "Public Services Card official guidance",
        url: "https://www.gov.ie/en/department-of-social-protection/services/how-to-get-a-public-services-card-psc/",
      },
      {
        label: "Immigration first registration guidance",
        url: "https://www.irishimmigration.ie/registering-your-immigration-permission/how-to-register-your-immigration-permission-for-the-first-time/information-on-registering-your-immigration-permission-for-the-first-time/",
      },
    ],
  },
  "having-a-child": {
    estimate: {
      en: "Birth registration must be completed within 3 months. Child Benefit usually starts the month after birth once registered; qualifying online Maternity Benefit claims may be awarded in seconds, but apply 6 weeks before leave if employed or 12 weeks if self-employed.",
      zh: "出生登记必须在 3 个月内完成。登记后 Child Benefit 通常从出生后下一个月开始；符合条件的在线 Maternity Benefit 可快速自动审批，但雇员应提前 6 周申请，自雇者提前 12 周申请。",
      pt: "O nascimento deve ser registado em 3 meses. O Child Benefit normalmente começa no mês após o nascimento; pedidos online elegíveis de Maternity Benefit podem ser aprovados em segundos, mas candidate-se 6 semanas antes da licença se for empregado ou 12 semanas se for independente.",
      it: "La nascita deve essere registrata entro 3 mesi. Il Child Benefit di solito parte dal mese successivo alla nascita; le domande online idonee di Maternity Benefit possono essere approvate in pochi secondi, ma presenta domanda 6 settimane prima del congedo se dipendente o 12 se autonomo.",
    },
    note: {
      en: "Keep the birth notification ID, verified MyGovID details, parent PPSNs and benefit certificates together before starting family payments.",
      zh: "开始申请家庭相关福利前，请准备好出生通知 ID、已验证 MyGovID、父母 PPSN 和福利证明表。",
      pt: "Guarde o Birth Notification ID, MyGovID verificado, PPSN dos pais e certificados de benefícios antes de iniciar pedidos familiares.",
      it: "Tieni pronti Birth Notification ID, MyGovID verificato, PPSN dei genitori e certificati per i benefici prima di iniziare le richieste familiari.",
    },
    items: [
      {
        label: {
          en: "Birth Notification ID",
          zh: "出生通知 ID",
          pt: "Birth Notification ID",
          it: "Birth Notification ID",
        },
        detail: {
          en: "Issued automatically by letter to the mother and needed for online birth registration.",
          zh: "会自动通过信件发送给母亲，在线登记出生时需要使用。",
          pt: "Emitido automaticamente por carta à mãe e necessário para o registo online do nascimento.",
          it: "Inviato automaticamente per lettera alla madre e necessario per registrare la nascita online.",
        },
      },
      {
        label: {
          en: "Parent details and PPSNs",
          zh: "父母信息和 PPSN",
          pt: "Dados e PPSN dos pais",
          it: "Dati e PPSN dei genitori",
        },
        detail: {
          en: "Birth registration asks for parent names, dates of birth, PPSNs, addresses, civil status and the child's full name.",
          zh: "出生登记需要父母姓名、出生日期、PPSN、地址、婚姻状态，以及孩子完整姓名。",
          pt: "O registo pede nomes, datas de nascimento, PPSN, moradas, estado civil dos pais e nome completo da criança.",
          it: "La registrazione richiede nomi, date di nascita, PPSN, indirizzi, stato civile dei genitori e nome completo del bambino.",
        },
      },
      {
        label: {
          en: "Maternity Benefit certificate",
          zh: "Maternity Benefit 证明",
          pt: "Certificado para Maternity Benefit",
          it: "Certificato per Maternity Benefit",
        },
        detail: {
          en: "Employees use employer certificate MB2; self-employed applicants use medical certificate MB3 after week 24 of pregnancy.",
          zh: "雇员使用雇主证明 MB2；自雇申请人在怀孕第 24 周后使用医生证明 MB3。",
          pt: "Empregadas usam o certificado do empregador MB2; independentes usam o certificado médico MB3 após a 24.ª semana de gravidez.",
          it: "Le dipendenti usano il certificato del datore MB2; le autonome usano il certificato medico MB3 dopo la 24ª settimana.",
        },
      },
      {
        label: {
          en: "Child Benefit / Parent's Benefit details",
          zh: "Child Benefit / Parent's Benefit 信息",
          pt: "Dados para Child Benefit / Parent's Benefit",
          it: "Dati per Child Benefit / Parent's Benefit",
        },
        detail: {
          en: "Use verified MyGovID where invited, the child's PPSN for Parent's Benefit and CB1/CB2 forms where paper claims are needed.",
          zh: "如收到邀请可用已验证 MyGovID；Parent's Benefit 需要孩子 PPSN；纸质申请可能需要 CB1/CB2 表格。",
          pt: "Use MyGovID verificado quando convidado, o PPSN da criança para Parent's Benefit e formulários CB1/CB2 quando for em papel.",
          it: "Usa MyGovID verificato se invitato, il PPSN del bambino per Parent's Benefit e moduli CB1/CB2 se serve domanda cartacea.",
        },
      },
    ],
    sources: [
      {
        label: "Birth registration official guidance",
        url: "https://www.gov.ie/en/department-of-social-protection/services/register-a-birth-in-ireland/",
      },
      {
        label: "Child Benefit official guidance",
        url: "https://www.gov.ie/en/department-of-social-protection/services/child-benefit/",
      },
      {
        label: "Maternity Benefit official guidance",
        url: "https://www.gov.ie/en/department-of-social-protection/services/maternity-benefit/",
      },
      {
        label: "Parent's Benefit official guidance",
        url: "https://www.gov.ie/en/department-of-social-protection/services/parents-benefit/",
      },
    ],
  },
  "starting-work": {
    estimate: {
      en: "Register your first job with Revenue as soon as possible before payroll. Employment permit applications should be received at least 12 weeks before the proposed start date, and unfinished permit drafts are deleted after 28 days.",
      zh: "开始发薪前应尽快在 Revenue 登记第一份工作。就业许可申请应至少在拟开始工作日期前 12 周提交；未完成的许可草稿 28 天后会删除。",
      pt: "Registe o primeiro emprego no Revenue o mais cedo possível antes do processamento salarial. Pedidos de employment permit devem chegar pelo menos 12 semanas antes da data de início proposta; rascunhos não submetidos são apagados após 28 dias.",
      it: "Registra il primo lavoro su Revenue il prima possibile prima della busta paga. Le domande di employment permit devono arrivare almeno 12 settimane prima della data di inizio proposta; le bozze non inviate vengono eliminate dopo 28 giorni.",
    },
    note: {
      en: "The essentials are PPSN, Revenue access and, for non-EEA workers, the correct employment permission before work begins.",
      zh: "核心材料是 PPSN、Revenue 账户权限；非 EEA 工作者还需在开始工作前取得正确就业许可。",
      pt: "O essencial é PPSN, acesso ao Revenue e, para trabalhadores não EEE, a permissão de trabalho correta antes de começar.",
      it: "Gli elementi essenziali sono PPSN, accesso Revenue e, per lavoratori non SEE, il permesso di lavoro corretto prima di iniziare.",
    },
    items: [
      {
        label: {
          en: "PPSN and Revenue access",
          zh: "PPSN 和 Revenue 账户",
          pt: "PPSN e acesso ao Revenue",
          it: "PPSN e accesso Revenue",
        },
        detail: {
          en: "You need a PPSN and myAccount or verified MyGovID to register your first job and avoid emergency tax.",
          zh: "你需要 PPSN 以及 myAccount 或已验证 MyGovID 来登记第一份工作并避免 emergency tax。",
          pt: "Precisa de PPSN e myAccount ou MyGovID verificado para registar o primeiro emprego e evitar emergency tax.",
          it: "Servono PPSN e myAccount o MyGovID verificato per registrare il primo lavoro ed evitare emergency tax.",
        },
      },
      {
        label: {
          en: "Employer and job details",
          zh: "雇主和工作信息",
          pt: "Dados do empregador e emprego",
          it: "Dati del datore e del lavoro",
        },
        detail: {
          en: "Use the employer name, start date and payroll details requested in Revenue Jobs and Pensions.",
          zh: "在 Revenue Jobs and Pensions 中填写雇主名称、开始日期和薪资相关信息。",
          pt: "Use o nome do empregador, data de início e dados de payroll pedidos em Revenue Jobs and Pensions.",
          it: "Usa nome del datore, data di inizio e dati payroll richiesti in Revenue Jobs and Pensions.",
        },
      },
      {
        label: {
          en: "Employment permit file if required",
          zh: "如需要，准备就业许可文件",
          pt: "Dossiê de employment permit se necessário",
          it: "Fascicolo employment permit se richiesto",
        },
        detail: {
          en: "Non-EEA workers may need a signed employment contract and the correct permit checklist before starting.",
          zh: "非 EEA 工作者可能需要已签署的劳动合同，并按相应许可清单准备材料后才能开始工作。",
          pt: "Trabalhadores não EEE podem precisar de contrato assinado e da checklist correta do permit antes de começar.",
          it: "I lavoratori non SEE possono aver bisogno di contratto firmato e checklist corretta del permit prima di iniziare.",
        },
      },
    ],
    sources: [
      {
        label: "Revenue starting first job guidance",
        url: "https://www.revenue.ie/en/jobs-and-pensions/starting-your-first-job/index.aspx",
      },
      {
        label: "Employment permits official guidance",
        url: "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/",
      },
    ],
  },
  unemployment: {
    estimate: {
      en: "Apply for Jobseeker's Pay-Related Benefit within 6 weeks of losing your job. Payments are due from the full working week starting Monday after job loss and are normally available to collect each Wednesday.",
      zh: "Jobseeker's Pay-Related Benefit 应在失业后 6 周内申请。付款从失业后下一个完整工作周的周一开始计算，通常每周三可领取。",
      pt: "Candidate-se ao Jobseeker's Pay-Related Benefit em até 6 semanas após perder o emprego. O pagamento conta da semana completa de trabalho que começa na segunda-feira após a perda do emprego e normalmente fica disponível à quarta-feira.",
      it: "Richiedi Jobseeker's Pay-Related Benefit entro 6 settimane dalla perdita del lavoro. Il pagamento decorre dalla settimana lavorativa completa che inizia il lunedì successivo e di solito è disponibile il mercoledì.",
    },
    note: {
      en: "Prepare identity verification first; missing SAFE Level 2 / verified MyGovID can delay online jobseeker claims.",
      zh: "先完成身份验证；缺少 SAFE Level 2 / 已验证 MyGovID 可能会延迟在线失业申请。",
      pt: "Prepare primeiro a verificação de identidade; faltar SAFE Level 2 / MyGovID verificado pode atrasar pedidos online.",
      it: "Prepara prima la verifica dell'identità; senza SAFE Level 2 / MyGovID verificato le domande online possono rallentare.",
    },
    items: [
      {
        label: {
          en: "Verified identity",
          zh: "已验证身份",
          pt: "Identidade verificada",
          it: "Identità verificata",
        },
        detail: {
          en: "Jobseeker's Pay-Related Benefit requires SAFE Level 2 identity verification for online and paper applications.",
          zh: "Jobseeker's Pay-Related Benefit 的在线和纸质申请都需要 SAFE Level 2 身份验证。",
          pt: "O Jobseeker's Pay-Related Benefit exige verificação SAFE Level 2 para pedidos online e em papel.",
          it: "Jobseeker's Pay-Related Benefit richiede verifica SAFE Level 2 per domande online e cartacee.",
        },
      },
      {
        label: {
          en: "Verified MyGovID or Intreo route",
          zh: "已验证 MyGovID 或 Intreo 路径",
          pt: "MyGovID verificado ou rota Intreo",
          it: "MyGovID verificato o percorso Intreo",
        },
        detail: {
          en: "Use verified MyGovID for MyWelfare, or attend an Intreo Centre / Social Welfare Branch Office if you cannot apply online.",
          zh: "可用已验证 MyGovID 通过 MyWelfare 申请；无法在线申请时前往 Intreo Centre 或 Social Welfare Branch Office。",
          pt: "Use MyGovID verificado no MyWelfare ou vá a um Intreo Centre / Social Welfare Branch Office se não puder pedir online.",
          it: "Usa MyGovID verificato su MyWelfare oppure vai a un Intreo Centre / Social Welfare Branch Office se non puoi fare domanda online.",
        },
      },
      {
        label: {
          en: "Employment and earnings details",
          zh: "就业和收入信息",
          pt: "Dados de emprego e rendimentos",
          it: "Dati su lavoro e reddito",
        },
        detail: {
          en: "Keep your last employment dates, PRSI / contribution history and earnings information ready for eligibility checks.",
          zh: "准备好最近工作日期、PRSI/缴费记录和收入信息，用于资格评估。",
          pt: "Tenha prontas as datas do último emprego, histórico PRSI/contribuições e rendimentos para avaliação.",
          it: "Tieni pronti date dell'ultimo lavoro, storico PRSI/contributi e redditi per i controlli.",
        },
      },
    ],
    sources: [
      {
        label: "Jobseeker's Pay-Related Benefit official guidance",
        url: "https://www.gov.ie/en/department-of-social-protection/services/jobseekers-pay-related-benefit/",
      },
    ],
  },
  "driving-in-ireland": {
    estimate: {
      en: "Apply for a first learner permit within 2 years of passing the theory test. New drivers normally need to hold the first learner permit for at least 6 months and complete EDT or IBT before sitting the driving test.",
      zh: "通过理论考试后应在 2 年内申请第一张 learner permit。新司机通常需要持有第一张 learner permit 至少 6 个月，并完成 EDT 或 IBT 后才能参加路考。",
      pt: "Peça o primeiro learner permit em até 2 anos após passar no theory test. Novos condutores normalmente precisam manter o primeiro learner permit por pelo menos 6 meses e completar EDT ou IBT antes do teste.",
      it: "Richiedi il primo learner permit entro 2 anni dal superamento del theory test. I nuovi conducenti normalmente devono tenerlo per almeno 6 mesi e completare EDT o IBT prima dell'esame.",
    },
    note: {
      en: "Prepare the learner permit document file before booking lessons or a driving test; medical or eyesight forms are time-sensitive.",
      zh: "在预约课程或路考前先准备 learner permit 文件；体检或视力表有时间限制。",
      pt: "Prepare o dossiê do learner permit antes de marcar aulas ou teste; formulários médicos ou de visão têm validade curta.",
      it: "Prepara il fascicolo del learner permit prima di prenotare lezioni o test; moduli medici o vista hanno validità breve.",
    },
    items: [
      {
        label: {
          en: "PSC and verified MyGovID",
          zh: "PSC 和已验证 MyGovID",
          pt: "PSC e MyGovID verificado",
          it: "PSC e MyGovID verificato",
        },
        detail: {
          en: "Needed for the online first learner permit application.",
          zh: "在线申请第一张 learner permit 时需要。",
          pt: "Necessários para o pedido online do primeiro learner permit.",
          it: "Necessari per la domanda online del primo learner permit.",
        },
      },
      {
        label: {
          en: "Theory test and address evidence",
          zh: "理论考试和住址证明",
          pt: "Theory test e prova de morada",
          it: "Theory test e prova di indirizzo",
        },
        detail: {
          en: "You need a passed driver theory test and proof of address dated within 6 months if your PSC address is different.",
          zh: "需要已通过的 driver theory test；如 PSC 地址不同，还需 6 个月内的住址证明。",
          pt: "Precisa de theory test aprovado e prova de morada dos últimos 6 meses se a morada do PSC for diferente.",
          it: "Serve theory test superato e prova di indirizzo entro 6 mesi se l'indirizzo PSC è diverso.",
        },
      },
      {
        label: {
          en: "Residence and medical forms",
          zh: "居住证明和医疗表格",
          pt: "Prova de residência e formulários médicos",
          it: "Prova di residenza e moduli medici",
        },
        detail: {
          en: "Normal residence proof may be needed for some applicants; eyesight or medical report forms must be dated within 1 month where applicable.",
          zh: "部分申请人需要提供 normally resident in Ireland 证明；如适用，视力或医疗报告表必须为 1 个月内。",
          pt: "Alguns candidatos precisam de prova de residência normal; formulários de visão ou médico devem ter data dos últimos 1 mês quando aplicável.",
          it: "Alcuni richiedenti devono provare la residenza normale; moduli vista o medici devono essere datati entro 1 mese se richiesti.",
        },
      },
      {
        label: {
          en: "Fee and appointment route",
          zh: "费用和申请方式",
          pt: "Taxa e forma de pedido",
          it: "Tariffa e modalità",
        },
        detail: {
          en: "The first learner permit fee is EUR 45; in-person applications also require an NDLS appointment.",
          zh: "第一张 learner permit 费用为 45 欧元；线下申请还需要预约 NDLS。",
          pt: "A taxa do primeiro learner permit é EUR 45; pedidos presenciais exigem marcação NDLS.",
          it: "La tariffa del primo learner permit è EUR 45; le domande in presenza richiedono appuntamento NDLS.",
        },
      },
    ],
    sources: [
      {
        label: "RSA first learner permit guidance",
        url: "https://www.rsa.ie/services/learner-drivers/learner-permit/apply-for-your-first-permit",
      },
      {
        label: "Passport turnaround reference for travel documents",
        url: "https://www.ireland.ie/en/dfa/passports/turnaround-times/",
      },
    ],
  },
  retiring: {
    estimate: {
      en: "Apply for State Pension Contributory 6 months before you want to start claiming. Free Travel PSC renewal or replacement should allow 10 days for delivery.",
      zh: "建议在希望开始领取 State Pension Contributory 前 6 个月申请。Free Travel PSC 续卡或补卡应预留 10 天邮寄时间。",
      pt: "Candidate-se à State Pension Contributory 6 meses antes da data em que quer começar a receber. Para renovar ou substituir Free Travel PSC, reserve 10 dias para entrega.",
      it: "Richiedi State Pension Contributory 6 mesi prima della data da cui vuoi riceverla. Per rinnovo o sostituzione Free Travel PSC, prevedi 10 giorni di consegna.",
    },
    note: {
      en: "The pension file is mainly about PRSI history, chosen pension date, overseas records and having an in-date PSC for Free Travel.",
      zh: "养老金文件重点是 PRSI 记录、选择的养老金开始日期、海外社保记录，以及用于 Free Travel 的有效 PSC。",
      pt: "O dossiê da pensão centra-se no histórico PRSI, data escolhida, registos estrangeiros e PSC válido para Free Travel.",
      it: "Il fascicolo pensione riguarda soprattutto storico PRSI, data scelta, registri esteri e PSC valido per Free Travel.",
    },
    items: [
      {
        label: {
          en: "Verified MyGovID and contribution statement",
          zh: "已验证 MyGovID 和缴费记录",
          pt: "MyGovID verificado e contribution statement",
          it: "MyGovID verificato e contribution statement",
        },
        detail: {
          en: "Use MyWelfare to request your Contribution Statement and estimate your State Pension rate.",
          zh: "通过 MyWelfare 获取 Contribution Statement，并估算 State Pension 金额。",
          pt: "Use MyWelfare para pedir o Contribution Statement e estimar a taxa da State Pension.",
          it: "Usa MyWelfare per richiedere il Contribution Statement e stimare l'importo della State Pension.",
        },
      },
      {
        label: {
          en: "PRSI and overseas social insurance records",
          zh: "PRSI 和海外社保记录",
          pt: "Registos PRSI e de segurança social estrangeira",
          it: "Record PRSI e previdenza estera",
        },
        detail: {
          en: "Keep Irish PRSI records and details of EU/EEA or bilateral-agreement country insurance where relevant.",
          zh: "准备爱尔兰 PRSI 记录，以及适用的 EU/EEA 或双边社保协议国家缴费记录。",
          pt: "Guarde registos PRSI irlandeses e dados de contribuições em países UE/EEE ou com acordo bilateral, se aplicável.",
          it: "Tieni i record PRSI irlandesi e dati dei contributi in paesi UE/SEE o con accordo bilaterale, se rilevanti.",
        },
      },
      {
        label: {
          en: "Bank, pension and tax details",
          zh: "银行、养老金和税务信息",
          pt: "Dados bancários, pensão e impostos",
          it: "Dati bancari, pensione e fiscali",
        },
        detail: {
          en: "Have your payment account, occupational pension details and Revenue information ready before you claim.",
          zh: "申请前准备收款账户、职业养老金信息和 Revenue 税务信息。",
          pt: "Tenha pronta a conta de pagamento, dados de pensão profissional e informação do Revenue antes do pedido.",
          it: "Prepara conto di pagamento, dettagli della pensione occupazionale e informazioni Revenue prima della domanda.",
        },
      },
      {
        label: {
          en: "Valid PSC for Free Travel",
          zh: "用于 Free Travel 的有效 PSC",
          pt: "PSC válido para Free Travel",
          it: "PSC valida per Free Travel",
        },
        detail: {
          en: "From 1 March 2026, Free Travel needs a valid in-date Free Travel Public Services Card.",
          zh: "自 2026 年 3 月 1 日起，Free Travel 需要有效且未过期的 Free Travel Public Services Card。",
          pt: "Desde 1 de março de 2026, Free Travel exige um Free Travel Public Services Card válido e dentro da validade.",
          it: "Dal 1 marzo 2026, Free Travel richiede una Free Travel Public Services Card valida e non scaduta.",
        },
      },
    ],
    sources: [
      {
        label: "State Pension Contributory official guidance",
        url: "https://www.gov.ie/en/department-of-social-protection/services/state-pension-contributory/",
      },
      {
        label: "Free Travel Scheme official guidance",
        url: "https://www.gov.ie/en/department-of-social-protection/services/free-travel-scheme/",
      },
    ],
  },
};

export const sourceNotes = [
  {
    label: "PPS Number, MyGovID, PSC, MyWelfare",
    url: "https://www.gov.ie/en/department-of-social-protection/services/get-a-personal-public-service-pps-number/",
  },
  {
    label: "Revenue myAccount and 2026 tax credits",
    url: "https://www.revenue.ie/en/online-services/services/register-for-an-online-service/register-for-myaccount.aspx",
  },
  {
    label: "HSE Medical Card and GP Visit Card guidance",
    url: "https://www2.healthservice.hse.ie/organisation/national-pppgs/hse-national-assessment-guidelines-for-medical-card-and-gp-visit-card/",
  },
  {
    label: "Immigration registration guidance",
    url: "https://www.irishimmigration.ie/registering-your-immigration-permission/",
  },
  {
    label: "Passport Online guidance",
    url: "https://www.gov.ie/en/department-of-foreign-affairs/services/apply-for-a-passport-online/",
  },
  {
    label: "RSA learner permit and driving test guidance",
    url: "https://www.rsa.ie/services/learner-drivers/learner-permit/apply-for-your-first-permit",
  },
  {
    label: "Social welfare 2026 rates",
    url: "https://www.gov.ie/en/department-of-social-protection/publications/current-rates-of-payment-for-social-welfare-payments-sw19/",
  },
];
