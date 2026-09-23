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
  department: string;
  specialtyId: string;
  specialtyName: string;
  qualifications?: string;
  experience?: string;
  availabilityNote: string;
  isVisitingConsultant: boolean;
  phone?: string[];
  focusAreas?: string[];
  badgeColor?: string;
  iconName?: string;
  photoUrl?: string;
  avatarBg?: string;
  avatarInitials?: string;
}

export const HEALTH_CONCERNS: HealthConcern[] = [
  {
    id: "skin",
    name: "Skin Disease & Allergy",
    subtitle: "Rash, VD, skin care",
    category: "skin dermatology rash allergy itching acne eczema vd",
    iconName: "Sparkles",
    badgeColor: "bg-rose-100 text-rose-800",
    defaultSpecialty: "Dermatology (Skin & VD Specialist)",
  },
  {
    id: "child",
    name: "Child Health Care",
    subtitle: "Pediatric wellness & kids",
    category: "child pediatric infant baby kids fever vaccination growth",
    iconName: "Baby",
    badgeColor: "bg-sky-100 text-sky-800",
    defaultSpecialty: "Pediatrics (Child Specialist)",
  },
  {
    id: "mental",
    name: "Depression & Mental Health",
    subtitle: "Neuro psychiatry care",
    category: "mental depression neuro psychiatry anxiety stress sleep wellness",
    iconName: "UserCheck",
    badgeColor: "bg-purple-100 text-purple-800",
    defaultSpecialty: "Neuro Psychiatry (Mental Health)",
  },
  {
    id: "women",
    name: "Women's Health & Infertility",
    subtitle: "O&G, sonology, pregnancy",
    category: "women female gynecology pregnancy menstrual period infertility sonology",
    iconName: "HeartPulse",
    badgeColor: "bg-pink-100 text-pink-800",
    defaultSpecialty: "Obstetrics & Gynecology (O&G)",
  },
  {
    id: "oncology",
    name: "Oncology & Cancer Care",
    subtitle: "Surgical oncology consultation",
    category: "cancer oncology tumor surgical oncology consultation doctor panda",
    iconName: "Activity",
    badgeColor: "bg-amber-100 text-amber-800",
    defaultSpecialty: "Surgical Oncology (Cancer Specialist)",
  },
  {
    id: "urology",
    name: "Kidney & Urinary Care",
    subtitle: "Urology consultation & stone care",
    category: "urology kidney bladder urinary stone doctor giri prostate",
    iconName: "Activity",
    badgeColor: "bg-indigo-100 text-indigo-800",
    defaultSpecialty: "Urology (Kidney & Urinary Specialist)",
  },
  {
    id: "general",
    name: "General Health Checkup",
    subtitle: "Fever, weakness, checkup",
    category: "general health checkup weakness body pain physician",
    iconName: "Stethoscope",
    badgeColor: "bg-teal-100 text-teal-800",
    defaultSpecialty: "General Medicine / General Physician",
  },
  {
    id: "diabetes",
    name: "Diabetes & Metabolism",
    subtitle: "Sugar control & checkup",
    category: "diabetes sugar glucose metabolic blood sugar",
    iconName: "Activity",
    badgeColor: "bg-blue-100 text-blue-800",
    defaultSpecialty: "General Medicine / General Physician",
  },
  {
    id: "bone",
    name: "Bone & Joint Care",
    subtitle: "Pain, joint discomfort",
    category: "bone joint orthopedic knee back pain fracture arthritis",
    iconName: "Accessibility",
    badgeColor: "bg-orange-100 text-orange-800",
    defaultSpecialty: "Visiting Medical Specialist",
  },
  {
    id: "other",
    name: "Other Specialist Query",
    subtitle: "General enquiry for doctor",
    category: "other general consultation query help medical doctor",
    iconName: "MoreHorizontal",
    badgeColor: "bg-slate-100 text-slate-800",
    defaultSpecialty: "General Medicine / General Physician",
  },
];

export const SPECIALTIES: DoctorSpecialty[] = [
  {
    id: "dermatology",
    name: "Dermatology (Skin & VD Specialist)",
    displayName: "Dermatology — Dr. Lopita Nayak",
    category: "skin",
  },
  {
    id: "pediatrics",
    name: "Pediatrics (Child Specialist)",
    displayName: "Pediatrics — Dr. Arun Kumar Giri",
    category: "child",
  },
  {
    id: "psychiatry",
    name: "Neuro Psychiatry (Mental Health)",
    displayName: "Neuro Psychiatry — Dr. Rasmita Behera",
    category: "mental",
  },
  {
    id: "gynecology",
    name: "Obstetrics & Gynecology (O&G)",
    displayName: "Obstetrics & Gynecology — Dr. Ajit Kumar Rath",
    category: "women",
  },
  {
    id: "oncology",
    name: "Surgical Oncology (Cancer Specialist)",
    displayName: "Surgical Oncology — Dr. Sangram Keshari Panda",
    category: "oncology",
  },
  {
    id: "urology",
    name: "Urology (Kidney & Urinary Specialist)",
    displayName: "Urology — Dr. Jaydev Giri",
    category: "urology",
  },
  {
    id: "gen-med",
    name: "General Medicine / General Physician",
    displayName: "General Medicine OPD",
    category: "general",
  },
  {
    id: "visiting-specialist",
    name: "Visiting Medical Specialist",
    displayName: "Visiting Specialist Consultation",
    category: "specialist",
  },
];

