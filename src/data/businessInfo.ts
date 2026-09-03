export interface BusinessInfo {
  name: string;
  shortName: string;
  tagline: string;
  subtitle: string;
  phoneDisplay: string;
  phoneRaw: string;
  phoneTel: string;
  whatsappDisplay: string;
  whatsappRaw: string;
  whatsappUrl: string;
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
  name: "Maa Vaishnobi Medicine Store & Clinic",
  shortName: "Maa Vaishnobi",
  tagline: "Trusted Healthcare, Right Here in Balasore.",
  subtitle:
    "Maa Vaishnobi Medicine Store & Clinic provides convenient access to medicines and doctor consultation support for individuals and families in Balasore.",
  phoneDisplay: "098536 08262",
  phoneRaw: "09853608262",
  phoneTel: "tel:09853608262",
  whatsappDisplay: "+91 98536 08262",
  whatsappRaw: "919853608262",
  whatsappUrl: "https://wa.me/919853608262",
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
