/**
 * Every string below is sourced from the archived inspirex.ca site
 * (home, /about-us/ and /our-services/). Nothing here is invented:
 * where the archive was thin, the section is simply absent. The exceptions
 * are Data Cleaning and Data Enrichment, newer services marked `featured`.
 */

export type Solution = {
  slug: string;
  title: string;
  /** Short label for dense navigation lists. */
  short: string;
  /** One-line summary shown in the solutions index. */
  summary: string;
  /** The archived description, verbatim in substance. */
  body: string[];
  /** Archived capability bullets, if the source listed any. */
  capabilities?: string[];
  /** Archived stepped method, if the source described one. */
  method?: { name: string; steps: { term: string; detail: string }[] };
  group: "Data Services" | "Security & Risk" | "Infrastructure & Operations" | "Support & Service" | "Platforms & People";
  /** Newer services highlighted with a badge wherever solutions are listed. */
  featured?: boolean;
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "data-cleaning",
    title: "Data Cleaning",
    short: "Data Cleaning",
    summary:
      "Deduplication, standardization and validation that turn inconsistent records into data your teams can trust.",
    body: [
      "Duplicate, incomplete and inconsistent records quietly undermine reporting, operations and every system that depends on them. Our consultants profile your data, correct it at the source, and put the rules in place that keep it clean.",
    ],
    capabilities: [
      "Data profiling and quality assessment",
      "Duplicate detection, matching and merging",
      "Standardization of names, addresses, dates and formats",
      "Validation and correction of missing or invalid values",
      "Cleansing ahead of migrations, ERP and SAP go-lives",
      "Ongoing data quality rules and monitoring",
    ],
    group: "Data Services",
    featured: true,
  },
  {
    slug: "data-enrichment",
    title: "Data Enrichment",
    short: "Data Enrichment",
    summary:
      "Appending verified attributes and context to your records so every decision is made on complete information.",
    body: [
      "Clean data is only the start. We enhance your existing records with verified, relevant attributes from trusted sources, giving your teams fuller customer, supplier and asset profiles without the manual research.",
    ],
    capabilities: [
      "Firmographic and contact data appending",
      "Address verification and geocoding",
      "Product, supplier and asset attribute enrichment",
      "Classification, categorization and tagging",
      "Integration of enriched data into CRM, ERP and SAP systems",
      "Scheduled refresh to keep records current",
    ],
    group: "Data Services",
    featured: true,
  },
  {
    slug: "data-management",
    title: "Data Management",
    short: "Data Management",
    summary:
      "Data storage and data management solutions that end lost files, virus infection and accidental deletion.",
    body: [
      "We provide data storage and data management solutions, which are of utmost significance to a sound IT department. This eliminates the headache of lost files, virus infection, and accidental deletion.",
    ],
    group: "Data Services",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    short: "Cybersecurity",
    summary:
      "Assessment, vulnerability management, incident response and regulatory compliance, backed by certified practitioners.",
    body: [
      "We offer Cybersecurity Assessment, Vulnerability Management, Incident Response, Compliance, Governance and Risk Management, Penetration Testing, and Policy and Procedure Development.",
    ],
    capabilities: [
      "Cybersecurity assessment",
      "Vulnerability management",
      "Incident response",
      "Compliance: NIST, CMMC, ISO 27001, 800-171, PCI-DSS",
      "Governance and risk management",
      "Penetration testing",
      "Policy and procedure development",
    ],
    group: "Security & Risk",
  },
  {
    slug: "infrastructure-monitoring",
    title: "24/7 Infrastructure Monitoring",
    short: "Infrastructure Monitoring",
    summary:
      "Round-the-clock network monitoring that surfaces conditions before they become outages.",
    body: ["We provide 24/7 Network Monitoring Services, which include:"],
    capabilities: [
      "IT monitoring — monitoring and alerting of condition, availability, and performance of applications and services to streamline operations.",
      "Network performance tracking — determining which processes and services consume the most bandwidth and cause connection issues, with recommendations on leveling resources to increase operational performance.",
    ],
    group: "Infrastructure & Operations",
  },
  {
    slug: "disaster-recovery",
    title: "Disaster Recovery",
    short: "Disaster Recovery",
    summary:
      "Simplified backup and recovery of databases, servers, data files and applications — built to minimize downtime.",
    body: [
      "We understand how important it is to recover a system if disaster occurs, so we provide a solution which allows for simplified backup and recovery of databases, servers, data files and applications. We strive to minimize the clients’ downtime.",
    ],
    group: "Security & Risk",
  },
  {
    slug: "software-hardware-deployment",
    title: "Software & Hardware Deployment",
    short: "Deployment",
    summary:
      "Custom deployment solutions that work within a client’s real constraints, without draining internal resources.",
    body: [
      "Hardware and software deployment is an extensive undertaking that can be overwhelming and draining to the client’s internal resources. Our consultants are experienced and trained at developing custom solutions that work within a client’s constraints.",
    ],
    group: "Infrastructure & Operations",
  },
  {
    slug: "project-program-management",
    title: "Project & Program Management",
    short: "Project & Program Management",
    summary:
      "High-level program management that maximizes the efficiency of IT management systems and techniques.",
    body: [
      "We provide high-level program management to maximize the efficiency of IT management systems and techniques.",
    ],
    group: "Infrastructure & Operations",
  },
  {
    slug: "end-user-support",
    title: "End-User Support",
    short: "End-User Support",
    summary:
      "The first line of defense when applications or hardware fail — from break/fix through documentation and training.",
    body: [
      "Our consultants are the first line of defense to assist our clients when they encounter vulnerabilities or defects with their applications or hardware. Our services encompass the following, but may not be limited to:",
    ],
    capabilities: [
      "Management of all activities associated with application and infrastructure maintenance, break/fix, installation, moves, additions, change, inventory, disposition and sanitization.",
      "Creating and maintaining Standard Operating Procedures, policies, SLAs and end-user training guides and tutorials.",
      "Software implementation, utilization, modification, testing, configuration, troubleshooting and problem resolution.",
    ],
    group: "Support & Service",
  },
  {
    slug: "video-conferencing-telephony",
    title: "Video Conferencing & Telephone Support",
    short: "Conferencing & Telephony",
    summary:
      "Scalable communications that match the client’s needs and maximize existing investment.",
    body: [
      "Our consultants implement scalable and reliable solutions to match our client’s needs and to maximize investment. Our services range but may not be limited to the following:",
    ],
    capabilities: [
      "Installing VOIP and analog devices",
      "Install and upgrade call centre management tools",
      "PBX support",
      "Unified messaging",
      "Circuit administration",
      "Administration for video and conferencing (WebEx and Skype)",
    ],
    group: "Support & Service",
  },
  {
    slug: "application-maintenance-support",
    title: "Application & Maintenance Support",
    short: "Application Support",
    summary:
      "A tested four-stage method for keeping client applications current, secure and uninterrupted.",
    body: [
      "Our trained consultants follow a simple but well-tested approach when managing our client’s applications. We refer to it as the AIEP approach.",
      "Following this approach allows us to keep our clients up to date on regulations, policies and practices, which in return secures their intellectual property.",
    ],
    method: {
      name: "The AIEP approach",
      steps: [
        { term: "Assess", detail: "Assess all user concerns and issues to improve application productivity and utilization." },
        { term: "Implement", detail: "Implement all security updates and bug fixes." },
        { term: "Evaluate", detail: "Evaluate all updates and fixes to ensure no impact to operations." },
        { term: "Protect", detail: "Protect the infrastructure against hostile attacks via application vulnerabilities." },
      ],
    },
    group: "Support & Service",
  },
  {
    slug: "sap-managed-services",
    title: "SAP Managed Services",
    short: "SAP Managed Services",
    summary:
      "S/4HANA upgrade strategy, optimization, data archiving and ongoing managed SAP support.",
    body: [
      "We provide S/4HANA Upgrade Strategy, SAP Optimization, SAP Data Archiving, and SAP Managed Support.",
    ],
    capabilities: [
      "Application support",
      "Installation and upgrade",
      "Process support",
      "Configuration and enhancements",
      "Interfaces and integrations",
      "OpenText Vendor Invoice Management",
    ],
    group: "Platforms & People",
  },
  {
    slug: "it-staffing",
    title: "IT Staffing",
    short: "IT Staffing",
    summary:
      "A full spectrum of IT staffing — contract or direct hire — matched to your hiring needs.",
    body: [
      "We offer a full spectrum of IT staffing services, including hiring on a contract basis, or direct hiring. We have the experience and knowledge to provide the best IT professionals with your company based on your hiring needs.",
    ],
    group: "Platforms & People",
  },
];

export const GROUP_IMAGES: Record<Solution["group"], { src: string; alt: string }> = {
  "Data Services": {
    src: "/images/server-towers.jpg",
    alt: "A row of servers lit in blue and red",
  },
  "Security & Risk": {
    src: "/images/processor-board.jpg",
    alt: "Close view of a server mainboard, processor socket and memory modules",
  },
  "Infrastructure & Operations": {
    src: "/images/datacenter-racks.jpg",
    alt: "Server racks lit in the aisle of a data centre",
  },
  "Support & Service": {
    src: "/images/support-specialist.jpg",
    alt: "A support specialist working at a laptop wearing a headset",
  },
  "Platforms & People": {
    src: "/images/server-blue.jpg",
    alt: "The perforated front panel of a server, lit in blue",
  },
};

export const SOLUTION_GROUPS = [
  "Data Services",
  "Security & Risk",
  "Infrastructure & Operations",
  "Support & Service",
  "Platforms & People",
] as const;

export function getSolution(slug: string) {
  return SOLUTIONS.find((s) => s.slug === slug);
}
