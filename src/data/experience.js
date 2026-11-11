// Latest role pehle. Points apne hisaab se edit kar sakti ho (max 3-4 rakho).
export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Bluglint Solutions',
    period: 'June 2026 - Present',
    points: [
      'Developed and maintained full-stack features for SkillJobz (skilljobz.com), a job portal, using React.js, ASP.NET Web API (C#), MySQL, and ASP.NET Web Forms for the Admin CMS.',
      'Built secure Login and Registration APIs with JWT-based authentication and role-based authorization, supporting different user roles and protected application workflows.',
      'Developed RESTful CRUD APIs for User Profiles, Recruiter and Company Profiles, Job Postings, Draft Jobs, and Job Applications using a stored-procedure-driven MySQL backend.',
      'Implemented job posting and application workflows, including draft management and automated CRON jobs for deleting expired drafts after a specified retention period.',
      'Developed Admin CMS modules using ASP.NET Web Forms, including session-based authentication and management features for users, roles, companies, jobs, and applications.',
      'Designed and integrated React.js user interfaces for Login, Registration, Recruiter Profile, and Job Posting workflows, using Git/GitHub-based version control.',
      'Built responsive web interfaces, including Home, Navbar, Jobs, and Company card components, and integrated frontend workflows with backend APIs.',
    ],
  },
  {
    role: 'Full Stack Developer (Freelance)',
    company: 'Uniscaler (uniscaler.in)',
    period: 'February 2026 - May 2026',
    points: [
      'Developed REST APIs for college and university information, supporting the retrieval and management of institutional data.',
      'Implemented APIs for university-specific courses and student inquiry workflows, integrating backend services with the application interface.',
      'Built responsive React.js user interfaces for college discovery and student login workflows.',
      'Developed college search and filtering functionality to help students discover and explore relevant colleges and institutions.',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'Bluestock Fintech',
    period: 'November 2025 - January 2026',
    points: [
      'Developed a full-stack website with responsive user interfaces connected to backend services.',
      'Designed and built RESTful APIs and integrated them with the frontend for dynamic data handling.',
      'Tested API endpoints, debugged integration issues, and followed Git-based version control practices.',
    ],
  },
]

export const education = [
  {
    title: 'Bachelor of Computer Applications (BCA)',
    place: 'Maharshi Dayanand University',
    period: '2023 – 2026',
    points: ['Score: 8.9'],
  },
  {
    title: 'Intermediate (12th)',
    place: 'A.D. Senior Secondary, Faridabad',          // <- apne school ka naam aur city
    period: '2021 – 2023',               // <- start aur end year
    points: ['Non-Medical', 'Percentage: 80%'],
  },
  {
    title: 'High School (10th)',
    place: 'A.D. Senior Secondary, Faridabad',          // <- apne school ka naam aur city
    period: '2019 – 2021',               // <- start aur end year
    points: ['Percentage: 85%'],
  },
]
