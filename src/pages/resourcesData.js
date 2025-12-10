export const resourcesData = {
  courses: [
    {
      id: 1,
      title: 'The Odin Project',
      url: 'https://www.theodinproject.com',
      description: 'Full-stack web development curriculum (JavaScript path)',
      status: 'in-progress',
      tags: ['webdev'],
      startDate: '2024-12-11',
      lastUpdated: 'current',
      progress: {
        label: 'Full Stack JavaScript Path',
        percentage: 55,
      },
      documentation: [
        {
          title: 'MDN Web Docs',
          url: 'https://developer.mozilla.org',
          description: 'web platform documentation',
        },
        {
          title: 'JavaScript.info',
          url: 'https://javascript.info',
          description: 'modern javascript tutorial',
        },
        {
          title: 'W3Schools',
          url: 'https://www.w3schools.com',
          description: 'web development tutorials',
        },
        {
          title: 'Webpack',
          url: 'https://webpack.js.org',
          description: 'module bundler docs',
          date: '2025-12-10',
        },
      ],
    },
    {
      id: 2,
      title: 'Power BI Desktop',
      url: 'https://www.mavenanalytics.io/course/microsoft-power-bi-desktop',
      description: 'Business intelligence & data visualization (Maven Analytics)',
      status: 'completed',
      tags: ['data', 'bi'],
      completedDate: '2024-06-20',
    },
    {
      id: 3,
      title: 'Machine Learning Specialization',
      url: 'https://www.coursera.org/specializations/machine-learning-introduction',
      description: "Andrew Ng's foundational ML course (Stanford/Coursera)",
      status: 'in-progress',
      tags: ['ai-ml'],
      modules: [
        {
          title: 'Course 1: Supervised Machine Learning',
          status: 'completed',
          completedDate: '2024-08-28',
        },
        {
          title: 'Course 2: Advanced Learning Algorithms',
          status: 'completed',
          completedDate: '2025-01-31',
        },
        {
          title: 'Course 3: Unsupervised Learning & Recommender Systems',
          status: 'in-progress',
        },
      ],
    },
  ],

  certifications: [
    {
      id: 1,
      title: 'SAP Certified Associate - Back-End Developer - ABAP Cloud',
      description: 'Acquiring Core ABAP Skills',
      status: 'in-progress',
      tags: ['sap-abap'],
      modules: [
        {
          code: 'S4D400',
          title: 'Learning Basic ABAP Programming',
          duration: '16 hr',
          status: 'completed',
          completedDate: '2025-10-28',
        },
        {
          code: 'S4D401',
          title: 'Deepening Your ABAP Programming Knowledge',
          duration: '23 hr',
          status: 'in-progress',
          progress: 'ch 1/9',
        },
        {
          code: 'S4D430',
          title: 'Building Data Models with ABAP Dictionary & CDS',
          duration: '20 hr',
          status: 'pending',
          progress: 'ch 0/7',
        },
        {
          code: 'S4Dxxx',
          title: 'Practicing Clean Core Extensibility for S/4HANA',
          status: 'in-progress',
          progress: 'ch 2/5',
          lastUpdated: 'current',
        },
      ],
    },
  ],

  books: [
    {
      id: 1,
      title: 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow',
      author: 'Aurélien Géron',
      status: 'reading',
      tags: ['ai-ml'],
      coverImage: '/assets/books/hands-on-ml.jpg', // Add your book cover images
      url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/',
    },
    // Add more books with coverImage property
  ],

  videos: [
    {
      id: 1,
      title: '[1hr Talk] Intro to Large Language Models',
      channel: 'Andrej Karpathy',
      url: 'https://www.youtube.com/watch?v=zjkBMFhNj_g',
      embedId: 'zjkBMFhNj_g', // YouTube video ID for embedding
      thumbnail: 'https://img.youtube.com/vi/zjkBMFhNj_g/maxresdefault.jpg',
      type: 'tutorial',
      tags: ['ai-ml'],
      date: '2025-12-10',
      description: 'Introduction to LLMs, their training, and applications',
    },
    // Add more standalone videos (not from Odin Project)
  ],
};
