export interface HealthConcern {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  iconName: string;
  badgeColor: string;
  defaultSpecialty: string;
}

export interface DoctorSpecialty {
  id: string;
  name: string;
  displayName: string;
  category: string;
}

export interface VisitingDoctor {
  id: string;
  name: string;
  title: string;
  specialtyId: string;
  specialtyName: string;
  experience?: string;
  availabilityNote: string;
  isVisitingConsultant: boolean;
}

export const HEALTH_CONCERNS: HealthConcern[] = [
  {
    id: "general",
    name: "General Health",
    subtitle: "Fever, weakness, checkup",
    category: "general health checkup weakness body pain",
    iconName: "Stethoscope",
    badgeColor: "bg-sky-100 text-sky-800",
    defaultSpecialty: "General Medicine / General Physician",
  },
  {
    id: "fever",
    name: "Fever, Cold & Flu",
    subtitle: "Viral symptoms, cough",
    category: "fever cold flu cough infection viral",
    iconName: "Thermometer",
    badgeColor: "bg-amber-100 text-amber-800",
    defaultSpecialty: "General Medicine / General Physician",
  },
  {
    id: "diabetes",
    name: "Diabetes",
    subtitle: "Sugar control & checkup",
    category: "diabetes sugar glucose metabolic blood sugar",
    iconName: "Activity",
    badgeColor: "bg-blue-100 text-blue-800",
    defaultSpecialty: "Diabetology / General Physician Consultation",
  },
  {
    id: "bp-heart",
    name: "BP & Heart Wellness",
    subtitle: "Hypertension, wellness",
    category: "blood pressure bp heart hypertension cardiac wellness",
    iconName: "HeartPulse",
    badgeColor: "bg-rose-100 text-rose-800",
    defaultSpecialty: "General Medicine / General Physician",
  },
  {
    id: "skin",
    name: "Skin Problems",
    subtitle: "Allergies, rash, irritation",
    category: "skin dermatology rash allergy itching acne eczema",
    iconName: "Sparkles",
    badgeColor: "bg-emerald-100 text-emerald-800",
    defaultSpecialty: "Dermatology Consultation (Visiting Specialist)",
  },
  {
    id: "digestive",
    name: "Digestive Problems",
    subtitle: "Acidity, stomach, gas",
    category: "digestive stomach acidity gas indigestion liver gastric",
    iconName: "UtensilsCrossed",
    badgeColor: "bg-yellow-100 text-yellow-800",
    defaultSpecialty: "General Medicine / General Physician",
  },
  {
    id: "child",
    name: "Child Health",
    subtitle: "Pediatric wellness",
    category: "child pediatric infant baby kids fever vaccination growth",
    iconName: "Baby",
    badgeColor: "bg-cyan-100 text-cyan-800",
    defaultSpecialty: "Pediatrics Consultation",
  },
  {
    id: "women",
    name: "Women's Health",
    subtitle: "Gynecology & wellness",
    category: "women female gynecology pregnancy menstrual period wellness",
    iconName: "UserCheck",
    badgeColor: "bg-purple-100 text-purple-800",
    defaultSpecialty: "Obstetrics & Gynecology Consultation",
  },
  {
    id: "bone",
    name: "Bone & Joint",
    subtitle: "Pain, joint discomfort",
    category: "bone joint orthopedic knee back pain fracture arthritis",
    iconName: "Accessibility",
    badgeColor: "bg-orange-100 text-orange-800",
    defaultSpecialty: "Orthopedic Consultation",
  },
  {
    id: "eye",
    name: "Eye Problems",
    subtitle: "Strain, vision query",
    category: "eye vision ophthalmology strain redness vision checkup",
    iconName: "Eye",
    badgeColor: "bg-teal-100 text-teal-800",
    defaultSpecialty: "Visiting Specialist Consultation",
  },
  {
    id: "ent",
    name: "Ear, Nose & Throat",
    subtitle: "ENT & sinus queries",
    category: "ear nose throat ent sinus throat infection hearing earache",
    iconName: "Ear",
    badgeColor: "bg-indigo-100 text-indigo-800",
    defaultSpecialty: "Visiting Specialist Consultation",
  },
  {
    id: "other",
    name: "Other Concerns",
    subtitle: "General enquiry",
    category: "other general consultation query help medical doctor",
    iconName: "MoreHorizontal",
    badgeColor: "bg-slate-100 text-slate-800",
    defaultSpecialty: "General Medicine / General Physician",
  },
];

