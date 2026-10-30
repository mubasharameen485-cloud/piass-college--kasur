export const programsData = [
  // ================= NURSING DEGREE PROGRAMS =================

// 🎯 DPT (Allied Health Sciences)
  {
    slug: "dpt",
    id: "dpt",
    title: "Doctor of Physical Therapy (DPT)",
    category: "Allied Health Sciences",
    categorySlug: "allied-health",
    duration: "5 Years (10 Semesters)",
    eligibility: "F.Sc (Pre-Medical) with minimum 60% Marks. Recognized by HEC.",
    recognizedBy: "HEC & University Affiliated (Allied Health Sciences)",
    description: "5-year clinical doctoral degree training physical therapists in musculoskeletal rehabilitation, sports medicine, neuro-rehab, and physical therapy practice.",
    seats: "40 Seats",
    scope: "Clinical Physiotherapist in Government DHQ/THQ Hospitals, Sports Teams, Military Rehab Centers, Private Clinics, and Overseas Licensure (UK, USA, Gulf).",
    highlights: [
      "Hospital Bedside Physiotherapy Rotations",
      "Advanced Electrotherapy & Biomechanics Labs",
      "Neuro-Muscular Rehabilitation Training",
      "Direct Clinical Practice with Certified Doctors"
    ],
    subjects: ["Anatomy & Histology", "Physiology", "Biomechanics & Kinesiology", "Therapeutics", "Neuro-Anatomy", "Clinical Rehabilitation"]
  },




  {
    id: "bs-nursing",
    title: "BS Nursing (Generic)",
    category: "Nursing Degree",
    type: "degree",
    duration: "4 Years (8 Semesters)",
    eligibility: "F.Sc Pre-Medical (Minimum 50% Marks)",
    accreditation: "Recognized by PNMC & NEBP",
    image: "/images/1.avif",
    description: "Comprehensive 4-year professional clinical nursing program preparing students for state licensure and hospital leadership.",
    highlights: ["Clinical Rotations in Teaching Hospitals", "PNMC Approved Curriculum", "100% Job Placement Assistance"],
    badgeColor: "bg-teal-700"
  },
  {
    id: "post-rn",
    title: "Post RN BSN",
    category: "Nursing Degree",
    type: "degree",
    duration: "2 Years",
    eligibility: "Diploma in Nursing + Midwifery with 2 Years Clinical Exp",
    accreditation: "Recognized by PNMC",
    image: "/images/2.avif",
    description: "Designed for registered diploma nurses aiming to upgrade their academic credentials to a recognized Bachelor of Science degree.",
    highlights: ["Evening / Weekend Flexible Schedules", "Hospital Leadership Focus", "Advanced Nursing Specialization"],
    badgeColor: "bg-teal-700"
  },

  // ================= NURSING DIPLOMA PROGRAMS =================
  {
    id: "lhv",
    title: "LHV (Lady Health Visitor)",
    category: "Diploma Programs",
    type: "diploma",
    duration: "2 Years",
    eligibility: "Matric Science (Minimum 45% Marks)",
    accreditation: "Affiliated with NEBP & Punjab Nursing Board",
    image: "/images/3.avif",
    description: "Specialized maternal, newborn, and primary healthcare training for maternal clinics and rural health centers.",
    highlights: ["Maternal & Child Health Training", "Community Health Fieldwork", "NEBP Board Certified"],
    badgeColor: "bg-emerald-600"
  },
  {
    id: "cmw",
    title: "CMW (Community Midwife)",
    category: "Diploma Programs",
    type: "diploma",
    duration: "2 Years",
    eligibility: "Matric (Science / Arts with Min 45%)",
    accreditation: "Affiliated with NEBP",
    image: "/images/4.avif",
    description: "Empowering female healthcare workers with safe delivery, neonatal care, and rural health administration skills.",
    highlights: ["Hands-on Labor Room Experience", "Neonatal Resuscitation Training", "Government Registry Eligible"],
    badgeColor: "bg-emerald-600"
  },
  {
    id: "cna",
    title: "CNA (Certified Nursing Assistant)",
    category: "Diploma Programs",
    type: "diploma",
    duration: "2 Years",
    eligibility: "Matric (Science / Arts with Min 45%)",
    accreditation: "Approved by NEBP",
    image: "/images/5.avif",
    description: "Foundation program covering vital signs monitoring, patient bedside assistance, and infection control.",
    highlights: ["Bedside Patient Care Mastery", "Emergency Room Support Skills", "Quick Employment Entry"],
    badgeColor: "bg-emerald-600"
  },

  // ================= BS PROGRAMS =================
  {
    id: "bscs",
    title: "BS Computer Science (BSCS)",
    category: "BS Programs",
    type: "bs",
    duration: "4 Years (8 Semesters)",
    eligibility: "F.Sc Pre-Eng / ICS / F.Sc Pre-Med with Add. Math (Min 50%)",
    accreditation: "Affiliated with UE / IUB",
    image: "/images/6.avif",
    description: "Industry-aligned software development program covering AI, Cloud Computing, Full-Stack Dev, and Data Structures.",
    highlights: ["State-of-the-Art High-Spec Labs", "Final Year Capstone Industry Projects", "Freelancing & Software House Mentorship"],
    badgeColor: "bg-blue-800"
  },
  {
    id: "bsit",
    title: "BS Information Technology (BSIT)",
    category: "BS Programs",
    type: "bs",
    duration: "4 Years (8 Semesters)",
    eligibility: "Intermediate with Mathematics / Computing (Min 50%)",
    accreditation: "Affiliated with UE / IUB",
    image: "/images/7.avif",
    description: "Focuses on network administration, cloud infrastructure, cyber security fundamentals, and enterprise systems.",
    highlights: ["Cisco & Linux Server Practicals", "Cyber Security & Cloud Labs", "Enterprise IT Architecture"],
    badgeColor: "bg-blue-800"
  },
  {
    id: "bba",
    title: "BBA (Business Administration)",
    category: "BS Programs",
    type: "bs",
    duration: "4 Years (8 Semesters)",
    eligibility: "FA / F.Sc / I.Com / ICS (Min 45-50%)",
    accreditation: "Affiliated with IUB / UE",
    image: "/images/8.avif",
    description: "Develops executive decision-making, digital marketing strategy, corporate finance, and entrepreneurial capability.",
    highlights: ["Corporate Internship Program", "FinTech & Digital Marketing Tracks", "Case Study Methodology"],
    badgeColor: "bg-blue-800"
  },
  {
    id: "bs-english",
    title: "BS English (Language & Literature)",
    category: "BS Programs",
    type: "bs",
    duration: "4 Years (8 Semesters)",
    eligibility: "Intermediate in any discipline (Min 45%)",
    accreditation: "Affiliated with UE / IUB",
    image: "/images/9.avif",
    description: "Rigorous study of global literature, linguistics, professional communication, and creative writing.",
    highlights: ["Language Research & Phonetics Lab", "Content Creation & Technical Writing", "Civil Service & Academic Career Path"],
    badgeColor: "bg-blue-800"
  },

  // ================= ADP (ASSOCIATE DEGREE) PROGRAMS =================
  {
    id: "adp-cs",
    title: "ADP Computer Science",
    category: "ADP Programs",
    type: "adp",
    duration: "2 Years (4 Semesters)",
    eligibility: "ICS / F.Sc with Math (Min 45%)",
    accreditation: "Affiliated with University of Education / IUB",
    image: "/images/10.avif",
    description: "Fast-track 2-year university associate degree with immediate lateral entry into 5th semester BSCS.",
    highlights: ["Direct Entry to BS 5th Semester", "Web & App Development Focus", "Affordable Semester Fee"],
    badgeColor: "bg-indigo-700"
  },
  {
    id: "adp-it",
    title: "ADP Information Technology",
    category: "ADP Programs",
    type: "adp",
    duration: "2 Years (4 Semesters)",
    eligibility: "Intermediate with Computer / Math",
    accreditation: "Affiliated with UE / IUB",
    image: "/images/11.avif",
    description: "Practical curriculum covering system maintenance, database operations, and networking basics.",
    highlights: ["Hands-on Lab Work", "Path to BSIT 5th Semester", "Job-Ready Technical Skills"],
    badgeColor: "bg-indigo-700"
  },
  {
    id: "adp-bba",
    title: "ADP Business Administration",
    category: "ADP Programs",
    type: "adp",
    duration: "2 Years (4 Semesters)",
    eligibility: "Intermediate (FA / F.Sc / I.Com / ICS)",
    accreditation: "Affiliated with UE / IUB",
    image: "/images/12.avif",
    description: "Two-year foundation in accounting, marketing, sales management, and office business software.",
    highlights: ["Transferable to 5th Sem BBA", "Banking & Retail Skillset", "Business Communications"],
    badgeColor: "bg-indigo-700"
  },
  {
    id: "adp-english",
    title: "ADP English",
    category: "ADP Programs",
    type: "adp",
    duration: "2 Years (4 Semesters)",
    eligibility: "Intermediate in any group",
    accreditation: "Affiliated with UE / IUB",
    image: "/images/13.avif",
    description: "Focused training on functional English, spoken proficiency, linguistics, and literature essentials.",
    highlights: ["Spoken English Fluency", "Direct Entry to BS English 5th Sem", "Grammar & Academic Writing"],
    badgeColor: "bg-indigo-700"
  },





// 🎯 6. POST ADP PROGRAMS (Flyer Ke Mutabiq 100% Data Added!)
  {
    slug: "post-adp-cs",
    id: "post-adp-cs",
    title: "Post ADP BS Computer Science",
    category: "Post ADP Programs",
    categorySlug: "post-adp",
    duration: "2 Years (5th to 8th Semester)",
    eligibility: "ADP in Computer Science / IT / Equivalent 14-year education with 2.0+ CGPA or 45% marks.",
    recognizedBy: "University of Education / IUB & HEC",
    description: "Bridge program converting your 2-year Associate Degree into a full-fledged 16-year BS Computer Science degree.",
    seats: "30 Seats",
    scope: "Full-Stack Software Engineer, AI Developer, Cloud Architect, Eligible for MS/MPhil & Grade-17 Government Jobs.",
    highlights: [
      "Direct Lateral Admission into 5th Semester BSCS",
      "Saves 2 Years by Utilizing Prior ADP Credits",
      "Hands-on Software Development & AI Project Work",
      "Complete 16-Year HEC Recognized Bachelor Degree"
    ],
    subjects: ["Advanced Algorithms", "Artificial Intelligence", "Final Year Capstone Project", "Distributed Databases", "Web Frameworks"]
  },
  {
    slug: "post-adp-bba",
    id: "post-adp-bba",
    title: "Post ADP BBA (Business Administration)",
    category: "Post ADP Programs",
    categorySlug: "post-adp",
    duration: "2 Years (5th to 8th Semester)",
    eligibility: "ADP in Business / Commerce / Equivalent 14-year degree with minimum 45% marks.",
    recognizedBy: "University of Education / IUB & HEC",
    description: "Lateral entry program upgrading 2-year business and commerce diplomas into an official 16-year BBA degree.",
    seats: "30 Seats",
    scope: "Corporate Banking, Financial Management, Marketing Lead, Supply Chain Executive, Eligible for MBA / MS Programs.",
    highlights: [
      "Direct 5th Semester Admission for ADP / B.Com Graduates",
      "Upgrades Credential to Full 16-Year BBA Degree",
      "Corporate Finance & Strategic Marketing Modules",
      "High Corporate Employability in Banking & Multinational Firms"
    ],
    subjects: ["Corporate Finance", "Strategic Marketing", "Business Analytics", "Operations Management", "Business Research"]
  },
  {
    slug: "post-adp-english",
    id: "post-adp-english",
    title: "Post ADP BS English (Language & Literature)",
    category: "Post ADP Programs",
    categorySlug: "post-adp",
    duration: "2 Years (5th to 8th Semester)",
    eligibility: "ADP in English / Arts / Humanities with minimum 45% marks.",
    recognizedBy: "University of Education / IUB & HEC",
    description: "Bridge program upgrading 2-year Associate Degree into a full 4-year (16-Year equivalent) BS English degree.",
    seats: "30 Seats",
    scope: "College Lecturer, CSS/PMS Competitive Exams, Content Strategist, Public Relations Officer, Eligible for MPhil English.",
    highlights: [
      "Direct Lateral Transition into BS English 5th Semester",
      "Special Focus on CSS / PMS Competitive Syllabus",
      "Advanced Linguistics & Modern Research Methodologies",
      "Eligible for Government College Lecturer PPSC Exams"
    ],
    subjects: ["Applied Linguistics", "Literary Theory", "Post-Colonial Literature", "Research Thesis", "Stylistics"]
  }
];







