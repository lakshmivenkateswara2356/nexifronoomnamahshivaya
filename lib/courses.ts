export type CourseStatus = 'OPEN' | 'CLOSED';

export type CourseItem = {
  id: string;
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
};

export const courses: CourseItem[] = [
  {
    id: 'c1',
    title: 'Python Full Stack + GenAI',
    slug: 'python-full-stack-genai',
    description:
      'Learn Python full-stack development, modern frontend technologies, APIs, databases and Generative AI.',
    shortDescription:
      'Learn Python full-stack development, modern frontend technologies, APIs, databases and Generative AI.',
    fee: 299,
    status: 'OPEN',
    duration: '12 weeks',
    image: '/images/courses/python-genai.jpg',
    technologies: ['Python', 'HTML', 'CSS', 'JavaScript', 'React', 'APIs', 'SQL', 'Generative AI', 'LLMs'],
    learningOverview: ['Build Python-based backend systems', 'Create modern frontend interfaces', 'Integrate APIs and databases', 'Work with GenAI workflows'],
    projects: ['AI Resume Analyzer', 'Full Stack Dashboard', 'Smart API integrations'],
    faq: [
      { question: 'What is the enrollment fee?', answer: 'The initial enrollment fee is ₹299.' },
      { question: 'Which courses are currently open?', answer: 'Python Full Stack + GenAI and Frontend Development + GenAI are currently open.' },
      { question: 'When do I pay ₹24,700?', answer: 'The ₹24,700 course and job support fee is due to Nexiquill only after you receive an offer letter and get placed. If you do not receive an offer letter or do not get placed, you owe Nexiquill no additional money beyond the ₹299 enrollment fee.' },
    ],
  },
  {
    id: 'c2',
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
      { question: 'What is the enrollment fee?', answer: 'The initial enrollment fee is ₹299.' },
      { question: 'Which courses are currently open?', answer: 'Python Full Stack + GenAI and Frontend Development + GenAI are currently open.' },
      { question: 'When do I pay ₹24,700?', answer: 'The ₹24,700 course and job support fee is due to Nexiquill only after you receive an offer letter and get placed. If you do not receive an offer letter or do not get placed, you owe Nexiquill no additional money beyond the ₹299 enrollment fee.' },
    ],
  },
  {
    id: 'c3',
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
    id: 'c4',
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
