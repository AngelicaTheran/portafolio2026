
import { 
  Briefcase, 
  Code, 
  LineChart, 
  FileSpreadsheet, 
  Home,
  User,
  Mail,
  PieChart,
  Database,
  Globe,
  CheckCircle,
  Layout,
  Zap,
  TrendingUp,
  Search,
  Cpu
} from 'lucide-react';
import { NavItem, ExperienceItem, EducationItem, SkillItem, ServiceItem, ProjectItem, TeamValueItem, UILabels } from './types';

const CONTACT_INFO = {
  email: "atheran082@gmail.com",
  phone: "+57 324 546 1109",
  location: "Colombia",
  linkedin: "https://www.linkedin.com/in/angelica-theran",
  heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
};

// --- ENGLISH DATA ---
const EXPERIENCE_EN: ExperienceItem[] = [
  {
    id: 'e1',
    role: "Freelance Web Developer",
    company: "Independent",
    period: "2023 - Present",
    location: "Remote",
    description: [
      "Development of custom web solutions for local businesses.",
      "Implementation of inventory systems and sales management dashboards.",
      "Technical architecture design for scalable business applications."
    ]
  },
  {
    id: 'e2',
    role: "Accounting & Finance Specialist",
    company: "SME Sector",
    period: "2020 - 2023",
    location: "Colombia",
    description: [
      "Management of financial statements and NIIF compliance.",
      "Internal auditing and budget optimization for startups.",
      "Analysis of international business transactions."
    ]
  }
];

const EDUCATION_EN: EducationItem[] = [
  {
    id: 'ed1',
    degree: "Public Accounting (Student)",
    institution: "UNAD",
    year: "Ongoing"
  },
  {
    id: 'ed3',
    degree: "Frontend Developer Bootcamp",
    institution: "Laboratoria",
    year: "Graduated"
  },
  {
    id: 'ed2',
    degree: "Accounting and Finance Technologist",
    institution: "SENA",
    year: "Graduated"
  }
];

const PROJECTS_EN: ProjectItem[] = [
  {
    id: 'p1',
    title: "SME Order & Inventory System",
    category: "Web Systems for SMBs",
    context: "Developed for a local pizzeria needing digital transformation.",
    problem: "Manual order tracking led to delivery errors and inventory mismatches.",
    solution: "Full-stack web app with role-based access (admin, waiter, kitchen) and real-time sales reports.",
    tech: ["React", "Node.js", "PostgreSQL"],
    impact: "Reduced order errors by 40% and improved inventory accuracy."
  },
  {
    id: 'p2',
    title: "Financial Dashboard Pro",
    category: "Financial Projects",
    context: "A reporting tool for financial analysis based on NIIF standards.",
    problem: "Difficulty visualizing cash flow and financial ratios from flat CSV data.",
    solution: "Interactive dashboard with data visualization for liquidity, solvency, and profitability ratios.",
    tech: ["React", "Chart.js", "Tailwind"],
    impact: "Enabled faster decision-making for management teams."
  }
];

const SKILLS_EN: SkillItem[] = [
  { name: "React / JavaScript", level: 85, category: "Web" },
  { name: "Tailwind / CSS", level: 90, category: "Web" },
  { name: "PostgreSQL / MongoDB", level: 75, category: "DB" },
  { name: "Financial Accounting (NIIF)", level: 95, category: "Finance" },
  { name: "Budgeting & Forecasting", level: 80, category: "Finance" },
  { name: "International Business", level: 70, category: "Business" },
];

const SERVICES_EN: ServiceItem[] = [
  { title: "SME Web Development", description: "Custom business websites focused on conversion and digital presence.", icon: Layout },
  { title: "Inventory & Order Systems", description: "Internal platforms to manage processes, staff roles, and stock.", icon: Zap },
  { title: "Financial Dashboards", description: "Turn complex data into visual insights for better business control.", icon: TrendingUp },
  { title: "Process Automation", description: "Streamlining administrative tasks through custom digital tools.", icon: FileSpreadsheet }
];

const TEAM_VALUE_EN: TeamValueItem[] = [
  { title: "Business Vision", description: "I understand the 'why' behind the code from a financial perspective.", icon: Briefcase },
  { title: "Analytical Capacity", description: "Strong data background helps in solving complex logic problems.", icon: LineChart },
  { title: "Technical Strategy", description: "Focus on clean code and efficient architectures for long-term growth.", icon: Cpu },
  { title: "Interdisciplinary Work", description: "Experience bridging the gap between tech and finance teams.", icon: Globe }
];