export const SPECIALTIES: DoctorSpecialty[] = [
  {
    id: "gen-med",
    name: "General Medicine / General Physician",
    displayName: "General Medicine / General Physician",
    category: "general",
  },
  {
    id: "pediatrics",
    name: "Pediatrics Consultation",
    displayName: "Pediatrics (Child Care)",
    category: "child",
  },
  {
    id: "gynecology",
    name: "Obstetrics & Gynecology Consultation",
    displayName: "Obstetrics & Gynecology",
    category: "women",
  },
  {
    id: "diabetology",
    name: "Diabetology / General Physician Consultation",
    displayName: "Diabetology Consultation",
    category: "diabetes",
  },
  {
    id: "dermatology",
    name: "Dermatology Consultation (Visiting Specialist)",
    displayName: "Dermatology (Skin Specialist)",
    category: "skin",
  },
  {
    id: "orthopedics",
    name: "Orthopedic Consultation",
    displayName: "Orthopedic (Bone & Joint)",
    category: "bone",
  },
  {
    id: "visiting-specialist",
    name: "Visiting Specialist Consultation",
    displayName: "Visiting Specialist Consultation",
    category: "specialist",
  },
];

export const VISITING_DOCTORS_REGISTRY: VisitingDoctor[] = [
  {
    id: "doc-gen-physician",
    name: "OPD Consultant (General Physician)",
    title: "Visiting Consultant",
    specialtyId: "gen-med",
    specialtyName: "General Medicine / General Physician",
    availabilityNote: "Regular OPD visiting sessions at Maa Vaishnobi Clinic desk.",
    isVisitingConsultant: true,
  },
  {
    id: "doc-pedia-consultant",
    name: "Pediatric Visiting Consultant",
    title: "Child Specialist",
    specialtyId: "pediatrics",
    specialtyName: "Pediatrics Consultation",
    availabilityNote: "Scheduled child care and pediatric OPD slots.",
    isVisitingConsultant: true,
  },
  {
    id: "doc-gyn-consultant",
    name: "Obstetrics & Gynecology Consultant",
    title: "Visiting Specialist",
    specialtyId: "gynecology",
    specialtyName: "Obstetrics & Gynecology Consultation",
    availabilityNote: "Women's wellness and gynecology OPD sessions.",
    isVisitingConsultant: true,
  },
  {
    id: "doc-diab-consultant",
    name: "Diabetes & Wellness Consultant",
    title: "Diabetology OPD",
    specialtyId: "diabetology",
    specialtyName: "Diabetology / General Physician Consultation",
    availabilityNote: "Diabetes management & regular health monitor checkups.",
    isVisitingConsultant: true,
  },
  {
    id: "doc-derma-consultant",
    name: "Dermatology Visiting Specialist",
    title: "Skin Specialist",
    specialtyId: "dermatology",
    specialtyName: "Dermatology Consultation (Visiting Specialist)",
    availabilityNote: "Skin and allergy consultation hours.",
    isVisitingConsultant: true,
  },
  {
    id: "doc-ortho-consultant",
    name: "Orthopedic Visiting Specialist",
    title: "Bone & Joint Consultant",
    specialtyId: "orthopedics",
    specialtyName: "Orthopedic Consultation",
    availabilityNote: "Bone, joint, and orthopedic care consultation.",
    isVisitingConsultant: true,
  },
  {
    id: "doc-visiting-specialist",
    name: "Visiting Medical Specialist",
    title: "Specialist Consultant",
    specialtyId: "visiting-specialist",
    specialtyName: "Visiting Specialist Consultation",
    availabilityNote: "Consultation booked based on visiting doctor schedule.",
    isVisitingConsultant: true,
  },
];

export interface TimeSlotOption {
  id: string;
  label: string;
  period: string;
  timeRange: string;
  iconName: string;
  colorClass: string;
}

export const TIME_SLOTS: TimeSlotOption[] = [
  {
    id: "morning",
    label: "Morning",
    period: "Morning",
    timeRange: "09:30 AM - 12:30 PM",
    iconName: "Sun",
    colorClass: "text-primary border-primary bg-sky-50",
  },
  {
    id: "evening",
    label: "Evening",
    period: "Evening",
    timeRange: "04:30 PM - 07:30 PM",
    iconName: "Sunset",
    colorClass: "text-amber-700 hover:border-amber-400",
  },
  {
    id: "night",
    label: "Night",
    period: "Night",
    timeRange: "07:30 PM - 09:00 PM",
    iconName: "Moon",
    colorClass: "text-indigo-700 hover:border-indigo-400",
  },
];
