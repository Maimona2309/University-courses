export interface Course {
  id: string;
  name: string; // e.g. "Bachelor of Science in Computer Science"
  shortName: string; // e.g. "BS Computer Science"
  abbreviation: string; // e.g. "BS CS"
  duration: string; // "4 Years (8 Semesters)"
  creditHours: number; // e.g. 132
  eligibility: string; // "Intermediate (Pre-Eng / ICS / A-Levels) with min 50% marks"
  shortDescription: string;
  description: string;
  department: string;
  faculty: string;
  category: 'Computing' | 'Natural Sciences' | 'Humanities' | 'Pure Sciences' | 'Social Sciences';
  iconType: 'computer' | 'biology' | 'book' | 'math' | 'economics';
  themeColor: {
    primary: string;
    bgLight: string;
    badgeBg: string;
    badgeText: string;
    accent: string;
  };
  mainSubjects: string[];
  careerOpportunities: string[];
  semesterOutline: {
    semester: number;
    subjects: string[];
  }[];
  keyHighlights: string[];
  tuitionFeePerSemester: string;
  totalSeats: number;
  accreditation: string;
}

export interface StudentUser {
  name: string;
  email: string;
  rollNumber?: string;
  interestedDegree?: string;
}