const UI_LABELS_EN: UILabels = {
  hero: {
    hello: "Web Developer | Accounting & Finance Background",
    tagline: "I build practical digital solutions for SMBs, startups, and financial projects.",
    ctaPrimary: "View Projects",
    ctaSecondary: "LinkedIn Profile",
    downloadCv: "Download CV"
  },
  about: {
    title: "About Me",
    subtitle: "Hybrid Profile: Tech + Finance + Business",
    description: "I am a Web Developer with a strong background in accounting and international business. My focus is on creating functional digital solutions that combine technology with business data analysis to solve real-world problems.",
    keySkills: "Core Skills",
    details: {
      email: "Email", phone: "Phone", location: "Location", linkedin: "LinkedIn", viewProfile: "View LinkedIn"
    }
  },
  projects: {
    title: "Featured Projects",
    subtitle: "Real-world solutions classified by business impact.",
    labels: { context: "Context", problem: "Problem", solution: "Solution", impact: "Business Impact" }
  },
  services: { title: "Freelance Solutions", subtitle: "Specialized services to help your business grow with technology." },
  team: { title: "Why Me for Your Team", subtitle: "What I bring to a professional development team." },
  resume: { title: "Professional Path", experience: "Experience", education: "Education" },
  contact: {
    title: "Get In Touch", subtitle: "Let's collaborate", text: "Available for international remote roles and freelance projects.",
    callMe: "Call Me",
    form: { name: "Name", email: "Email", subject: "Subject", message: "Message", send: "Send Message" }
  },
  footer: { rights: "All rights reserved.", available: "Available for Remote Work" }
};

// --- SPANISH DATA ---
const EXPERIENCE_ES: ExperienceItem[] = [
  {
    id: 'e1',
    role: "Desarrolladora Web Freelance",
    company: "Independiente",
    period: "2023 - Presente",
    location: "Remoto",
    description: [
      "Desarrollo de soluciones web personalizadas para negocios locales.",
      "Implementación de sistemas de inventario y dashboards de ventas.",
      "Diseño de arquitectura técnica para aplicaciones empresariales escalables."
    ]
  },
  {
    id: 'e2',
    role: "Especialista en Contabilidad y Finanzas",
    company: "Sector Pyme",
    period: "2020 - 2023",
    location: "Colombia",
    description: [
      "Gestión de estados financieros y cumplimiento de normas NIIF.",
      "Auditoría interna y optimización de presupuestos para startups.",
      "Análisis de transacciones comerciales internacionales."
    ]
  }
];

const EDUCATION_ES: EducationItem[] = [
  {
    id: 'ed1',
    degree: "Contaduría Pública (Estudiante)",
    institution: "UNAD",
    year: "En curso"
  },
  {
    id: 'ed3',
    degree: "Bootcamp Frontend Developer",
    institution: "Laboratoria",
    year: "Graduada"
  },
  {
    id: 'ed2',
    degree: "Tecnóloga en Contabilidad y Finanzas",
    institution: "SENA",
    year: "Graduada"
  }
];

const PROJECTS_ES: ProjectItem[] = [
  {
    id: 'p1',
    title: "Sistema de Pedidos e Inventario",
    category: "Sistemas para Pymes",
    context: "Desarrollado para una pizzería local en proceso de transformación digital.",
    problem: "El seguimiento manual de pedidos causaba errores en entregas y descuadres de inventario.",
    solution: "Aplicación web completa con roles (admin, mesero, cocina) y reportes de ventas en tiempo real.",
    tech: ["React", "Node.js", "PostgreSQL"],
    impact: "Reducción del 40% en errores de pedido y control total del stock."
  },
  {
    id: 'p2',
    title: "Dashboard Financiero Pro",
    category: "Proyectos Financieros",
    context: "Herramienta de reporte para análisis financiero bajo estándares NIIF.",
    problem: "Dificultad para visualizar flujos de caja y ratios financieros desde archivos planos.",
    solution: "Dashboard interactivo con visualización de ratios de liquidez, solvencia y rentabilidad.",
    tech: ["React", "Chart.js", "Tailwind"],
    impact: "Toma de decisiones un 60% más rápida para el equipo gerencial."
  }
];

const SKILLS_ES: SkillItem[] = [
  { name: "React / JavaScript", level: 85, category: "Web" },
  { name: "Tailwind / CSS", level: 90, category: "Web" },
  { name: "PostgreSQL / MongoDB", level: 75, category: "DB" },
  { name: "Contabilidad Financiera (NIIF)", level: 95, category: "Finance" },
  { name: "Presupuestos y Proyecciones", level: 80, category: "Finance" },
  { name: "Negocios Internacionales", level: 70, category: "Business" },
];

const SERVICES_ES: ServiceItem[] = [
  { title: "Sitios Web para Pymes", description: "Webs corporativas enfocadas en conversión y presencia profesional.", icon: Layout },
  { title: "Sistemas de Inventario", description: "Plataformas internas para gestionar procesos, roles y stock.", icon: Zap },
  { title: "Dashboards Financieros", description: "Transformo datos complejos en visualizaciones para control de negocio.", icon: TrendingUp },
  { title: "Automatización Administrativa", description: "Optimización de tareas mediante herramientas digitales a medida.", icon: FileSpreadsheet }
];

