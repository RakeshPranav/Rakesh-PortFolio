export const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Recognition"];

export const SKILLS = {
  Languages: ["Java", "Python", "SQL", "HTML", "CSS"],
  Technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  "Cloud & Tools": ["AWS", "GitHub", "Vercel", "Firebase", "MySQL"],
  "AI / ML": ["Pandas", "NumPy", "Scikit-learn", "RAG", "Agentic AI"],
};

export const EXPERIENCE = [
  {
    role: "ML Intern",
    company: "Infosys Springboard",
    period: "2026",
    color: "#6366f1",
    bullets: [
      "Built a pronunciation assessment system using React + Flask",
      "Integrated Whisper and Wav2Vec2 for speech recognition and scoring",
      "Used G2P (Grapheme-to-Phoneme) for phonetic analysis pipelines",
    ],
  },
  {
    role: "AWS Cloud Intern",
    company: "RECCSAR Pvt Ltd",
    period: "2025",
    color: "#FF9900",
    bullets: [
      "Worked with EC2, S3, and AWS Amplify for scalable cloud deployments",
      "Improved application performance and reduced downtime across services",
      "Configured cloud infrastructure for production-grade reliability",
    ],
  },
  {
    role: "Web Development Intern",
    company: "QONO Technologies",
    period: "2025",
    color: "#0ea5e9",
    bullets: [
      "Built full-stack MERN applications from design to deployment",
      "Handled frontend & backend integration with REST APIs",
      "Contributed to improving UX and reducing page load times",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Intelligent Speech Therapy Platform",
    description:
      "An AI-powered platform that provides real-time pronunciation feedback and personalised speech therapy exercises. Built with a React frontend and Flask backend, leveraging transformer-based speech models for analysis.",
    stack: ["React", "Flask", "Whisper", "Wav2Vec2", "Python", "G2P"],
    gradient: "from-violet-500 to-indigo-600",
    github: "#",
  },
  {
    title: "Deepfake Image Detection System",
    description:
      "A deep-learning system that detects AI-generated or manipulated images with high accuracy. Uses CNN-based feature extraction combined with frequency-domain analysis to surface subtle manipulation artifacts.",
    stack: ["Python", "PyTorch", "OpenCV", "NumPy", "Scikit-learn", "FastAPI"],
    gradient: "from-rose-500 to-pink-600",
    github: "#",
  },
  {
    title: "AI Resume Analyzer",
    description: "An intelligent tool that parses resumes against job descriptions, identifying key skill gaps and predicting ATS match scores using NLP models.",
    stack: ["React", "Python", "FastAPI", "spaCy", "Transformers"],
    gradient: "from-blue-500 to-cyan-600",
    github: "#",
  },
  {
    title: "Cloud Deployment Dashboard",
    description: "A centralized dashboard for monitoring and managing multi-cloud deployments, tracking server health, active containers, and cost metrics in real-time.",
    stack: ["React", "AWS", "Docker", "Node.js", "GraphQL"],
    gradient: "from-orange-500 to-amber-600",
    github: "#",
  },
  {
    title: "Smart Expense Tracker",
    description: "A financial management app that automatically categorizes transactions using ML, providing actionable insights into spending habits with beautiful data visualizations.",
    stack: ["React", "Firebase", "TensorFlow.js", "Chart.js"],
    gradient: "from-emerald-500 to-teal-600",
    github: "#",
  }
];

export const ACHIEVEMENTS = [
  {
    label: "MXCEL’23 - Winner",
    short: "Won 1st place among 100+ participants",
    detail: "Secured 1st place for presenting a smart city concept that leverages technology and intelligent transportation systems to enhance urban efficiency and sustainability.",
    image: "/paper.jpg",
    link: "https://www.linkedin.com/in/rakesh-pranav"
  },
  {
    label: "BytzStrom’25 - Winner",
    short: "1st Place among 500+ developers.",
    detail: "Secured victory by building a high-impact solution within limited time.Exhibited excellent collaboration and technical execution skills.",
    image: "/hack1.jpeg",
    link: "https://www.linkedin.com/in/rakesh-pranav"
  },
  {
    label: "SmartXHackathon’2025 - Winner ",
    short: "Secured 1st Place among 100+ teams.",
    detail: "Won by delivering an innovative and scalable technology solution.Showcased advanced problem-solving and development skills.",
    image: "/hack2.jpeg",
    link: "https://www.linkedin.com/in/rakesh-pranav"
  },
  {
    label: "AWS Certified Cloud Practitioner",
    short: "Official Certification from Amazon Web Services.",
    detail: "Earned the AWS Certified Cloud Practitioner credential, demonstrating foundational knowledge of cloud concepts, security, technology, billing, and support services.",
    image: "/AWS cp.png",
    link: "https://www.linkedin.com/in/rakesh-pranav"
  },
  {
    label: "MongoDB Atlas Administrator",
    short: "Official Certification from MongoDB.",
    detail: "Earned the MongoDB Certified Associate Atlas Administrator credential, demonstrating proficiency in deploying, managing, and securing MongoDB Atlas clusters.",
    image: "/MongoDb.png",
    link: "https://www.credly.com/go/68TjEfWh"
  },
  {
    label: "GitHub Foundations",
    short: "Official Certification from GitHub.",
    detail: "Validated foundational knowledge of Git, GitHub repository management, collaboration workflows, and modern version control methodologies.",
    image: "/Github.png",
    link: "https://www.credly.com/go/zSbKGF6Z"
  },
  {
    label: "Insights from BigQuery",
    short: "Google Cloud Skill Badge.",
    detail: "Completed the introductory Smart Analytics skill badge from Google Cloud, demonstrating the ability to query and analyze massive datasets using BigQuery.",
    image: "/Google bigQuery.png",
    link: "https://www.linkedin.com/in/rakesh-pranav"
  },
  {
    label: "Oracle Foundations Associate",
    short: "Oracle Data Platform 2025 Certification.",
    detail: "Officially recognized by Oracle University as an Oracle Certified Foundations Associate for Data Platform technologies.",
    image: "/Oracle.png",
    link: "https://www.linkedin.com/in/rakesh-pranav"
  },
  {
    label: "Practical Cyber Security",
    short: "NPTEL Elite Certification (IIT Kanpur).",
    detail: "Scored 75% in the 12-week NPTEL Online Certification course for Cyber Security Practitioners, officially funded by the MoE, Govt. of India.",
    image: "/NPTEL1.png",
    link: "https://www.linkedin.com/in/rakesh-pranav"
  },
  {
    label: "Business Ethics",
    short: "NPTEL Elite Certification (IIT Kharagpur).",
    detail: "Achieved an Elite 80% consolidated score in the 12-week comprehensive Business Ethics module awarded by the Indian Institute of Technology Kharagpur.",
    image: "/NPTEL2.png",
    link: "https://www.linkedin.com/in/rakesh-pranav"
  },
  {
    label: "Fundamentals of AI",
    short: "NPTEL Elite Certification (IIT Guwahati).",
    detail: "Successfully completed the 12-week Artificial Intelligence fundamentals course with a 67% score, encompassing modern AI theory and applications.",
    image: "/NPTEL3.jpg",
    link: "https://www.linkedin.com/in/rakesh-pranav"
  }
];
