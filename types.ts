
import { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'es';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  context: string;
  problem: string;
  solution: string;
  tech: string[];
  impact: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  category: 'Web' | 'DB' | 'Finance' | 'Business' | 'QA';
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamValueItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface UILabels {
  hero: {
    hello: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    downloadCv: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    keySkills: string;
    details: {
      email: string;
      phone: string;
      location: string;
      linkedin: string;
      viewProfile: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    labels: {
      context: string;
      problem: string;
      solution: string;
      impact: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
  };
  team: {
    title: string;
    subtitle: string;
  };
  resume: {
    title: string;
    experience: string;
    education: string;
  };
  contact: {
    title: string;
    subtitle: string;
    text: string;
    callMe: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
    }
  };
  footer: {
    rights: string;
    available: string;
  }
}
