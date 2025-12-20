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
        src: 'https://user-images.githubusercontent.com/5097067/60347073-d2bcca00-99bc-11e9-8f2f-ddbe9310b9b4.png',
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
        style: 'info',
        content:
          "SAP recently open-sourced some of their repositories after what feels like a century. Check out https://github.com/sap - they're modernizing, which means ABAP isn't staying stuck in 1990 forever.",
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
        type: 'heading',
        level: 3,
        content: 'The Harsh Reality of General SWE in 2025',
      },
      {
        type: 'text',
        content: `Let's talk about what's happening in the general software engineering market right now. We're living in the era of "vibecoding"—where AI tools like Cursor, GitHub Copilot, and ChatGPT can generate entire applications. Companies are realizing they might not need 50 developers when 10 developers with AI can do the same work.

The competition is absolutely brutal. You're not just competing with fresh graduates anymore. You're competing with:
- Laid-off senior engineers from Meta, Google, Amazon
- Experienced developers from failed startups
- International talent willing to work remote
- AI that can code better than most juniors

Getting into big tech? Nearly impossible as a new grad. Getting into a decent startup? You're fighting against people with 5+ years of experience who just got laid off and are desperate for any role.`,
      },
      {
        type: 'callout',
        style: 'warning',
        content:
          "In 2024-2025, over 150,000 tech workers were laid off. They're all flooding the job market, and they have the experience you don't.",
      },
      {
        type: 'quote',
        content:
          "If ABAP developers earned less than general software engineers, I wouldn't hesitate to pivot.",
      },
      {
        type: 'text',
        content: `But here's the thing: ABAP developers earn significantly more than general developers, with drastically less competition. In Malaysia (where I'm based), a regular software engineer at a normal company makes around RM 4,000-6,000 ($850-$1,300) per month. An ABAP developer? RM 7,000-10,000+ ($1,500-$2,200) at the same company level.`,
      },
      {
        type: 'stats',
        data: [
          { label: 'Normal SWE (MY)', value: 'RM 5K' },
          { label: 'ABAP Dev (MY)', value: 'RM 8.5K' },
          { label: 'Competition', value: '↓ 70%' },
          { label: 'Job security', value: 'High' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'The AI-Proof Niche',
      },
      {
        type: 'text',
        content: `Here's another truth: AI can generate a React app in seconds. But can it navigate 20-year-old SAP systems with custom configurations, undocumented business logic, and German variable names? Not really.

ABAP work requires deep domain knowledge, understanding of business processes, and the ability to work with legacy systems that have no Stack Overflow answers. It's not sexy, but it's AI-resistant in a way that modern web development isn't.`,
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Bottom Line',
      },
      {
        type: 'text',
        content: `In the end, I do ABAP for the money, the mental challenge, and job security. It's mind-blowingly difficult to debug—imagine a massive codebase written in German syntax where you have to go through it line by line without understanding what's actually in the code.

I have a family and a partner I want to take care of. So even though I love studying math and coding, if there's an opportunity to make significantly more money with less competition and better job security, I'm going to take it. That's just the reality.

While my peers are fighting for RM 5K junior dev positions against laid-off seniors, I'm getting offers for RM 8K+ because nobody wants to learn ABAP. Sometimes the smart move isn't following your passion—it's finding where supply and demand work in your favor.`,
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
