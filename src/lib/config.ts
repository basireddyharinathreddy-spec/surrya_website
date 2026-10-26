// Centralized business configuration for Surrya Gen Power.

export const BUSINESS = {
  name: "Surrya Gen Power",
  brandName: "Surrya Gen Power",
  tagline: "Rooftop Solar Solutions for Andhra Pradesh",
  // Telugu: "Our Andhra. Our Trust. Our Surrya Gen Power."
  teluguTagline: "మన ఆంధ్ర. మన నమ్మకం. మన సూర్య జెన్ పవర్",
  region: "Andhra Pradesh, India",
  phone: "+91 9391927443",
  secondaryPhone: "+91 9391907443",
  whatsapp: "919391927443",
  secondaryWhatsapp: "919391907443",
  email: "atriasolar5859@gmail.com",
  website: "www.surryagenpower.in",
  websiteUrl: "https://www.surryagenpower.in",
  // NOTE: Update to a specific street address when available for LocalBusiness schema accuracy.
  address: "Andhra Pradesh, India",
} as const;

export const SERVICE_AREAS = [
  {
    name: "Kadapa",
    description: "Rooftop solar enquiries for homes and businesses in and around Kadapa city.",
  },
  {
    name: "Chittoor",
    description: "Solar solutions for residences, farms, and commercial spaces across Chittoor.",
  },
  {
    name: "Tirupati",
    description: "Rooftop solar for homes, hotels, and institutions in the Tirupati region.",
  },
  {
    name: "Punganuru",
    description: "Solar consultations and installations for Punganuru and nearby towns.",
  },
  {
    name: "Rayachoti",
    description: "Residential and small commercial solar enquiries in Rayachoti.",
  },
  {
    name: "Anantapuramu",
    description: "Solar systems suited to Anantapuramu's high-irradiance climate.",
  },
  { name: "Kadiri", description: "Solar solutions for homes and commercial spaces in Kadiri." },
  {
    name: "Nandyal",
    description: "Solar enquiries and site assessments for Nandyal and surroundings.",
  },
] as const;

export const PACKAGES = [
  {
    id: "3.45kw",
    capacity: "3.45 kW",
    price: "₹2,15,000",
    description:
      "A compact rooftop system suited to smaller homes with moderate daytime electricity use.",
  },
  {
    id: "4kw",
    capacity: "4 kW",
    price: "₹2,58,000",
    description:
      "A balanced system for typical family homes looking to offset a large share of their bill.",
  },
  {
    id: "5kw",
    capacity: "5 kW",
    price: "₹3,15,000",
    description:
      "A larger system for bigger homes or small commercial spaces with higher consumption.",
  },
] as const;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/packages", label: "Packages" },
  { to: "/calculator", label: "Calculator" },
  { to: "/subsidy-guide", label: "Subsidy Guide" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/contact", label: "Contact" },
] as const;

export function whatsappLink(message: string, number: string = BUSINESS.whatsapp) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function telLink(number: string = BUSINESS.phone) {
  return `tel:${number.replace(/[^+\d]/g, "")}`;
}
