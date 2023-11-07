const section_01 = [
  {
    questionID: "01.01",
    question:
      "Who is overall responsible for working-life linkages at the UOA?",
    answers: [
      "UOA director",
      "Specially appointed teacher or other staff",
      "Other",
      "I do not know",
    ],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1,1.5,0.5]
  },
  {
    questionID: "01.02",
    question: "Please elaborate.",
    dependOn: true,
    dependingQuestion: "01.01",
    dependingAnswer: ["Other"],
    score:[1],
  },
  {
    questionID: "01.03",
    question:
      "What functions are involved in the planning of work-integrated learning at the UoA?",
    answers: [
      "UOA director",
      "Teachers",
      "Students",
      "Alumni",
      "External contacts",
      "Other",
    ],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[1.5,0.5, 2,1,1,0.6],

  },
  {
    questionID: "01.04",
    question: "Please elaborate.",
    dependOn: true,
    dependingQuestion: "01.03",
    dependingAnswer: ["Other"],
    score:[1],
  },
  {
    questionID: "01.05",
    question:
      "Is work-integrated learning at the UoA coordinated with other education programmes within or outside the university?",
    answers: ["Yes, regularly", "Yes, occasionally", "No"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[1.5,1,0.6],

  },
  {
    questionID: "01.06",
    question: "What does the coordination entail?",
    answers: [
      "Overall planning",
      "Resource sharing/pooling",
      "Evaluations",
      "Other",
    ],
    dependOn: true,
    dependingQuestion: "01.05",
    dependingAnswer: ["Yes, occasionally"],
    scores:[1.5,0.5,1,2],
  },
  {
    questionID: "01.07",
    question: "Please elaborate.",
    dependOn: true,
    dependingQuestion: "01.06",
    dependingAnswer: ["Other"],
    scores:[1]
  },
  {
    questionID: "01.08",
    question:
      "Is there an earmarked budget at the UoA for work-integrated integration?",
    answers: ["Yes, for staff time", "Yes, for direct costs", "No"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[1.5,0.5,1],

  },
  {
    questionID: "01.09",
    question:
      "Is there additional funding for work-integrated learning at any higher administrative level for which the UoA can apply?",
    answers: ["Yes, regularly", "Yes, occasionally", "No", "I do not know"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1.5,1,2],

  },
  {
    questionID: "01.10",
    question:
      "Is work-integrated learning a separate budget line in the UoA's financial records and reports?",
    answers: ["Yes", "No", "I do not know"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[0.5,1],

  },
];

const section_02 = [
  {
    questionID: "02.01",
    question:
      "Has the UoA defined aims and objectives for work-integrated learning?",
    answers: ["Yes, several", "Yes, one", "No ", "Do not know"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1,0.5,1]

  },
  {
    questionID: "02.02",
    question: "To what extent are the aims and objectives met?",
    answers: [
      "Completely",
      "To a large extent",
      "To a small extent",
      "Not at all",
    ],
    dependOn: true,
    dependingQuestion: "02.01",
    dependingAnswer: ["Yes, several", "Yes, one"],
    scores:[0.5,1,2,1]

  },
  {
    questionID: "02.03",
    question:
      "Does the UoA have a strategy for achieving the aims and objectives?",
    answers: ["Yes", "No"],
    dependOn: true,
    dependingQuestion: "02.01",
    dependingAnswer: ["Yes, several", "Yes, one"],
    scores:[2,1]

  },
  {
    questionID: "02.04",
    question: "How often is the strategy revised?",
    answers: [
      "Every year or more often",
      "Every two years",
      "Less than every second year",
    ],
    dependOn: true,
    dependingQuestion: "02.03",
    dependingAnswer: ["Yes"],
    scores:[2,0.7,1]

  },
  {
    questionID: "02.05",
    question:
      "When do the students get their first information about work-integrated learning in their education?",
    answers: [
      "In their first year",
      "In their second year",
      "In their third year or later",
    ],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[0.7,1.5,0]

  },
  {
    questionID: "02.06",
    question:
      "Is work-integrated learning evaluated at the UoA? (Either as part of a broader assessment or separately)",
    answers: ["Yes, once a year or more often", "Yes, occasionally", "No"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[0,0.7,1.5]

  },
  {
    questionID: "02.07",
    question: "Who is involved in the assessments?",
    answers: [
      "Students",
      "Teachers",
      "UoA director",
      "Director of Studies",
      "A UEC office",
      "External partners",
      "Other",
    ],
    dependOn: true,
    dependingQuestion: "02.06",
    dependingAnswer: ["Yes, once a year or more often", "Yes, occasionally"],
     scores:[2,1,0.5,1,2,1.5,0]
  },
  {
    questionID: "02.08",
    question: "What other role(s) are involved?",
    dependOn: true,
    dependingQuestion: "02.07",
    dependingAnswer: ["Other"],
     scores:[1]

  },
  {
    questionID: "02.09",
    question: "Who uses the assessment results?",
    answers: [
      "Program advisory board",
      "Instructor team",
      "Director of Studies",
      "Management",
      "Other",
    ],
    dependOn: true,
    dependingQuestion: "02.06",
    dependingAnswer: ["Yes, once a year or more often", "Yes, occasionally"],
     scores:[1,1.2,2,1.5,0]

  },
  {
    questionID: "02.10",
    question: "Please indicate what context(s) the results are used in.",
    dependOn: true,
    dependingQuestion: "02.09",
    dependingAnswer: ["Other"],
     scores:[1]

  },
  {
    questionID: "02.11",
    question:
      "How does the UoA ensure that the number of work-integrated learning activities is appropriate?",
    answers: [
      "Through advisory bodies",
      "Through dialogue with teachers",
      "Through dialogue with external partners",
      "Through dialogue with students",
      "In evaluations",
      "In other ways",
    ],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1.5,0,1,1.2,3],
  },
  {
    questionID: "02.12",
    question: "Please elaborate.",
    dependOn: true,
    dependingQuestion: "02.11",
    dependingAnswer: ["In other way"],
    scores:[1],

  },
  {
    questionID: "02.13",
    question:
      "How does the UoA ensure that the character of work-integrated learning activities is appropriate in terms of types, regularity, and variation?",
    answers: [
      "Through advisory bodies",
      "Through dialogue with teachers",
      "Through dialogue with external partners",
      "In discussions with students",
      "Included in evaluations",
      "Other way",
    ],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1.5,0,1,1.2,3],

  },
  {
    questionID: "02.14",
    question: "Please elaborate.",
    dependOn: true,
    dependingQuestion: "02.13",
    dependingAnswer: ["Other way"],
    scores:[1],

  },
  {
    questionID: "02.15",
    question:
      "Does the UoA follow up with alums to investigate what long-term results the work-integrated learning activities led to?",
    answers: ["Yes, annually", "Yes, biennially", "Yes, occasionally", "No"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[0,1,1.2,3],

  },
  {
    questionID: "02.16",
    question:
      "Does the UoA follow up with employers/external partners to investigate what long-term results the work-integrated learning activities lead to?",
    answers: ["Yes, annually", "Yes, biennially", "Yes, occasionally", "No"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1.5,3,1],

  },
];

const section_03 = [
  {
    questionID: "03.01",
    question:
      "Who provides ideas for work-integrated learning activities (e.g., ideas about activities, content or invitees)? Distribute 100% among the following:",
    answers: [
      "Students",
      "UoA director",
      "Teachers/staff",
      "External contacts",
      "Others",
    ],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1.5,0,3,1],

  },
  {
    questionID: "03.02",
    question: "Please elaborate.",
    dependOn: true,
    dependingQuestion: "03.01",
    dependingAnswer: ["Others"],
    scores:[1],

  },
  {
    questionID: "03.03",
    question:
      "Are students encouraged to propose ideas for work-integrated learning activities?",
    answers: ["Yes, regularly", "Yes, occasionally", "No"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[1,1.2,3],

  },
  {
    questionID: "03.04",
    question:
      "Are teachers and staff encouraged to propose ideas for work-integrated learning activities?",
    answers: ["Yes, regularly", "Yes, occasionally", "No"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1.5,3],

  },
  {
    questionID: "03.05",
    question:
      "How do you work strategically to develop work-integrated learning?",
    answers: [
      "A standing group",
      "In dedicated projects",
      "Through engagement days or similar",
      "In other ways",
    ],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[0,1,0.5,3],

  },
  {
    questionID: "03.06",
    question: "Please elaborate.",
    dependOn: true,
    dependingQuestion: "03.05",
    dependingAnswer: ["In other ways"],
    scores:[1],

  },
  {
    questionID: "03.07",
    question:
      "Are students generally encouraged to carry out extracurricular work-integrated learning activities?",
    answers: ["Yes", "No"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1],

  },
  {
    questionID: "03.08",
    question:
      "Who ensures that the work-integrated learning activities at the UoA are up to date with the latest developments in the industry?",
    answers: ["Students", "Teachers/Staff", "UoA director", "Others"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1,1.5,0.5],

  },
  {
    questionID: "03.09",
    question: "Please elaborate.",
    dependOn: true,
    dependingQuestion: "03.08",
    dependingAnswer: ["Others"],
    scores:[1],

  },
  {
    questionID: "03.10",
    question:
      "How does the UoA ensure the relevance of work-integrated learning activities?",
    answers: [
      "General news coverage",
      "Industry-specific news coverage (e.g., websites and industry magazines)",
      "External representation at the UOA",
      "Participation in professional fairs/conferences",
      "Staff actively participate in industry associations/networks",
      "Personal external contacts",
      "Alumni contacts",
      "Knowledge exchange with programmes at other universities",
      "Other ways",
    ],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[1,2,3,4,5,4,3,2,1],

  },
  {
    questionID: "03.11",
    question: "Please elaborate.",
    dependOn: true,
    dependingQuestion: "03.10",
    dependingAnswer: ["Other way"],
    scores:[1],

  },
];

const section_04 = [
  {
    questionID: "04.01",
    question:
      "Is there a career centre at the university where the students can go for information and support?",
    answers: ["Yes", "No"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1],

  },
  {
    questionID: "04.02",
    question: "Is there any interaction between the UoA and the career centre?",
    answers: ["Yes, often", "Yes, occasionally", "No"],
    dependOn: true,
    dependingQuestion: "04.01",
    dependingAnswer: ["Yes"],
    scores:[1,1.5,0.5],

  },
  {
    questionID: "04.03",
    question: "Do you invite alums to work-integrated learning activities?",
    answers: [
      "Yes, as speakers, workshop facilitators etc.",
      "Yes, as participants/audience",
      "No",
    ],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[1,1.5,0.5],

  },
  {
    questionID: "04.04",
    question:
      "Do you connect work-integrated learning activities with ongoing research? (e.g., workshops with researchers and professionals participating.)",
    answers: ["Yes, often", "Yes, occasionally", "No"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1,0.5],

  },
  {
    questionID: "04.05",
    question: "Is work-integrated learning described in the UoA’s syllabus?",
    answers: ["Yes, thoroughly described", "Yes, but only briefly", "No"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[1,1.5,0.5],

  },
  {
    questionID: "04.06",
    question:
      "Does the UoA’s syllabus specify learning outcomes for work-integrated learning activities?",
    answers: ["Yes", "No"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1],

  },
  {
    questionID: "04.07",
    question: "Do the learning outcomes include any of the following?",
    answers: [
      "Deepening/broadening of knowledge related to the degree program",
      "Applying critical thinking",
      "Ethical perspectives/issues",
      "Building self-confidence",
      "Networking",
      "Experience with workplaces and professionalism",
      "Starting and running a business",
    ],
    dependOn: true,
    dependingQuestion: "04.06",
    dependingAnswer: ["Yes"],
    scores:[2,1,0,1.5,0.5,1,0],

  },
  {
    questionID: "04.08",
    question: "To what extent are the learning outcomes met?",
    answers: [
      "Completely",
      "To a large extent",
      "To some extent",
      "Not at all",
    ],
    dependOn: true,
    dependingQuestion: "04.06",
    dependingAnswer: ["Yes"],
    scores:[2,1.5,0.5,1],

  },
  {
    questionID: "04.09",
    question:
      "How many of the UoA’s work-integrated learning activities connect directly to the topic of specific courses, i.e., not generic?",
    answers: ["A majority ", "A minority", "Not at all"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[1.5,0.5,0],

  },
  {
    questionID: "04.10",
    question:
      "How many of the UoA’s work-integrated learning activities are compulsory?",
    answers: ["A majority ", "A minority", "None"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[1.5,0.5,0],

  },
  {
    questionID: "04.11",
    question:
      "How often do joint work-integrated learning activities occur with students in other educational programmes?",
    answers: [
      "Several times a year",
      "A few times a year",
      "Occasionally",
      "Never",
    ],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1,1.5,0.5],

  },
];

const section_05 = [
  {
    questionID: "05.01",
    question:
      "Does each work-integrated learning activity have specific learning outcomes?",
    answers: ["Yes", "No"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1],

  },
  {
    questionID: "05.02",
    question:
      "In what ways are students informed about the education’s work-integrated learning activities?",
    answers: [
      "Orally, e.g., in connection with lectures",
      "In a study guide or similar",
      "By email",
      "At a specific website",
      "Social Media",
      "Other",
    ],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1,1.5,0.5,1,0],

  },
  {
    questionID: "05.03",
    question: "Please elaborate.",
    dependOn: true,
    dependingQuestion: "05.02",
    dependingAnswer: ["Other"],
    scores:[1],

  },
  {
    questionID: "05.04",
    question:
      "How often do you estimate that students generally receive information about their future careers?",
    answers: ["1-2 times per semester", "1-3 times per month", "Every week"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1,1.5],

  },
  {
    questionID: "05.05",
    question:
      "How often do work-integrated learning activities require the students to prepare something?",
    answers: ["Every time", "Often", "Rarely", "Never"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1.5,1,0],

  },
  {
    questionID: "05.06",
    question:
      "Are the individual work-integrated learning activities evaluated?",
    answers: ["Yes, always", "Yes, sometimes", "No"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1,0.5],

  },
  {
    questionID: "05.07",
    question: "Who is involved in the evaluations?",
    answers: [
      "The person/persons who held the activity (e.g., a guest lecturer)",
      "The person/persons who organised the activity (e.g., a teacher)",
      "The students",
      "Other",
    ],
    dependOn: true,
    dependingQuestion: "05.06",
    dependingAnswer: ["Yes, always", "Yes, sometimes"],
    scores:[2,1,1.5,0.5],

  },
  {
    questionID: "05.08",
    question: "Please elaborate.",
    dependOn: true,
    dependingQuestion: "05.07",
    dependingAnswer: ["Other"],
    scores:[1],

  },
  {
    questionID: "05.09",
    question: "What do the evaluations assess?",
    answers: [
      "The person/persons who held the activity (e.g., a guest lecturer)",
      "The person/persons who organised the activity (e.g., a teacher)",
      "The students",
      "Other",
    ],
    dependOn: true,
    dependingQuestion: "05.06",
    dependingAnswer: ["Yes, always", "Yes, sometimes"],
    scores:[2,1,1.5,0.5],

  },
  {
    questionID: "05.10",
    question: "Please elaborate.",
    dependOn: true,
    dependingQuestion: "05.09",
    dependingAnswer: ["Other"],
    scores:[1],

  },
];

const section_06 = [
  {
    questionID: "06.01",
    question:
      "Is there a central office or function for work-integrated learning at the university?",
    answers: [
      "Yes, at the university/college level",
      "Yes, at the faculty/school level",
      "Yes, at the department level",
      "No",
    ],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1,1.5,0.5],

  },
  {
    questionID: "06.02",
    question: "Is the support you receive from the central office sufficient?",
    answers: ["Yes", "No"],
    dependOn: true,
    dependingQuestion: "06.01",
    dependingAnswer: [
      "Yes, at the university/college level",
      "Yes, at the faculty/school level",
      "Yes, at the department level",
    ],
    scores:[2,1],

  },
  {
    questionID: "06.03",
    question:
      "Is work-integrated learning on the agenda in general department meetings?",
    answers: ["Yes, regularly", "Yes, occasionally", "No"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1,0],

  },
  {
    questionID: "06.04",
    question:
      "Can you comfortably address questions about work-integrated learning in the relevant department meetings?",
    answers: [
      "Yes, without problems",
      "Yes, but only if it is a crucial question",
      "No, I avoid that",
    ],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[1,1,1.5],

  },
  {
    questionID: "06.05",
    question:
      "Would you say the UoA’s faculty and staff are generally interested in work-integrated learning?",
    answers: [
      "Yes, very interested",
      "Yes, somewhat interested",
      "No, not particularly interested",
      "No, not at all interested",
    ],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[0.5,1,1.5,2],

  },
  {
    questionID: "06.06",
    question:
      "Does your closest manager support your efforts in work-integrated learning?",
    answers: ["Yes, to a large extent", "Yes, to some extent", "No"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1.5,0],

  },
  {
    questionID: "06.07",
    question:
      "Does the university have articulated objectives regarding work-integrated learning?",
    answers: [
      "Yes, at the university/college level",
      "Yes, at the faculty/school level",
      "Yes, at the department level",
      "No",
      "I do not know",
    ],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[1,2,3,4,0],

  },
  {
    questionID: "06.08",
    question:
      "Are there any earmarked funds allocated for work-integrated learning activities?",
    answers: [
      "Yes, at the university/college level",
      "Yes, at the faculty/school level",
      "Yes, at the department level",
      "No",
      "I do not know",
    ],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[4,3,2,1,0],

  },
  {
    questionID: "06.09",
    question:
      "Are there any instructions, training, or guidance available for how to work with work-integrated learning?",
    answers: [
      "Yes, at the university/college level",
      "Yes, at the faculty/school level",
      "Yes, at the department level or more locally",
      "No",
      "I do not know",
    ],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1,1.5,0.5,0],

  },
  {
    questionID: "06.10",
    question:
      "Is there a general follow-up mechanism regarding work-integrated learning?",
    answers: [
      "Yes, at the university/college level",
      "Yes, at the faculty/school level",
      "Yes, at the department level or more locally",
      "No",
    ],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[1,2,1.5,0.5],

  },
];

const section_07 = [
  {
    questionID: "07.01",
    question:
      "At how many external events, such as conferences and trade fairs, is the UoA represented in a year?",
    answers: ["0", "1-2", "3-4", ">4"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[1,1,1.5,0.5],

  },
  {
    questionID: "07.02",
    question:
      "Is any UoA staff engaged in formal industry networks or interest organisations?",
    answers: ["Yes, in several", "Yes, in a few", "No", "I do not know"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1.5,1,0.5],

  },
  {
    questionID: "07.03",
    question:
      "Does anyone in the UoA staff hold a formal role in any external bodies? (e.g. board position, project manager)?",
    answers: ["Yes, in several", "Yes, in a few", "No"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[1,1.5,1],
    
  },
  {
    questionID: "07.04",
    question:
      "Have you assigned anyone to monitor the latest developments in the relevant industries?",
    answers: [
      "Yes, students",
      "Yes, teachers/staff",
      "Yes, the UoA director",
      "Yes, someone else",
      "No",
    ],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1.5,1,0.5,0],

  },
  {
    questionID: "07.05",
    question: "Please elaborate.",
    dependOn: true,
    dependingQuestion: "07.04",
    dependingAnswer: ["Yes, someone else"],
    scores:[1],

  },
  {
    questionID: "07.06",
    question: "In what ways does the monitoring take place?",
    answers: [
      "General news coverage",
      "Industry-specific news coverage (e.g. groups on the internet or industry magazines)",
      "Participation in fairs/conferences",
      "Staff actively participate in industry associations/networks",
      "Personal industry contacts",
      "Alumni contacts",
      "Talking to corresponding program staff at other universities",
      "In other ways",
    ],
    dependOn: true,
    dependingQuestion: "07.04",
    dependingAnswer: [
      "Yes, students",
      "Yes, teachers/staff",
      "Yes, the UoA director",
      "Yes, someone else",
    ],
    scores:[2,1.5,1,0.5,1.5,1,0.5,0],

  },
  {
    questionID: "07.07",
    question: "Please elaborate.",
    dependOn: true,
    dependingQuestion: "07.06",
    dependingAnswer: ["In other ways"],
        scores:[1],

  },
  {
    questionID: "07.08",
    question:
      "Is work-integrated learning at the UoA described in marketing material?",
    answers: ["Yes", "No", "I do not know"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[0.5,1.5,1],

  },
  {
    questionID: "07.09",
    question:
      "Is work-integrated learning at the UoA described on the public website?",
    answers: ["Yes", "No", "I do not know"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1.5,1],

  },
  {
    questionID: "07.10",
    question: "Is the UoA active on social media?",
    answers: [
      "Very active (often posts news and pictures, starts, and engages in discussions, answers questions etc.)",
      "Slightly active (same as above but to a lesser extent)",
      "Passive presence (only answers questions)",
      "Not present on social media",
    ],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[1,0.5,1.5,1],

  },
  {
    questionID: "07.11",
    question:
      "How many formal news or press releases does the UoA publish in a semester?",
    answers: ["0-1", "1-2", "2-5", ">5"],
    dependOn: false,
    dependingQuestion: null,
    dependingAnswer: null,
    scores:[2,1.5,1,0.5],
  },
    

];

export {
  section_01,
  section_02,
  section_03,
  section_04,
  section_05,
  section_06,
  section_07,
};
