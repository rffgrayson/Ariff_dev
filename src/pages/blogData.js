export const blogPosts = [
  {
    id: 1,
    title: 'Building a Portfolio Site',
    date: 'Dec 09, 2025',
    tags: ['webdev', 'javascript'],
    excerpt:
      'Started building this portfolio site from scratch using vanilla JavaScript and Webpack. The goal was to keep it minimal but functional.',
    content: `
      <p>Started building this portfolio site from scratch using vanilla JavaScript and Webpack. The goal was to keep it minimal but functional.</p>
      <p>Key features I implemented:</p>
      <ul>
        <li>Client-side routing without page reloads</li>
        <li>GitHub API integration for real-time activity status</li>
        <li>WakaTime API for coding stats</li>
        <li>Mouse tracking for silly stats (because why not)</li>
      </ul>
      <p>The hardest part? Making the ASCII art look good across different screen sizes. Still working on that...</p>
    `,
  },
  {
    id: 2,
    title: 'Learning The Odin Project',
    date: 'Nov 28, 2025',
    tags: ['learning', 'webdev'],
    excerpt:
      "Been going through The Odin Project curriculum. It's been a great structured path for learning full-stack development.",
    content: `
      <p>Been going through The Odin Project curriculum. It's been a great structured path for learning full-stack development.</p>
      <p>What I appreciate most is the emphasis on understanding fundamentals rather than just following tutorials. The projects force you to actually think and problem-solve.</p>
    `,
  },
  {
    id: 3,
    title: 'First Week at Deloitte',
    date: 'Oct 15, 2024',
    tags: ['work', 'career'],
    excerpt:
      'Started as a software engineer at Deloitte. Mostly working with legacy code and trying not to break production.',
    content: `
      <p>Started as a software engineer at Deloitte. Mostly working with legacy code and trying not to break production.</p>
      <p>The onboarding process has been smooth, and the team is great. Excited to learn from experienced developers and contribute to real-world projects.</p>
    `,
  },
  {
    id: 4,
    title: 'Thoughts on Clean Code',
    date: 'Sep 22, 2024',
    tags: ['programming', 'best-practices'],
    excerpt: 'Been reading "Clean Code" by Uncle Bob. Some takeaways:',
    content: `
      <p>Been reading "Clean Code" by Uncle Bob. Some takeaways:</p>
      <ul>
        <li>Names should reveal intent</li>
        <li>Functions should do one thing and do it well</li>
        <li>Comments are often a sign of bad code</li>
      </ul>
      <p>While I don't agree with everything, the core principles are solid. Writing maintainable code is just as important as making it work.</p>
    `,
  },
];
