export interface Project {
  id: string;
  title: string;
  subtitle: string;
  logo: string;
  context: string;
  role: string;
  stack: string;
  timeline: string;
  description: string;
  purpose: string;
  images: {
    main: string;
    secondary: string;
    tertiary: string;
  };
  problem: string;
  solution: string;
  contributions: string;
  takeaways: Array<{
    title: string;
    description: string;
  }>;
}

export const projects: Record<string, Project> = {
  'drillvision': {
    id: 'drillvision',
    title: 'DrillVision',
    subtitle: 'Web Application',
    logo: '/images/logo-gallery/drillvision.svg',
    context: 'College Assignment',
    role: 'Full Stack Developer',
    stack: 'HTML, CSS, Node.js, PostgreSQL, Figma, Illustrator',
    timeline: '2024-2025',
    description: 'DrillVision is a web application that uses content-aware machine learning to analyze a marching band\'s performance...',
    purpose: 'To enhance the precision and effectiveness of marching band performances through advanced visual analysis.',
    images: {
      main: '/images/work/DrillVision-Home.png',
      secondary: '/images/work/DrillVision-Class.png',
      tertiary: '/images/work/DrillVision-Feedback.png'
    },
    problem: 'Marching bands aim for flawless performances by intricate design and movements...',
    solution: 'My team and I developed DrillVision, with the intention to automate feedback...',
    contributions: 'As the full stack developer, I was responsible for the entire development of the web application...',
    takeaways: [
      {
        title: 'Technical Implementation',
        description: 'Built full-stack solution using HTML/CSS, Node.js, PostgreSQL, and Python-based computer vision'
      },
      // ... other takeaways
    ]
  },
  // Add other projects here with the same structure
};