export interface ResumeBasics {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  links: {
    github: string;
    linkedin: string;
  };
}

export interface ResumeAchievement {
  metric: string;
  context: string;
  category: "shipping" | "performance" | "academic" | "security" | "user-impact";
}

export interface ResumeProject {
  title: string;
  github: string;
  demo: string;
  stack: string[];
  bullets: string[];
  highlights: string[];
}

export interface ResumeExperience {
  role: string;
  company: string;
  period: string;
  mode: string;
  stack: string[];
  bullets: string[];
}

export interface ResumeSkillGroup {
  category: string;
  skills: string[];
}

export interface ResumeEducation {
  institution: string;
  degree: string;
  branch?: string;
  period: string;
  location: string;
  cgpaOrYear: string;
}

export interface ResumeCertification {
  title: string;
  issuer: string;
  date: string;
}

export interface ResumeAward {
  title: string;
  context: string;
}

export interface ResumeData {
  basics: ResumeBasics;
  achievements: ResumeAchievement[];
  experience: ResumeExperience[];
  projects: ResumeProject[];
  skills: ResumeSkillGroup[];
  education: ResumeEducation[];
  certifications: ResumeCertification[];
  awards: ResumeAward[];
  extra: string[];
}

export const resumeData: ResumeData = {
  basics: {
    name: "RIDDHI JAIN",
    title: "Full-Stack Developer & AI Specialist",
    summary: "Full-stack developer with hands-on experience building and deploying AI-powered web applications, currently serving as Associate Full Stack Developer at Vayon Cloud Private Limited. Proven track record shipping 3 independent live AI SaaS platforms from architecture to cloud deployment. Core stack: React.js, Node.js, Express.js, PostgreSQL, MongoDB, REST APIs, JWT authentication, and LLM integrations with Groq and Gemini. Microsoft Certified: Azure AI Engineer Associate (AI-102).",
    location: "Udaipur, Rajasthan",
    phone: "+91 8233615161",
    email: "riddhijain.rj47@gmail.com",
    links: {
      linkedin: "www.linkedin.com/in/riddhi-jain-1467a8270",
      github: "github.com/riddhi191203"
    }
  },
  achievements: [
    {
      metric: "3 Production Platforms",
      context: "Hands-on experience shipping 3 production-grade AI SaaS platforms (Zenith AI, CodeMind AI, ATSync AI).",
      category: "shipping"
    },
    {
      metric: "9.78 / 10.00 CGPA",
      context: "Exceptional academic performance in B.Tech Computer Science and Engineering (AI) at Geetanjali Institute of Technical Studies.",
      category: "academic"
    },
    {
      metric: "< 1.5s Response Latency",
      context: "Achieved lightning-fast average LLM-powered content pipelines utilizing Groq API in Zenith AI.",
      category: "performance"
    },
    {
      metric: "40% Debugging Deficit",
      context: "Reduced average debugging time in user testing by embedding Groq AI SDK inside a custom Monaco Editor.",
      category: "user-impact"
    },
    {
      metric: "100+ Media Assets",
      context: "Secured media handling at scale with automated Vercel/Render pipelines and Cloudinary storage integrations.",
      category: "shipping"
    },
    {
      metric: "8 Protected Endpoints",
      context: "Successfully secured CodeMind AI with JWT authentication, custom tokens, and token refresh logic with role-based controls.",
      category: "security"
    }
  ],
  experience: [
    {
      role: "Associate Full Stack Developer",
      company: "Vayon Cloud Private Limited",
      period: "June 2026 - Present",
      mode: "Full-Time",
      stack: ["React.js", "Next.js", "Node.js", "Express.js", "PostgreSQL", "REST APIs", "JWT"],
      bullets: [
        "Contributing to the design and development of full-stack web applications using React.js, Node.js, Express.js, and PostgreSQL, reporting directly to the CEO and technical leadership.",
        "Building and maintaining REST APIs with JWT-based authentication, collaborating cross-functionally to support platform architecture and delivery."
      ]
    }
  ],
  projects: [
    {
      title: "Zenith AI",
      github: "https://github.com/riddhi191203/Zenith-AI",
      demo: "https://zenith-ai-seven.vercel.app",
      stack: ["React 19", "Vite", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "JWT", "Groq API", "ClipDrop API", "Cloudinary"],
      bullets: [
        "Architected a full-stack AI SaaS workspace with 4 integrated modules (content generation, image processing, resume analysis, community sharing), reducing context-switching for users by consolidating tools into a single dashboard.",
        "Built LLM-powered content pipelines via Groq API, achieving average response latency under 1.5s, and automated image generation using ClipDrop API for real-time AI output within the same UI.",
        "Secured the platform with JWT-based authentication and role-based access control across 6+ protected API routes, with Cloudinary handling media assets for 100+ uploaded files.",
        "Deployed frontend on Vercel and backend on Render with environment-based configuration, achieving production-grade scalability and zero-downtime deployments."
      ],
      highlights: ["4 integrated AI modules", "Under 1.5s visual response", "6+ secure API routes", "100+ active file loads"]
    },
    {
      title: "CodeMind AI",
      github: "https://github.com/riddhi191203/CodeMind-AI",
      demo: "https://code-mind-ai-rho.vercel.app",
      stack: ["React.js", "Vite", "Tailwind CSS", "Monaco Editor", "Node.js", "Express.js", "MongoDB", "Groq AI SDK", "JWT", "Framer Motion"],
      bullets: [
        "Engineered an AI-powered developer workspace supporting 4 core workflows - code review, debugging, refactoring, and complexity analysis - across 5+ programming languages.",
        "Embedded Groq AI SDK within a Monaco Editor environment to deliver context-aware code suggestions and automated error resolution, reducing average debugging time in user testing by an estimated 40%.",
        "Designed a persistent report management system with PDF export, enabling developers to save, revisit, and share AI generated code analysis reports; implemented full CRUD via MongoDB REST API.",
        "Secured the application with JWT authentication, protecting 8 API endpoints and managing user sessions with token refresh logic and access expiry."
      ],
      highlights: ["4 dev workflows (Review/debug/refactor/analyze)", "Monaco Editor deep integration", "40% debugging speedup", "8 secure endpoints & token refresh"]
    },
    {
      title: "ATSync AI",
      github: "https://github.com/riddhi191203/ATSync",
      demo: "https://at-sync.vercel.app",
      stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Google Gemini AI", "Puppeteer", "PDF Parse", "Multer"],
      bullets: [
        "Built an end-to-end AI career platform with 4 modules - resume analysis, ATS score optimisation, skill gap detection, and interview preparation - targeting job seekers to improve shortlisting rates.",
        "Engineered a Google Gemini AI pipeline to parse uploaded PDF resumes and generate ATS compatibility scores, identify missing skills against job descriptions, and produce personalised interview question sets - processing resumes in under 5 seconds.",
        "Developed a multi-format PDF ingestion system using Multer and PDF Parse, supporting resumes up to 5MB, with structured data extraction through scalable REST APIs.",
        "Secured user data with JWT-based authentication across all resume-handling endpoints, ensuring safe MongoDB storage of sensitive career information with field-level access control."
      ],
      highlights: ["4 integrated career optimization modules", "Gemini AI pipeline parsing", "Under 5s resume analysis", "Up to 5MB ingestion support"]
    }
  ],
  skills: [
    {
      category: "Languages",
      skills: ["JavaScript (ES6+)", "Python", "TypeScript", "C++", "C"]
    },
    {
      category: "Frontend",
      skills: ["React.js (v19)", "Next.js", "React Router DOM", "Vite", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "REST API Design", "JWT Authentication", "Role-Based Access Control"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "SQL"]
    },
    {
      category: "Developer Tools",
      skills: ["Git", "GitHub", "Postman", "Monaco Editor", "Puppeteer", "Cloudinary", "PDF Parse", "Multer"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["Vercel", "Render", "GitHub Actions", "Linux/Bash"]
    }
  ],
  education: [
    {
      institution: "GEETANJALI INSTITUTE OF TECHNICAL STUDIES",
      degree: "Bachelor of Technical Studies (B.Tech)",
      branch: "Computer Science and Engineering (AI)",
      period: "2023 - 2027",
      location: "Udaipur (Raj.)",
      cgpaOrYear: "CGPA: 9.78 / 10.00"
    }
  ],
  certifications: [
    {
      title: "Microsoft Azure AI-102: Azure AI Engineer Associate",
      issuer: "Microsoft",
      date: "April 2026"
    }
  ],
  awards: [],
  extra: []
};
