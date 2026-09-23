export interface BusinessInfo {
  name: string;
  shortName: string;
  tagline: string;
  subtitle: string;
  logoUrl: string;
  phone1: string;
  phone2: string;
  phoneDisplay: string;
  phoneRaw: string;
  phoneTel: string;
  phone1Tel: string;
  phone2Tel: string;
  phones: string[];
  whatsappDisplay: string;
  whatsappRaw: string;
  whatsappUrl: string;
  whatsappUrl2: string;
  address: {
    street: string;
    locality: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    country: string;
    landmark: string;
    plusCode: string;
    fullFormatted: string;
  };
  googleRating: {
    score: number;
    reviewsCount: number;
    reviewsUrl: string;
    starsDisplay: string;
  };
  mapsUrl: string;
  openingHours: {
    pharmacy: string;
    clinic: string;
  };
  emergencyNumbers: {
    ambulance: string;
    nationalEmergency: string;
  };
  effectiveDate: string;
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "Maa Vaishnobi Medicine Store",
  shortName: "Maa Vaishnobi",
  tagline: "Balasore's Trusted 100% Genuine Medicine Store & Specialist OPD Desk.",
  subtitle:
    "Maa Vaishnobi Medicine Store provides 100% genuine prescription medicines, OTC wellness products, surgical items, and specialist doctor OPD consultation support in Balasore.",
  logoUrl: "/images/IMG_8855.PNG",
  phone1: "9827439139",
  phone2: "7847839139",
  phoneDisplay: "9827439139, 7847839139",
  phoneRaw: "9827439139",
  phoneTel: "tel:9827439139",
  phone1Tel: "tel:9827439139",
  phone2Tel: "tel:7847839139",
  phones: ["9827439139", "7847839139"],
  whatsappDisplay: "+91 98274 39139 / +91 78478 39139",
  whatsappRaw: "919827439139",
  whatsappUrl: "https://wa.me/919827439139",
  whatsappUrl2: "https://wa.me/917847839139",
  address: {
    street: "Jail Rd",
    locality: "Manikhamb",
    city: "Balasore",
    district: "Gopalgoan",
    state: "Odisha",
    pincode: "756001",
    country: "India",
    landmark: "Near District Jail Road intersection",
    plusCode: "FWWJ+GP Balasore, Odisha",
    fullFormatted: "Jail Rd, Manikhamb, Balasore, Gopalgoan, Odisha 756001",
  },
  googleRating: {
    score: 4.9,
    reviewsCount: 258,
    reviewsUrl: "https://share.google/zfefBHNG8L8KhDjk5",
    starsDisplay: "★★★★★",
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Maa+Vaishnobi+Medicine+Store+%26+Clinic,+FWWJ%2BGP,+Balasore,+Odisha+756001",
  openingHours: {
    pharmacy: "Monday – Sunday",
    clinic: "Doctor OPD consultations as per visiting schedules",
  },
  emergencyNumbers: {
    ambulance: "108",
    nationalEmergency: "112",
  },
  effectiveDate: "September 2026",
};
