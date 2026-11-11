// Projects yahin edit karo.
// images: screenshots ki list (public/images/projects/<project>/1.png ...). Khaali [] rakho to letter wala placeholder dikhega.
// '#' wale links PLACEHOLDER hain - apne real GitHub URLs daalo.
// category sirf 'Full Stack' ya 'Frontend' rakho (filter buttons yahi se bante hain).
export const projects = [
  {
    id: 'skilljobz',
    title: 'SkillJobz – Job Portal',
    category: 'Full Stack',
    period: 'Jun 2026 – Present',
    org: 'Bluglint Solutions',
    images: [
      '/images/projects/skilljobz/1.png',
      '/images/projects/skilljobz/2.png',
      '/images/projects/skilljobz/3.png',
      '/images/projects/skilljobz/4.png',
      '/images/projects/skilljobz/5.png',
    ],
    short:
      'Job portal with JWT-secured APIs, role-based access, job posting workflows and an Admin CMS.',
    description:
      'A job portal built at Bluglint Solutions. I started with the Admin CMS in ASP.NET Web Forms and now build the backend APIs and React UI for recruiters and job seekers.',
    features: [
      'Login and Registration APIs with JWT and role-based authorization',
      'User Profile and Company Profile management APIs',
      'Job Posting, Draft and Application endpoints',
      'CRON jobs for automatic draft deletion',
      'Admin CMS with Role, User, Company, Job and Application modules',
      'Recruiter Profile and Job Posting UI components',
    ],
    tech: ['ASP.NET Web API', 'ASP.NET Web Forms', 'React.js', 'MySQL', 'JWT'],
    github: '#',
    live: 'https://skilljobz.com',
  },
  {
    id: 'uniscaler',
    title: 'Uniscaler – College Comparison Platform',
    category: 'Full Stack',
    period: '4 Months · Freelance',
    org: 'Freance Full Stack Developer',
    images: [],
    short: 'Educational discovery platform with college search, filtering and student inquiries.',
    description:
      'An educational discovery and college comparison platform built as a freelance full stack developer.',
    features: [
      'REST APIs for college and university information',
      'APIs for university-specific courses and student inquiries',
      'Responsive UI for college discovery and student login',
      'College search and filtering to help students find top colleges',
    ],
    tech: ['React.js', 'ASP.NET', 'REST APIs', 'JavaScript', 'HTML5', 'CSS3'],
    github: '#',
    live: 'https://uniscaler.in',
  },
  {
    id: 'foodiefest',
    title: 'Foodie Fest – Food Ordering App',
    category: 'Frontend',
    period: 'Personal Project',
    org: 'Self',
    images: [
      '/images/projects/foodie/1.png',
      '/images/projects/foodie/2.png',
      '/images/projects/foodie/3.png',
      '/images/projects/foodie/4.png',
    ],
    short: 'Responsive food ordering app with menus, cart, and restaurant search/filter/sort.',
    description: 'A food ordering web application built with React.js.',
    features: [
      'Responsive restaurant listings and interactive menus',
      'Login sessions using browser localStorage',
      'State-driven cart managing items, billing and instructions',
      'Restaurant search, filtering and sorting',
    ],
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    github: '#',
    live: 'https://foodie-fest.vercel.app/',
  },
]