const TEAM_VALUE_ES: TeamValueItem[] = [
  { title: "Visión de Negocio", description: "Entiendo el 'por qué' del código desde una perspectiva financiera.", icon: Briefcase },
  { title: "Capacidad Analítica", description: "Mi base en datos ayuda a resolver problemas de lógica compleja.", icon: LineChart },
  { title: "Estrategia Técnica", description: "Enfoque en código limpio y arquitecturas eficientes para crecimiento a largo plazo.", icon: Cpu },
  { title: "Trabajo Interdisciplinario", description: "Experiencia uniendo el mundo técnico con el contable.", icon: Globe }
];

const UI_LABELS_ES: UILabels = {
  hero: {
    hello: "Web Developer | Background en Contabilidad y Finanzas",
    tagline: "Desarrollo soluciones digitales prácticas para pymes, startups y proyectos financieros.",
    ctaPrimary: "Ver Proyectos",
    ctaSecondary: "Perfil LinkedIn",
    downloadCv: "Descargar CV"
  },
  about: {
    title: "Sobre Mí",
    subtitle: "Perfil Híbrido: Tecnología + Finanzas",
    description: "Soy una desarrolladora web con formación sólida en contabilidad, finanzas y negocios internacionales. Mi enfoque está en crear soluciones digitales funcionales para pymes y proyectos financieros, combinando tecnología y análisis de datos.",
    keySkills: "Habilidades Clave",
    details: {
      email: "Correo", phone: "Teléfono", location: "Ubicación", linkedin: "LinkedIn", viewProfile: "Ver LinkedIn"
    }
  },
  projects: {
    title: "Proyectos Destacados",
    subtitle: "Soluciones reales clasificadas por impacto de negocio.",
    labels: { context: "Contexto", problem: "Problema", solution: "Solución", impact: "Impacto de Negocio" }
  },
  services: { title: "Soluciones Freelance", subtitle: "Servicios especializados para impulsar tu negocio con tecnología." },
  team: { title: "Lo que aporto a un equipo", subtitle: "Mi valor diferencial como desarrolladora en entornos profesionales." },
  resume: { title: "Trayectoria", experience: "Experiencia", education: "Educación" },
  contact: {
    title: "Contacto", subtitle: "Hablemos de tu proyecto", text: "Disponible para roles remotos internacionales y proyectos freelance.",
    callMe: "Llámame",
    form: { name: "Nombre", email: "Correo", subject: "Asunto", message: "Mensaje", send: "Enviar Mensaje" }
  },
  footer: { rights: "Todos los derechos reservados.", available: "Disponible para trabajo remoto" }
};

export const CONTENT = {
  en: {
    PERSONAL_INFO: { ...CONTACT_INFO, name: "Angelica Theran", titles: ["Web Developer", "Accounting Expert"], about: UI_LABELS_EN.about.description },
    PROJECTS: PROJECTS_EN,
    SKILLS: SKILLS_EN,
    SERVICES: SERVICES_EN,
    TEAM_VALUE: TEAM_VALUE_EN,
    EXPERIENCE: EXPERIENCE_EN,
    EDUCATION: EDUCATION_EN,
    UI: UI_LABELS_EN,
    NAV_ITEMS: [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'about', label: 'About', icon: User },
        { id: 'projects', label: 'Projects', icon: Code },
        { id: 'services', label: 'Freelance', icon: Briefcase },
        { id: 'resume', label: 'Resume', icon: FileSpreadsheet },
        { id: 'contact', label: 'Contact', icon: Mail }
    ]
  },
  es: {
    PERSONAL_INFO: { ...CONTACT_INFO, name: "Angelica Theran", titles: ["Web Developer", "Contabilidad & Finanzas"], about: UI_LABELS_ES.about.description },
    PROJECTS: PROJECTS_ES,
    SKILLS: SKILLS_ES,
    SERVICES: SERVICES_ES,
    TEAM_VALUE: TEAM_VALUE_ES,
    EXPERIENCE: EXPERIENCE_ES,
    EDUCATION: EDUCATION_ES,
    UI: UI_LABELS_ES,
    NAV_ITEMS: [
        { id: 'home', label: 'Inicio', icon: Home },
        { id: 'about', label: 'Sobre mí', icon: User },
        { id: 'projects', label: 'Proyectos', icon: Code },
        { id: 'services', label: 'Freelance', icon: Briefcase },
        { id: 'resume', label: 'Trayectoria', icon: FileSpreadsheet },
        { id: 'contact', label: 'Contacto', icon: Mail }
    ]
  }
};
