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
          description: 'Web platform documentation',
        },
        {
          title: 'JavaScript.info',
          url: 'https://javascript.info',
          description: 'Modern JavaScript tutorial',
        },
        {
          title: 'W3Schools',
          url: 'https://www.w3schools.com',
          description: 'Web development tutorials',
        },
        {
          title: 'Web Dev Simplified',
          url: 'https://www.youtube.com/@WebDevSimplified',
          description: 'Web dev content creator',
        },
        {
          title: 'Webpack',
          url: 'https://webpack.js.org',
          description: 'Module bundler documentation',
          date: '2025-12-10',
        },
      ],
    },

    {
      id: 2,
      title: 'Microsoft Power BI Desktop for Business Intelligence',
      url: 'https://www.mavenanalytics.io/course/microsoft-power-bi-desktop',
      author: 'Maven Analytics',
      credential:
        'https://certificates.mavenanalytics.io/ce037db6-0a60-4364-ba1a-9a937f7c7d50#acc.wAeJ3vVB',
      status: 'completed',
      tags: ['data'],
      completedDate: '2024-06-20',
      thumbnail:
        'https://cdn.asp.events/CLIENT_NASBA_287596D2_5056_B733_49DFF69B632BDF66/companyProfiles/9B202CCF-9CBC-FF5D-27CA5E9A37D2EDC7-logo.png',
    },
    {
      id: 3,
      title: 'Supervised Machine Learning: Regression and Classification',
      tags: ['ai-ml'],
      author: 'DeepLearning.AI',
      status: 'completed',
      completedDate: '2024-08-28',
      link: 'https://www.coursera.org/learn/machine-learning',
      credential: 'https://www.coursera.org/account/accomplishments/certificate/G7E7GGGW6G2H',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZnxfo58TJV8tIfREI-pRpi-rfeoc5PQrb5g&s',
    },
    {
      id: 4,
      title: ' S4D400 - Learning Basic ABAP Programming',
      author: 'SAP',
      duration: '16 hr',
      status: 'completed',
      completedDate: '2025-10-28',
      credential: 'https://badger.learning.sap.com/verify/xotel-sacak-nutof-disup-kacag',
      link: 'https://learning.sap.com/courses/basic-abap-programming',
      tags: ['sap', 'abap'],
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFxN7F9Naj_OsFHUrA5liE-31COk42yvczg&s',
    },
  ],
};
