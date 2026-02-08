
import { Project, SkillCategory } from './types.ts';

export const DEVELOPER_NAME = "Martin";
export const DEVELOPER_ROLE = "Web Development Enthusiast";

export const ABOUT_ME = `
I am a university student passionate about building functional web applications. Through academic projects and personal initiatives, I am developing my skills in full-stack development, ranging from responsive interface design to database management.

I enjoy bridging the gap between frontend and backend logic. Additionally, I have a keen interest in business automation, utilizing tools like n8n to streamline workflows.
`;

export const RESUME_URL = "https://drive.google.com/file/d/1hYVzN3EeicIPeb3ep32n4prLbtXW-qAd/view?usp=sharing";

export const PROJECTS: Project[] = [
  {
    id: 'weather-sphere',
    title: 'Weather Sphere',
    description: 'This is a personal project I created to test my skills and understanding of how to fetch, manage, and display data from an API.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'OpenWeather API', 'ZenQuotes API'],
    imageUrls: ['https://github.com/Martin03Git/public-foto/blob/main/martin-portfolio/WeatherSphere.png?raw=true'],
    link: 'https://weather-sphere-gold.vercel.app/',
    github: 'https://github.com/Martin03Git/WeatherSphere'
  },
  {
    id: 'kawanadmin',
    title: 'KawanAdmin - AI Chatbot UMKM',
    description: 'This is a personal project I created to test my skills in building AI-powered solutions that automate customer support, order recording, and real-time status tracking for small businesses.',
    techStack: ['n8n', 'Telegram', 'Google Sheets', 'JSON', 'Supabase'],
    imageUrls: [
      'https://github.com/Martin03Git/public-foto/blob/main/martin-portfolio/KawanAdminPro-ChatbotUMKM.png?raw=true',
      'https://github.com/Martin03Git/public-foto/blob/main/martin-portfolio/KawanAdminPro-DatabaseProcessor.png?raw=true',
      'https://github.com/Martin03Git/public-foto/blob/main/martin-portfolio/KawanAdminPro-OrderHandler.png?raw=true',
      'https://github.com/Martin03Git/public-foto/blob/main/martin-portfolio/KawanAdminPro-SaveOrder1.png?raw=true'
    ],
    link: '#',
    github: 'https://github.com/Martin03Git/'
  },
  {
    id: 'lynk-notifier',
    title: 'Lynk.id Telegram Notifier',
    description: 'This is a personal project I created to practice workflow automation by building a real-time notification system that bridges Lynk.id transaction data with Telegram alerts.',
    techStack: ['n8n', 'JSON', 'Telegram', 'Google Sheets', 'Lynk.id Webhook'],
    imageUrls: [
      'https://github.com/Martin03Git/public-foto/blob/main/martin-portfolio/LynkID_Notifier-bot_flow.png?raw=true',
      'https://github.com/Martin03Git/public-foto/blob/main/martin-portfolio/LynkID_Notifier-daily_summery_flow.png?raw=true',
      'https://github.com/Martin03Git/public-foto/blob/main/martin-portfolio/LynkID_Notifier-purchased_flow.png?raw=true',
      'https://github.com/Martin03Git/public-foto/blob/main/martin-portfolio/LynkID_Notifier-telegram_messages.png?raw=true'
    ],
    link: '#',
    github: 'https://github.com/Martin03Git/'
  },
  {
    id: 'photo-booking',
    title: 'Photographer Appointment Automation',
    description: 'This is a personal project I developed to apply my full-stack knowledge in creating a cost-effective booking system that prevents double-booking using real-time Google Sheets validation.',
    techStack: ['n8n', 'Google Sheets', 'HTML', 'CSS', 'JSON'],
    imageUrls: [
      'https://github.com/Martin03Git/public-foto/blob/main/martin-portfolio/photographer_appoinment_automation-workflow.jpg?raw=true',
      'https://github.com/Martin03Git/public-foto/blob/main/martin-portfolio/photographer_appoinment_automation-webform.jpg?raw=true',
      'https://github.com/Martin03Git/public-foto/blob/main/martin-portfolio/photographer_appoinment_automation-booing_succeed.jpg?raw=true'
    ],
    link: '#',
    github: 'https://github.com/Martin03Git/'
  },
  {
    id: 'finance-flow',
    title: 'Finance Flow',
    description: 'A modern, expense tracker MVP featuring a dynamic web dashboard, secure authentication, and a low-code automation backend.',
    techStack: ['Tailwind CSS', 'HTML', 'JavaScript', 'n8n', 'Supabase', 'Node.js', 'Express.js'],
    imageUrls: [
      'https://github.com/Martin03Git/public-foto/blob/main/martin-portfolio/FinanceFlow_login.png?raw=true',
      'https://github.com/Martin03Git/public-foto/blob/main/martin-portfolio/FinanceFlow_dashboard.png?raw=true',
      'https://github.com/Martin03Git/public-foto/blob/main/martin-portfolio/FinanceFlow_statistics1.png?raw=true',
      'https://github.com/Martin03Git/public-foto/blob/main/martin-portfolio/FinanceFlow_statistics2.png?raw=true',
      'https://github.com/Martin03Git/public-foto/blob/main/martin-portfolio/FinanceFlow_profile.png?raw=true'
    ],
    link: '#',
    github: 'https://github.com/Martin03Git/finance-flow'
  },
  {
    id: 'coming-soon',
    title: 'Coming Soon',
    description: 'Currently exploring new technologies and brainstorming ideas for my next application. Stay tuned!',
    techStack: ['Loading...'],
    imageUrls: ['https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop'],
    link: '',
    github: ''
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: 'Core Languages',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    icon: 'Layout'
  },
  {
    name: 'Backend & Data',
    skills: ['Node.js (Basic)', 'MySQL', 'Supabase (Basic)'],
    icon: 'Database'
  },
  {
    name: 'Tools & Version Control',
    skills: ['Git', 'GitHub', 'VS Code', 'Sublime Text', 'Bootstrap'],
    icon: 'Terminal'
  },
  {
    name: 'Automation & Others',
    skills: ['n8n Workflow Automation', 'JSON handling'],
    icon: 'Code2'
  }
];
