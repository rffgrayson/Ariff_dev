export const workData = [
  {
    id: 'webkaiser',
    title: 'WebKaiser',
    type: 'project',
    status: 'active',
    description: 'B2B platform for managing client relationships and project workflows',
    tech: ['TypeScript', 'React', 'Node.js'],
    link: '#',
    github: null,
    preview: '/assets/work/webkaiser.gif',
    featured: true,
    date: '2024-10',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    type: 'project',
    status: 'active',
    description: 'Personal portfolio with real-time GitHub stats and activity tracking',
    tech: ['JavaScript', 'Webpack', 'APIs'],
    link: '#',
    github: 'https://github.com/rffgrayson/Ariff_dev',
    preview: '/assets/work/portfolio.png',
    featured: true,
    date: '2024-12',
  },
  {
    id: 'video-1',
    title: 'Building a CLI Tool',
    type: 'video',
    status: 'published',
    description: 'Tutorial on creating a command-line tool with Node.js',
    platform: 'YouTube',
    link: 'https://youtube.com/...',
    preview: '/assets/work/video-1-thumb.jpg',
    featured: false,
    date: '2024-11',
    duration: '15:30',
  },
];

export function getWorkByType(type) {
  if (type === 'all') return workData;
  return workData.filter((item) => item.type === type);
}

export function getFeaturedWork() {
  return workData.filter((item) => item.featured);
}
