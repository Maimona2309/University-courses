import { Course } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'bs-cs',
    name: 'Bachelor of Science in Computer Science',
    shortName: 'BS Computer Science',
    abbreviation: 'BS CS',
    duration: '4 Years (8 Semesters)',
    creditHours: 134,
    eligibility: 'Intermediate (HSSC / Pre-Engineering / ICS / A-Levels with Math) with minimum 50% marks.',
    shortDescription: 'A degree focused on programming, software development, databases, computer networks, AI, and related areas.',
    description: 'The Bachelor of Science in Computer Science (BS CS) prepares students for high-impact careers in computing technology. The program integrates core theoretical concepts of computing with modern industry practices, including object-oriented programming, cloud architecture, machine learning, and secure distributed software engineering.',
    department: 'Department of Computer Science & Information Technology',
    faculty: 'Faculty of Computing & Information Technology',
    category: 'Computing',
    iconType: 'computer',
    themeColor: {
      primary: '#2563EB', // Blue-600
      bgLight: '#EFF6FF',
      badgeBg: '#DBEAFE',
      badgeText: '#1D4ED8',
      accent: '#3B82F6',
    },
    mainSubjects: [
      'Programming Fundamentals (C++ / Kotlin)',
      'Object Oriented Programming',
      'Data Structures & Algorithms',
      'Database Systems & SQL',
      'Operating Systems',
      'Computer Networks & Protocols',
      'Artificial Intelligence & Machine Learning',
      'Software Engineering & Design Patterns',
      'Web Technologies & Mobile App Dev',
      'Computer Architecture & Assembly'
    ],
    careerOpportunities: [
      'Software Developer / Full-Stack Engineer',
      'Mobile Application Developer (Android / iOS)',
      'AI & Machine Learning Engineer',
      'Database Administrator & Cloud Engineer',
      'DevOps Specialist & Systems Architect',
      'Cybersecurity & Network Analyst',
      'Tech Entrepreneur / Startup Founder'
    ],
    semesterOutline: [
      { semester: 1, subjects: ['Programming Fundamentals', 'Calculus & Analytical Geometry', 'English Composition', 'Intro to ICT', 'Islamic Studies'] },
      { semester: 2, subjects: ['Object Oriented Programming', 'Digital Logic Design', 'Discrete Structures', 'Communication Skills', 'Pakistan Studies'] },
      { semester: 3, subjects: ['Data Structures & Algorithms', 'Computer Organization & Assembly', 'Linear Algebra', 'Technical Writing'] },
      { semester: 4, subjects: ['Operating Systems', 'Database Systems', 'Design & Analysis of Algorithms', 'Probability & Statistics'] },
      { semester: 5, subjects: ['Computer Networks', 'Software Engineering', 'Theory of Automata', 'Web Technologies'] },
      { semester: 6, subjects: ['Artificial Intelligence', 'Information Security', 'Mobile Application Development', 'Elective I'] },
      { semester: 7, subjects: ['Cloud Computing', 'Final Year Project - Part I', 'Parallel & Distributed Computing', 'Elective II'] },
      { semester: 8, subjects: ['Final Year Project - Part II', 'Professional Ethics', 'Compiler Construction', 'Elective III'] }
    ],
    keyHighlights: [
      'State-of-the-art GPU & AI Computing Labs',
      'Hands-on Capstone Industry Project with tech mentors',
      'Mandatory summer corporate internship placement',
      'Recognized by National Computing Education Accreditation Council (NCEAC)'
    ],
    tuitionFeePerSemester: '$1,350 / semester',
    totalSeats: 150,
    accreditation: 'NCEAC / HEC Approved Grade W (Highest Category)'
  },
  {
    id: 'bs-zoology',
    name: 'Bachelor of Science in Zoology',
    shortName: 'BS Zoology',
    abbreviation: 'BS ZOO',
    duration: '4 Years (8 Semesters)',
    creditHours: 130,
    eligibility: 'Intermediate Pre-Medical (F.Sc / A-Levels Biology / equivalent) with minimum 50% marks.',
    shortDescription: 'Study animal diversity, molecular genetics, ecology, wildlife conservation, physiology, and evolutionary adaptations.',
    description: 'The Bachelor of Science in Zoology is dedicated to the scientific investigation of animal life from microscopic cellular physiology to broad ecosystem biodiversity. The program blends comprehensive laboratory dissections, microscopy, histology, and molecular genetics with wildlife field expeditions in national parks and conservation sanctuaries.',
    department: 'Department of Zoology & Biological Sciences',
    faculty: 'Faculty of Life Sciences & Environmental Studies',
    category: 'Natural Sciences',
    iconType: 'biology',
    themeColor: {
      primary: '#059669', // Emerald-600
      bgLight: '#ECFDF5',
      badgeBg: '#D1FAE5',
      badgeText: '#047857',
      accent: '#10B981',
    },
    mainSubjects: [
      'Animal Diversity: Invertebrates & Chordates',
      'Cell & Molecular Biology',
      'Principles of Genetics & Evolution',
      'Animal Physiology & Endocrinology',
      'Wildlife Ecology & Conservation Biology',
      'General & Applied Entomology',
      'Developmental Biology & Embryology',
      'Biostatistics & Research Methodology',
      'Environmental Biology & Toxicology',
      'Parasitology & Immunology'
    ],
    careerOpportunities: [
      'Wildlife Biologist & Conservation Officer',
      'Ecologist & Environmental Impact Assessor',
      'Zoological Park / Safari Curator',
      'Research Scientist in Pharmaceutical Labs',
      'Veterinary Diagnostic Technician',
      'Marine Biology & Fisheries Consultant',
      'Lecturer / Academic Researcher',
      'Forensic Entomologist & Pest Control Expert'
    ],
    semesterOutline: [
      { semester: 1, subjects: ['Animal Diversity (Invertebrates)', 'Chemistry I', 'English Comprehension', 'Biomath', 'Islamic Studies'] },
      { semester: 2, subjects: ['Animal Diversity (Chordates)', 'Chemistry II', 'Communication Skills', 'Introduction to Computer Applications'] },
      { semester: 3, subjects: ['Cell & Molecular Biology', 'Plant Physiology', 'Biostatistics', 'Environmental Biology'] },
      { semester: 4, subjects: ['Animal Physiology & Biochemistry', 'Genetics', 'Ecology', 'Microbiology'] },
      { semester: 5, subjects: ['Developmental Biology', 'Evolution & Zoogeography', 'General Entomology', 'Parasitology'] },
      { semester: 6, subjects: ['Wildlife Management & Conservation', 'Endocrinology', 'Immunology', 'Research Methods in Biology'] },
      { semester: 7, subjects: ['Fisheries & Aquaculture', 'Field Expedition & Ecology Project', 'Special Elective I', 'Biotechnology'] },
      { semester: 8, subjects: ['BS Thesis / Research Project', 'Animal Behavior (Ethology)', 'Special Elective II', 'Scientific Seminar'] }
    ],
    keyHighlights: [
      'Modern Zoology Research & Histopathology Labs',
      'Annual Field Ecology trips to Marine & Alpine reserves',
      'Collaborations with World Wildlife Fund (WWF) and National Parks',
      'Specimen preservation museum on university campus'
    ],
    tuitionFeePerSemester: '$1,100 / semester',
    totalSeats: 90,
    accreditation: 'Higher Education Commission (HEC) Life Sciences Council'
  },
  {
    id: 'bs-english',
    name: 'Bachelor of Science in English (Language & Literature)',
    shortName: 'BS English',
    abbreviation: 'BS ENG',
    duration: '4 Years (8 Semesters)',
    creditHours: 128,
    eligibility: 'Intermediate (FA / F.Sc / ICS / I.Com / A-Levels) with minimum 45% marks.',
    shortDescription: 'Explore global literature, critical discourse, applied linguistics, creative writing, and corporate communications.',
    description: 'The Bachelor of Science in English fosters deep linguistic mastery, analytical acuity, and creative expression. Students investigate timeless literary works from Chaucer and Shakespeare to postcolonial and modern digital prose, combined with contemporary applied linguistics, phonetics, media rhetoric, and digital copywriting.',
    department: 'Department of English Language & Literary Studies',
    faculty: 'Faculty of Arts & Humanities',
    category: 'Humanities',
    iconType: 'book',
    themeColor: {
      primary: '#7C3AED', // Violet-600
      bgLight: '#F5F3FF',
      badgeBg: '#EDE9FE',
      badgeText: '#6D28D9',
      accent: '#8B5CF6',
    },
    mainSubjects: [
      'History of English Literature & Criticism',
      'Classical & Modern Poetry',
      'Drama & Theatre Studies (Shakespeare to Modern)',
      'The English Novel & Short Fiction',
      'Introduction to Linguistics & Phonetics',
      'Sociolinguistics & Psycholinguistics',
      'Discourse Analysis & Media Rhetoric',
      'Creative Writing: Fiction, Non-Fiction & Scriptwriting',
      'Postcolonial Literature & World Voices',
      'Corporate Communication & Technical Editing'
    ],
    careerOpportunities: [
      'Content Strategist & Senior Copywriter',
      'Book Editor & Literary Publishing Manager',
      'Corporate Communications & PR Specialist',
      'Journalist, Feature Writer & Columnist',
      'English Language Trainer & University Lecturer',
      'Technical Writer & Documentation Engineer',
      'Diplomatic Foreign Affairs & Civil Services Officer',
      'Brand Storyteller & Digital Media Producer'
    ],
    semesterOutline: [
      { semester: 1, subjects: ['Reading & Study Skills', 'History of English Literature I', 'Classical Poetry', 'Philosophy of Language', 'Islamic Studies'] },
      { semester: 2, subjects: ['Academic Writing', 'History of English Literature II', 'Renaissance & Elizabethan Drama', 'Intro to Linguistics'] },
      { semester: 3, subjects: ['Phonetics & Phonology', '18th & 19th Century Poetry', 'The Rise of the Novel', 'Sociology & Culture'] },
      { semester: 4, subjects: ['Morphology & Syntax', 'Modern Drama', 'Victorian & Modern Fiction', 'Literary Criticism'] },
      { semester: 5, subjects: ['Semantics & Pragmatics', 'American Literature', 'Postcolonial Literature', 'Creative Writing Workshop'] },
      { semester: 6, subjects: ['Discourse Analysis', 'World Literature in Translation', 'Stylistics', 'Research Methodology'] },
      { semester: 7, subjects: ['Applied Linguistics & TESOL', 'Pakistani Literature in English', 'Technical & Business Writing', 'Elective I'] },
      { semester: 8, subjects: ['Graduation Thesis / Capstone Portfolio', 'Digital Humanities & Media Studies', 'Elective II', 'Public Speaking Seminar'] }
    ],
    keyHighlights: [
      'Dedicated Digital Humanities & Language Acquisition Lab',
      'Student literary magazine & annual dramatic theatrical production',
      'Workshops by visiting poets, published novelists, and media directors',
      'Internships with international publishing houses and advertising agencies'
    ],
    tuitionFeePerSemester: '$1,050 / semester',
    totalSeats: 100,
    accreditation: 'National Curriculum Revision Committee (NCRC) Approved'
  },
  {
    id: 'bs-mathematics',
    name: 'Bachelor of Science in Mathematics',
    shortName: 'BS Mathematics',
    abbreviation: 'BS MATH',
    duration: '4 Years (8 Semesters)',
    creditHours: 132,
    eligibility: 'Intermediate with Mathematics (Pre-Engineering / ICS / General Science / A-Levels) with minimum 50% marks.',
    shortDescription: 'Master abstract algebra, mathematical modeling, calculus, statistics, cryptography, and computational analytics.',
    description: 'The Bachelor of Science in Mathematics empowers students with profound logical reasoning, quantitative deduction, and algorithmic problem-solving abilities. The curriculum links rigorous theoretical mathematics—such as topology, abstract algebra, and differential geometry—with high-demand computational applications in data science, quantitative finance, and cryptography.',
    department: 'Department of Mathematical Sciences',
    faculty: 'Faculty of Basic & Applied Sciences',
    category: 'Pure Sciences',
    iconType: 'math',
    themeColor: {
      primary: '#D97706', // Amber-600
      bgLight: '#FFFBEB',
      badgeBg: '#FEF3C7',
      badgeText: '#B45309',
      accent: '#F59E0B',
    },
    mainSubjects: [
      'Calculus I, II & Multivariable Calculus',
      'Linear Algebra & Matrix Theory',
      'Ordinary & Partial Differential Equations',
      'Real Analysis & Complex Analysis',
      'Abstract Algebra & Group Theory',
      'Numerical Methods with MATLAB & Python',
      'Probability Theory & Mathematical Statistics',
      'Discrete Mathematics & Graph Theory',
      'Cryptography & Mathematical Security',
      'Mathematical Modeling & Optimization Techniques'
    ],
    careerOpportunities: [
      'Quantitative Analyst (Quant) in Investment Banking',
      'Data Scientist & Machine Learning Statistician',
      'Cryptography Specialist & Security Analyst',
      'Operations Research Analyst & Optimizer',
      'Actuary / Risk Modeling Specialist in Insurance',
      'Algorithm Engineer & Scientific Software Developer',
      'University Professor & Pure Math Researcher',
      'Aerospace & Defense Ballistics Modeler'
    ],
    semesterOutline: [
      { semester: 1, subjects: ['Calculus I', 'Physics I (Mechanics)', 'Linear Algebra', 'English Composition', 'Intro to Computer Programming'] },
      { semester: 2, subjects: ['Calculus II', 'Physics II (Electricity & Magnetism)', 'Vector Analysis', 'Discrete Mathematics', 'Islamic Studies'] },
      { semester: 3, subjects: ['Multivariable Calculus', 'Ordinary Differential Equations', 'Algebraic Structures', 'Probability & Statistics'] },
      { semester: 4, subjects: ['Partial Differential Equations', 'Real Analysis I', 'Numerical Analysis I (MATLAB)', 'Applied Mechanics'] },
      { semester: 5, subjects: ['Complex Analysis', 'Real Analysis II', 'Group Theory', 'Mathematical Statistics'] },
      { semester: 6, subjects: ['Topology', 'Ring & Field Theory', 'Numerical Analysis II', 'Differential Geometry'] },
      { semester: 7, subjects: ['Mathematical Modeling', 'Functional Analysis', 'Operations Research', 'Elective I (Cryptography/Finance)'] },
      { semester: 8, subjects: ['Final Year Research Thesis', 'Fluid Dynamics / Graph Theory', 'Elective II', 'Computational Math Seminar'] }
    ],
    keyHighlights: [
      'Computational Math Lab equipped with MATLAB, Mathematica, and Python',
      'Interdisciplinary research track in Quantitative Finance and Cryptography',
      'Regular guest lectures by international mathematicians and actuarial leaders',
      'High placement rate in global postgraduate fellowships and data science roles'
    ],
    tuitionFeePerSemester: '$1,150 / semester',
    totalSeats: 80,
    accreditation: 'HEC Mathematical Sciences Accreditation Committee'
  },
  {
    id: 'bs-economics',
    name: 'Bachelor of Science in Economics',
    shortName: 'BS Economics',
    abbreviation: 'BS ECON',
    duration: '4 Years (8 Semesters)',
    creditHours: 130,
    eligibility: 'Intermediate (Pre-Eng / Pre-Medical / ICS / I.Com / Humanities / A-Levels) with minimum 50% marks.',
    shortDescription: 'Analyze micro/macroeconomics, global market trends, fiscal policy, econometric modeling, and international finance.',
    description: 'The Bachelor of Science in Economics trains students to analyze and solve complex economic challenges in modern societies. The program blends rigorous economic theory with empirical data science, econometrics (using Stata and R), financial markets, behavioral economics, and strategic public policy design for developing and emerging economies.',
    department: 'Department of Economics & Development Policy',
    faculty: 'Faculty of Social Sciences & Management Studies',
    category: 'Social Sciences',
    iconType: 'economics',
    themeColor: {
      primary: '#0D9488', // Teal-600
      bgLight: '#F0FDFA',
      badgeBg: '#CCFBF1',
      badgeText: '#0F766E',
      accent: '#14B8A6',
    },
    mainSubjects: [
      'Principles of Microeconomics & Macroeconomics',
      'Intermediate & Advanced Microeconomic Theory',
      'Intermediate & Advanced Macroeconomic Theory',
      'Mathematical Economics & Optimization',
      'Introductory & Applied Econometrics (Stata / R)',
      'Money, Banking & Financial Institutions',
      'International Trade & Balance of Payments',
      'Development Economics & Poverty Alleviation',
      'Public Finance & Fiscal Policy',
      'Behavioral & Experimental Economics'
    ],
    careerOpportunities: [
      'Economic Policy Analyst & Think Tank Researcher',
      'Investment Banking & Equity Research Analyst',
      'Financial Risk & Regulatory Consultant',
      'Econometrician & Market Intelligence Lead',
      'Central Bank & Ministry of Finance Officer',
      'International Development Consultant (UN / World Bank)',
      'Management Consultant & Corporate Strategist',
      'Trade & Tariff Specialist in Multinational Corporations'
    ],
    semesterOutline: [
      { semester: 1, subjects: ['Principles of Microeconomics', 'Calculus for Economics', 'English Composition', 'Intro to ICT', 'Islamic Studies'] },
      { semester: 2, subjects: ['Principles of Macroeconomics', 'Linear Algebra for Economics', 'Communication Skills', 'Introduction to Sociology'] },
      { semester: 3, subjects: ['Intermediate Microeconomics', 'Mathematical Economics I', 'Economic Statistics I', 'Financial Accounting'] },
      { semester: 4, subjects: ['Intermediate Macroeconomics', 'Mathematical Economics II', 'Economic Statistics II', 'Issues in Pakistan Economy'] },
      { semester: 5, subjects: ['Econometrics I (Cross-Sectional)', 'Money & Banking', 'Development Economics', 'Environmental Economics'] },
      { semester: 6, subjects: ['Econometrics II (Time Series)', 'International Trade Theory', 'Public Sector Economics', 'Research Methodology'] },
      { semester: 7, subjects: ['Applied Econometrics with Stata & R', 'Corporate Finance', 'Behavioral Economics', 'Elective I'] },
      { semester: 8, subjects: ['BS Economics Capstone Research Thesis', 'Global Financial Architecture', 'Policy Workshop', 'Elective II'] }
    ],
    keyHighlights: [
      'Applied Econometrics & Data Analytics Lab with Bloomberg Terminal access',
      'Annual Policy Simulation Challenge with Government ministries',
      'Guest lectures by former central bank governors and World Bank economists',
      'Direct pipeline to leading international master’s & corporate graduate schemes'
    ],
    tuitionFeePerSemester: '$1,200 / semester',
    totalSeats: 110,
    accreditation: 'National Business Education & Social Sciences Council'
  }
];
