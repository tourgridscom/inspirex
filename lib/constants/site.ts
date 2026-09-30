export const SITE = {
  name: "InspireX",
  legalName: "InspireX Technologies Ltd",
  domain: "https://www.inspirex.ca",
  tagline: "IT consulting, cybersecurity and technology staffing",
  description:
    "InspireX provides a full range of IT consulting and staffing services and solutions that enable clients to operate in a highly efficient, secure, and effective manner.",
  address: {
    street: "100 King Street West – Suite 5700",
    city: "Toronto",
    region: "Ontario",
    country: "Canada",
    postalCode: "M5X 1C7",
  },
  email: "info@inspirex.ca",
  hrEmail: "HR@inspirex.ca",
} as const;

export const ADDRESS_LINES = [
  SITE.address.street,
  `${SITE.address.city}, ${SITE.address.region} ${SITE.address.country}`,
  SITE.address.postalCode,
] as const;