export const VISITING_DOCTORS_REGISTRY: VisitingDoctor[] = [
  {
    id: "doc-lopita-nayak",
    name: "Dr. Lopita Nayak",
    title: "Skin & VD Specialist",
    department: "Dermatology & Skin Care",
    specialtyId: "dermatology",
    specialtyName: "Dermatology (Skin & VD Specialist)",
    qualifications: "Skin & VD Specialist",
    availabilityNote: "Frequently visiting OPD doctor at Maa Vaishnobi Medicine Store Clinic.",
    isVisitingConsultant: true,
    focusAreas: ["Skin Disease", "VD Specialist", "Allergy & Rash Care"],
    badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
    iconName: "Sparkles",
    avatarBg: "from-rose-500 to-pink-600",
    avatarInitials: "LN",
    photoUrl: "/images/dr_lopita_nayak.jpg",
  },
  {
    id: "doc-arun-kumar-giri",
    name: "Dr. Arun Kumar Giri",
    title: "Child Specialist",
    department: "Pediatrics & Child Care",
    specialtyId: "pediatrics",
    specialtyName: "Pediatrics (Child Specialist)",
    qualifications: "Child Specialist & Pediatric Consultant",
    availabilityNote: "Frequently visiting OPD doctor. Contact: 9827439139, 7847839139",
    isVisitingConsultant: true,
    phone: ["9827439139", "7847839139"],
    focusAreas: ["Child Health", "Pediatric Consultation", "Infant Care"],
    badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
    iconName: "Baby",
    avatarBg: "from-sky-500 to-blue-600",
    avatarInitials: "AG",
    photoUrl: "/images/dr_arun_kumar_giri.jpg",
  },
  {
    id: "doc-rasmita-behera",
    name: "Dr. Rasmita Behera",
    title: "Consulting Neuro Psychiatrist",
    department: "Neuro Psychiatry",
    specialtyId: "psychiatry",
    specialtyName: "Neuro Psychiatry (Mental Health)",
    qualifications: "Consulting Neuro Psychiatrist",
    availabilityNote: "Frequently visiting specialist for mental health & depression treatment.",
    isVisitingConsultant: true,
    focusAreas: ["Depression Treatment", "Mental Health Care", "Neuro Psychiatry"],
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    iconName: "UserCheck",
    avatarBg: "from-purple-500 to-indigo-600",
    avatarInitials: "RB",
    photoUrl: "/images/dr_rasmita_behera.jpg",
  },
  {
    id: "doc-ajit-kumar-rath",
    name: "Dr. Ajit Kumar Rath",
    title: "SR. Dept. of O&G",
    department: "Obstetrics & Gynecology",
    specialtyId: "gynecology",
    specialtyName: "Obstetrics & Gynecology (O&G)",
    qualifications: "Gold Medalist • Sonologist • Infertility Specialist",
    availabilityNote: "Frequently visiting specialist for O&G, Sonology & Infertility care.",
    isVisitingConsultant: true,
    focusAreas: ["Infertility Specialist", "Sonology", "SR. Dept. of O&G"],
    badgeColor: "bg-pink-100 text-pink-800 border-pink-200",
    iconName: "HeartPulse",
    avatarBg: "from-pink-500 to-rose-600",
    avatarInitials: "AR",
    photoUrl: "/images/dr_ajit_kumar_rath.jpg",
  },
  {
    id: "doc-sangram-keshari-panda",
    name: "Dr. Sangram Keshari Panda",
    title: "Sr. Consultant & HOD",
    department: "Surgical Oncology",
    specialtyId: "oncology",
    specialtyName: "Surgical Oncology (Cancer Specialist)",
    qualifications: "Sr. Consultant & HOD, Dept. of Surgical Oncology",
    availabilityNote: "Every Month 3rd Saturday | Timing: 11:00 AM - 1:00 PM at Maa Vaishnobi Clinic.",
    isVisitingConsultant: true,
    focusAreas: ["Surgical Oncology", "Cancer Specialist", "Monthly 3rd Sat (11am-1pm)"],
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    iconName: "Activity",
    avatarBg: "from-amber-500 to-orange-600",
    avatarInitials: "SP",
    photoUrl: "/images/dr_sangram_keshari_panda.jpg",
  },
  {
    id: "doc-jaydev-giri",
    name: "Dr. Jaydev Giri",
    title: "Assistant Professor",
    department: "Dept. of Urology",
    specialtyId: "urology",
    specialtyName: "Urology (Kidney & Urinary Specialist)",
    qualifications: "Assistant Professor, Dept. of Urology",
    availabilityNote: "Frequently visiting OPD doctor at Maa Vaishnobi Medicine Store Clinic.",
    isVisitingConsultant: true,
    focusAreas: ["Dept. of Urology", "Assistant Professor", "Urinary & Kidney Care"],
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    iconName: "Activity",
    avatarBg: "from-indigo-600 to-blue-700",
    avatarInitials: "JG",
    photoUrl: "/images/dr_jaydev_giri.jpg",
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
