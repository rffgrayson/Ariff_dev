// Enhanced blog data structure with support for rich content
export const blogPosts = [
  {
    id: 1,
    title: 'Why I Still Decide To Study ABAP',
    date: 'Dec 18, 2025',
    tags: ['abap', 'sap', 'career'],
    excerpt: "It's for the money. That's it.",

    // Rich content blocks array for mixed media
    content: [
      {
        type: 'text',
        content: `If you asked me why I still study ABAP, I'll be honest: it's mostly about money and competition.

When I first started studying software engineering and applying for jobs, I got zero offers. As someone from a math background without a solid portfolio, I only knew basic frontend and had finished some machine learning courses. I couldn't build anything valuable on my own—I was only strong theoretically in math.

Then I got an offer as a developer. I was excited and happy, but it wasn't in the language I expected. I wouldn't have minded PHP, Laravel, or Java—but it was ABAP. This was my first introduction to the language, and honestly, the syntax is terrible. It's basically German SQL.`,
      },
      {
        type: 'heading',
        level: 2,
        content: 'What is ABAP?',
      },
      {
        type: 'text',
        content: `ABAP is essentially a backend programming language for SAP—a proprietary language similar to how COBOL was used historically or how Java dominates enterprise development. But ABAP is specifically for SAP enterprise systems, meaning nearly every multinational corporation either has their own ABAP developers or outsources the work.`,
      },
      {
        type: 'image',
        src: 'https://user-images.githubusercontent.com/5097067/60347073-d2bcca00-99bc-11e9-8f2f-ddbe9310b9b4.png', // example
        alt: 'ABAP syntax example',
        caption: 'Yes, this is real ABAP code 💀',
      },
      {
        type: 'text',
        content: `Classic ABAP involves working with selection screens, Dynpro, ALV, function modules, and Smartforms—where you're literally changing databases directly. Most old-school developers use SAP GUI, an app that lets them modify the system directly.

Of course, where there's a backend, there's a frontend. SAP's frontend is powered by UI5, a JavaScript framework built on TREE and GraphQL libraries. It's almost funny—every big tech company has already moved on from GraphQL, and now SAP suddenly wants in.`,
      },
      {
        type: 'callout',
        style: 'info', // info, warning, success, error
        content:
          'SAP recently open-sourced some of their repositories after what feels like a century, which opens up opportunities to contribute.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'So Why Do I Stick With It?',
      },
      {
        type: 'text',
        content: `Now back to the main point: why is money the main reason? Do I have no passion for SAP?

I am interested in SAP infrastructure, but let's be real—AI/ML and web development are more exciting. I want to build things on my own, not spend my life maintaining legacy code or creating enterprise programs.`,
      },
      {
        type: 'quote',
        content:
          "If ABAP developers earned less than general software engineers, I wouldn't hesitate to pivot.",
      },
      {
        type: 'text',
        content: `But here's the thing: ABAP developers earn about 1.5x more than general developers, with significantly less competition. Who in their right mind won't go for it.`,
      },
      {
        type: 'stats',
        data: [
          { label: 'ABAP avg salary', value: '1.5x' },
          { label: 'Competition', value: '↓ 60%' },
          { label: 'Job security', value: 'High' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Bottom Line',
      },
      {
        type: 'text',
        content: `In the end, I do ABAP for the money and the mental challenge. It's mind-blowingly difficult to debug—imagine a massive codebase written in German syntax where you have to go through it line by line without understanding what's actually in the code.

I have a family and a partner I want to take care of. So even though I love studying math and coding, if there's an opportunity to make more money, I'm going to take it. That's just the reality.`,
      },
    ],
  },
];

// Helper to get all unique tags
export function getAllTags() {
  const tags = new Set();
  blogPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}
