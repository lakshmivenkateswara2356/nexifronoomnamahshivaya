import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const courses: Array<{
    title: string;
    slug: string;
    description: string;
    shortDescription: string;
    fee: number;
    status: 'OPEN' | 'CLOSED';
    duration: string;
    image: string;
    technologies: string[];
    learningOverview: string[];
    projects: string[];
  }> = [
    {
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
      learningOverview: ['Python programming', 'Modern frontend', 'API design', 'Database work', 'GenAI workflows'],
      projects: ['AI Resume Analyzer', 'Full Stack Dashboard'],
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
      learningOverview: ['Responsive UI', 'State management', 'API integration', 'AI features', 'Git workflows'],
      projects: ['AI Interview Assistant', 'E-Commerce Application'],
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
      technologies: ['Node.js', 'React', 'Express', 'MongoDB', 'LLMs'],
      learningOverview: ['Backend APIs', 'System design', 'AI integrations', 'Production delivery'],
      projects: ['AI Content Generator', 'Full Stack Dashboard'],
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
      technologies: ['Docker', 'Linux', 'Git', 'Cloud', 'CI/CD'],
      learningOverview: ['Linux basics', 'Docker', 'Cloud workflows', 'Deployment pipelines'],
      projects: ['Deployment Pipeline', 'Infrastructure Setup'],
    },
  ];

  for (const course of courses) {
    await prisma.course.upsert({
      where: { slug: course.slug },
      update: course,
      create: course,
    });
  }

  const passwordHash = '$2a$10$XvN7h2GmSivM1Kym5QvK7e7sqaM6B0p0lKfO55cTl7kOZ0h8sK6lK';
  await prisma.admin.upsert({
    where: { email: 'admin@nexiquill.com' },
    update: { passwordHash },
    create: { email: 'admin@nexiquill.com', passwordHash, role: 'SUPER_ADMIN' },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
