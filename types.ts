
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrls: string[]; // Changed from imageUrl to imageUrls array
  link: string;
  github?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  PROJECTS = 'projects',
  SKILLS = 'skills',
  CONTACT = 'contact'
}