// Slider data for Hero Section
export const heroSlidesData = [
  {
    id: 1,
    tag: "Admissions Open 2026",
    title: "Excellence in Nursing & Healthcare Education",
    subtitle: "Accredited by PNMC & NEBP. Training the next generation of compassionate nurses and certified midwives with intensive clinical rotations.",
    image: "/images/q.jpeg",
    primaryCta: "Explore Nursing",
    primaryLink: "#nursing",
    secondaryCta: "Apply for 2026",
    secondaryLink: "#contact"
  },
  {
    id: 2,
    tag: "Faculty of Computing & IT",
    title: "Build Your Career in Computer Science & IT",
    subtitle: "University affiliated BSCS & BSIT programs with cutting-edge computer labs, modern coding syllabus, and industry project supervision.",
    image: "/images/15.avif",
    primaryCta: "Explore BSCS & IT",
    primaryLink: "#bs-programs",
    secondaryCta: "Download Prospectus",
    secondaryLink: "#contact"
  },
  {
    id: 3,
    tag: "Associate Degree Programs (ADP)",
    title: "Affordable 2-Year Fast Track Degrees",
    subtitle: "Save time and cost with Associate Degrees in CS, IT, BBA, and English with direct lateral progression into 5th semester BS degrees.",
    image: "/images/16.avif",
    primaryCta: "View ADP Programs",
    primaryLink: "#adp-programs",
    secondaryCta: "Campus Visit",
    secondaryLink: "#contact"
  }
];