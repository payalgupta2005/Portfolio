import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaNetworkWired,
  FaKey,
  FaUserShield,
  FaCubes,
} from 'react-icons/fa'
import {
  SiDotnet,
  SiMysql,
  SiPostman,
  SiSwagger,
  SiBootstrap,
  SiTailwindcss,
} from 'react-icons/si'

// Flat list: no categories. `color` is the icon's brand color.
export const skills = [
  { name: 'React.js', icon: FaReact, color: '#61dafb' },
  { name: 'HTML5', icon: FaHtml5, color: '#e34f26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572b6' },
  { name: 'JavaScript', icon: FaJs, color: '#f7df1e' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' },
  { name: 'ASP.NET Core', icon: SiDotnet, color: '#8a6cf0' },
  { name: 'ASP.NET MVC', icon: SiDotnet, color: '#6f4de0' },
  { name: 'REST APIs', icon: FaNetworkWired, color: '#8b95a5' },
  { name: 'Authentication', icon: FaKey, color: '#f5b942' },
  { name: 'Authorization', icon: FaUserShield, color: '#3ecf8e' },
  { name: 'OOP', icon: FaCubes, color: '#e879f9' },
  { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
  { name: 'SQL', icon: FaDatabase, color: '#e0674f' },
  { name: 'Git', icon: FaGitAlt, color: '#f05032' },
  { name: 'GitHub', icon: FaGithub, color: '#e6edf3' },
  { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
  { name: 'Swagger', icon: SiSwagger, color: '#85ea2d' },
]