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
    url: "https://www.gov.ie/en/service/9a257-housing-assistance-payment/",
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

