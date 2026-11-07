export type CourseStatus = 'OPEN' | 'CLOSED';

export type CourseItem = {
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  fee: number;
  status: CourseStatus;
  duration: string;
  image: string;
  technologies: string[];
  learningOverview: string[];
  projects: string[];
  faq: { question: string; answer: string }[];
  pricing?: {
    regularFee: number;
    batchFee: number;
    bookingFee: number;
    remainingFee: number;
    seatLimit: number;
    enrollmentDeadline: string;
  };
};

export const courses: CourseItem[] = [
  {
    title: 'Python Full Stack + GenAI',
    slug: 'python-full-stack-genai',
    description:
      'Build practical full-stack skills with Python, React, databases, and Generative AI through live learning and real-world projects.',
    shortDescription:
      'Python, React, databases, and Generative AI with hands-on projects and a paid internship opportunity.',
    fee: 299,
    status: 'OPEN',
    duration: '8–12 weeks',
    pricing: {
      regularFee: 33999,
      batchFee: 14999,
      bookingFee: 299,
      remainingFee: 14700,
      seatLimit: 50,
      enrollmentDeadline: '18 November 2026',
    },
    image: '/images/courses/python-genai.jpg',
    technologies: [
      'Python',
      'Django',
      'FastAPI',
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node.js',
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Generative AI',
      'LLMs',
      'LangChain',
      'Vector databases',
      'RAG',
      'Git',
      'GitHub',
      'DevOps',
    ],
    learningOverview: [
      'Python programming from core to advanced',
      'Web development with Django and FastAPI',
      'Frontend development with React.js',
      'Backend development with Node.js',
      'PostgreSQL, MongoDB, MySQL, and API integration',
      'Generative AI, LLMs, LangChain, vector databases, and RAG',
      'Git, GitHub, DevOps basics, system design, and deployment',
      'Build and deploy real-world applications',
    ],
    projects: [
      'AI-powered chat application',
      'Document Q&A with RAG',
      'AI Resume Analyzer',
      'Full-stack e-commerce application',
      'AI customer-support bot',
      'AI image and text generation app',
      'End-to-end capstone project',
    ],
    faq: [
      { question: 'How much is the first-batch fee?', answer: 'The first-batch fee is ₹14,999 for the first 50 seats, reduced from the regular fee of ₹33,999.' },
      { question: 'What do I pay to book a seat?', answer: 'Pay ₹299 upfront to book your seat. The remaining ₹14,700 is due after receiving an offer letter.' },
      { question: 'How long is the program?', answer: 'The live program runs for 8–12 weeks, followed by a 3-month paid internship opportunity.' },
    ],
  },
  {
    title: 'Frontend Development + GenAI',
    slug: 'frontend-development-genai',
    description:
      'Build production-ready frontend experiences while understanding AI-assisted workflows, APIs, and modern UI engineering.',
    shortDescription:
      'Build production-ready frontend experiences while understanding AI-assisted workflows, APIs, and modern UI engineering.',
    fee: 299,
    status: 'OPEN',
    duration: '10 weeks',
    image: '/images/courses/frontend-genai.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'REST APIs', 'Git', 'Generative AI', 'LLMs'],
    learningOverview: ['Responsive product interfaces', 'Frontend architecture patterns', 'AI-assisted workflows', 'Debugging and project builds'],
    projects: ['AI Interview Assistant', 'E-Commerce Application', 'Portfolio website build'],
    faq: [
      { question: 'How do I enquire about fees?', answer: 'Contact the Nexiquill team for current batch pricing and payment details.' },
      { question: 'What is the program duration?', answer: 'This program runs for 10 weeks.' },
    ],
  },
  {
    title: 'Node.js Full Stack + React + LLM',
    slug: 'nodejs-full-stack-react-llm',
    description:
      'A deeper full-stack pathway covering Node.js, React, backend architecture, product work, and LLM integration.',
    shortDescription:
      'A deeper full-stack pathway covering Node.js, React, backend architecture, product work, and LLM integration.',
    fee: 299,
    status: 'CLOSED',
    duration: '14 weeks',
    image: '/images/courses/node-react-llm.jpg',
    technologies: ['Node.js', 'React', 'Express', 'MongoDB', 'LLMs', 'REST APIs', 'Git'],
    learningOverview: ['Backend architecture', 'Product delivery workflows', 'LLM integration patterns', 'Scaling up full-stack skills'],
    projects: ['AI Content Generator', 'Full Stack Dashboard', 'Backend systems'],
    faq: [
      { question: 'Why are some courses closed?', answer: 'Some batches have already started and therefore new enrollments are not currently available.' },
    ],
  },
  {
    title: 'DevOps',
    slug: 'devops',
    description:
      'Learn DevOps fundamentals, containerization, deployment workflows, observability, and cloud infrastructure operations.',
    shortDescription:
      'Learn DevOps fundamentals, containerization, deployment workflows, observability, and cloud infrastructure operations.',
    fee: 299,
    status: 'CLOSED',
    duration: '8 weeks',
    image: '/images/courses/devops.jpg',
    technologies: ['Docker', 'Linux', 'Git', 'Cloud', 'CI/CD', 'Monitoring'],
    learningOverview: ['Deployment pipelines', 'Cloud operations', 'Containerization', 'Infrastructure basics'],
    projects: ['Deployment setup', 'Infrastructure scaffolding', 'Monitoring dashboard'],
    faq: [
      { question: 'Why are some courses closed?', answer: 'Some batches have already started and therefore new enrollments are not currently available.' },
    ],
  },
];

export const openCourses = courses.filter((course) => course.status === 'OPEN');
export const closedCourses = courses.filter((course) => course.status === 'CLOSED');

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}
