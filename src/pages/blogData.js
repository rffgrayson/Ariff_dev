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
          'SAP recently open-sourced some of their repositories after what feels like a century. Check out https://github.com/sap',
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
        type: 'text',
        content:
          "If ABAP developers earned less than general software engineers, I wouldn't hesitate to pivot.",
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
  {
    id: 2,
    title: 'Why I Built My Own Webpack Template (And Why You Should Too)',
    date: 'Jan 4, 2026',
    tags: ['development', 'javascript', 'webdev'],
    excerpt:
      "I used to think bloated templates were just the 'cost of doing business' in React. Then I tried Webpack + Bun. The performance gain was personal.",

    content: [
      {
        type: 'text',
        content: `Everyone's obsessed with frameworks. React this, Next.js that, Vite everything. But sometimes you just need to build something fast without the framework overhead.

That's why I built my own template repo—a modern JavaScript setup with Webpack 5, Babel, ESLint, Prettier, and full Bun support. No React. No TypeScript (unless you want it). Just clean, fast, production-ready JavaScript tooling.`,
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Framework Fatigue Is Real',
      },
      {
        type: 'text',
        content: `Here's the thing about modern web development: we've overcomplicated everything. Need a simple landing page? "Use Next.js!" Want to build a basic tool? "React + TypeScript + Vite!" Building a small internal dashboard? "Obviously you need a full stack framework!"

No. Just... no.

Most projects don't need the complexity of React. They don't need TypeScript's strictness. They definitely don't need another opinionated framework that forces you into its ecosystem. Sometimes vanilla JavaScript with properly configured build tools is exactly what you need.`,
      },
      {
        type: 'callout',
        style: 'warning',
        content:
          "The average React app ships 142KB of JavaScript before you've written a single line of application code. My template? The base bundle is minimal—you only ship what you write.",
      },
      {
        type: 'heading',
        level: 2,
        content: 'What I Actually Built',
      },
      {
        type: 'text',
        content: `My template repo is deliberately focused on developer experience and flexibility. Here's what's included:`,
      },
      {
        type: 'heading',
        level: 3,
        content: 'Webpack 5 (Configured Properly)',
      },
      {
        type: 'text',
        content: `Yes, I know Webpack has a reputation. "It's too complicated!" "The config is huge!" "Just use Vite!"

But here's what people don't talk about: once you configure Webpack properly, it just works. And unlike newer tools, you have complete control over every aspect of your build.

I use three separate config files:`,
      },
      {
        type: 'text',
        content: `• webpack.common.js - Shared configuration for both environments

      • webpack.dev.js - Development server with hot module replacement

      • webpack.prod.js - Production optimizations, minification, and tree-shaking

This separation makes it crystal clear what's happening in each environment. No magic, no hidden configurations. You can open any config file and understand exactly what it does.`,
      },
      {
        type: 'heading',
        level: 3,
        content: 'Babel (Modern JavaScript, Anywhere)',
      },
      {
        type: 'text',
        content: `Babel handles the transpilation, targeting browsers with >0.25% market share. This means you can use modern JavaScript features (async/await, optional chaining, nullish coalescing, etc.) and the build system automatically polyfills what's needed.

The .babelrc is configured to use @babel/preset-env with automatic polyfill injection. Want to change browser targets? Just edit one file.`,
      },
      {
        type: 'heading',
        level: 3,
        content: 'Bun Support (The Game Changer)',
      },
      {
        type: 'text',
        content: `This is where it gets interesting. The template works with both npm and Bun. You choose your package manager.

Why Bun matters:`,
      },
      {
        type: 'stats',
        data: [
          { label: 'npm install', value: '~30-40s' },
          { label: 'bun install', value: '~2-3s' },
          { label: 'Speed boost', value: '10-15x' },
          { label: 'Compatibility', value: '100%' },
        ],
      },
      {
        type: 'text',
        content: `Installing dependencies that take npm 30+ seconds? Bun does it in 2-3 seconds. The speedup is insane, especially when you're setting up multiple projects or working in CI/CD pipelines.

Plus, Bun can run JavaScript files directly without any additional tooling. The bunfig.toml file lets you customize Bun's behavior if needed, but the defaults just work.`,
      },
      {
        type: 'heading',
        level: 3,
        content: 'Code Quality Tools (No Excuses)',
      },
      {
        type: 'text',
        content: `Clean, consistent code isn't optional. The template includes:

ESLint with modern flat config - Catches bugs and enforces code standards

Prettier - Auto-formats on save, no configuration debates

Husky git hooks - Prevents bad code from reaching your repo

EditorConfig - Consistent formatting across different editors

These tools work together seamlessly. ESLint catches logical issues, Prettier handles formatting, and Husky makes sure nothing slips through during commits.`,
      },
      {
        type: 'heading',
        level: 3,
        content: 'CI/CD Out of the Box',
      },
      {
        type: 'text',
        content: `The template includes a GitHub Actions workflow that automatically:

• Runs linting checks on every push

• Verifies code formatting

• Tests production builds

• Tests with both npm AND Bun to ensure compatibility

No setup required. Push your code, and GitHub Actions handles the rest. The workflow catches issues before they reach production.`,
      },
      {
        type: 'heading',
        level: 2,
        content: 'Why Not Just Use Vite?',
      },
      {
        type: 'text',
        content: `Fair question. Vite is great for React/Vue projects. But for vanilla JavaScript, Vite feels like overkill. You're adding a tool that's optimized for framework development when you don't need it.

Webpack gives me:`,
      },
      {
        type: 'text',
        content: `• Complete control over the build process

      • Better understanding of what's actually happening

      • Production-ready configs that I can customize

      • More mature ecosystem and better debugging tools

      • No framework assumptions built into the tooling

Vite is magic. Webpack is transparent. For a learning project and template that I want to truly understand, I prefer transparent.`,
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Actual File Structure',
      },
      {
        type: 'text',
        content: `The repo is intentionally straightforward:`,
      },
      {
        type: 'code',
        language: 'text',
        content: `template-repo/
├── .github/
│   └── workflows/
│       └── ci.yml        # Automated testing
├── .husky/               # Git hooks
├── src/                  # Your code goes here
│   └── index.js
├── dist/                 # Build output
├── .babelrc              # Transpilation rules
├── .editorconfig         # Editor settings
├── .nvmrc                # Node version (20+)
├── bunfig.toml           # Bun config
├── eslint.config.js      # Linting rules
├── .prettierrc           # Formatting rules
├── webpack.common.js     # Shared config
├── webpack.dev.js        # Dev config
├── webpack.prod.js       # Prod config
└── package.json          # Scripts & deps`,
      },
      {
        type: 'text',
        content: `No complicated folder structure. No opinionated architecture. Just the essentials. When your project grows, you refactor. But starting simple means fewer decisions and faster iteration.`,
      },
      {
        type: 'heading',
        level: 2,
        content: 'What This Template Is Perfect For',
      },
      {
        type: 'text',
        content: `I've used this template for several projects now. It's ideal for:

Landing pages - Fast builds, minimal overhead, easy deployment

Web tools - Calculators, converters, dashboards without framework complexity

Prototypes - Get ideas running in minutes, not hours

Learning projects - Understand bundlers without framework magic

Internal tools - When you need functionality, not framework features

GitHub Pages sites - Includes deployment workflow

If you're building any of these and reaching for create-react-app, stop. You don't need it.`,
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Numbers',
      },
      {
        type: 'text',
        content: `Let's talk actual performance. Here's what I measured:`,
      },
      {
        type: 'text',
        content: `Development:
• Initial build: ~1-2 seconds

• Hot module replacement: Instant

• Dev server startup: <1 second

Production:
• Full optimization: ~2-3 seconds

• Minification + tree-shaking: Built-in

• Bundle size: Depends on your code, not the framework

Setup:
• Install with npm: ~30-40 seconds

• Install with Bun: ~2-3 seconds

• Time to first code: <60 seconds`,
      },
      {
        type: 'text',
        content: `Compare that to a typical Create React App setup where initial builds take 10-15 seconds, production builds take 30-45 seconds, and you're shipping a 142KB framework before writing any code.

The speed difference compounds over time.`,
      },
      {
        type: 'heading',
        level: 2,
        content: 'What I Learned Building This',
      },
      {
        type: 'text',
        content: `Split configs are essential - Don't try to handle dev and prod in one file with environment checks. Separate files are clearer and easier to debug.

Babel isn't dead - Despite what Twitter says, Babel is still the most reliable way to ensure JavaScript compatibility across browsers.

Husky saves headaches - Git hooks that prevent bad commits are worth their weight in gold. One bad push can waste hours.

Documentation matters - The README has detailed setup instructions, available scripts, and customization guides. Future me is grateful.

Test both package managers - Running CI/CD with both npm and Bun catches compatibility issues early.

Keep it simple - Every feature I added had to justify its existence. No bloat allowed.`,
      },
      {
        type: 'heading',
        level: 2,
        content: 'Real Talk: When NOT to Use This',
      },
      {
        type: 'text',
        content: `Don't use this template if:`,
      },
      {
        type: 'text',
        content: `• You need complex state management (use React + Redux/Zustand)
• You're building a large multi-page SPA (use Next.js)

• Your team is already standardized on a framework

• You need server-side rendering

• You want "just works" over "I understand how it works"

This template is about understanding and control. If you want maximum productivity with a framework you trust, use that framework. No shame in it.`,
      },
      {
        type: 'callout',
        style: 'warning',
        content:
          "If you're building a complex SPA with routing, authentication, and real-time updates—just use React. This template is for everything else.",
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Real Value Isnt Speed',
      },
      {
        type: 'text',
        content: `Yes, the template is fast. Yes, Bun makes installs near-instant. But the real value is understanding.

Most developers run create-react-app and treat it like a black box. When something breaks, they're lost. When they need to optimize, they don't know where to start. When they want to add a custom build step, they have to eject and lose everything.

Building this template forced me to understand:

• How module bundling actually works

• What happens during transpilation

• How loaders and plugins transform code

• Why certain optimizations matter

• Where bundle size comes from

• How hot module replacement functions

This knowledge transfers everywhere. Even when I use frameworks now, I understand what's happening under the hood. That makes debugging easier, optimization possible, and customization straightforward.`,
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Bottom Line',
      },
      {
        type: 'text',
        content: `This template isn't revolutionary. It's Webpack + Babel + ESLint + Prettier + Bun support + CI/CD. But it's mine, and I understand every line of configuration.

I can spin up a new project in under a minute. I can customize any part of the build pipeline. I can optimize for specific use cases. I can add TypeScript if I want it. And I'm not fighting against framework conventions or dealing with hidden configurations.

For 80% of web projects, this is enough. And that's exactly the point—stop adding complexity you don't need.`,
      },
      {
        type: 'callout',
        style: 'info',
        content:
          'Check it out: https://github.com/rffgrayson/template-repo - MIT licensed. Use it, fork it, modify it, make it yours.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Should You Build Your Own?',
      },
      {
        type: 'text',
        content: `Absolutely. Not because mine isn't good enough for you, but because the process teaches you how your tools work.

You'll spend a weekend setting up Webpack. You'll debug cryptic error messages. You'll read documentation for loaders and plugins. You'll configure Babel presets. You'll set up git hooks that actually work.

And when you're done, you'll understand your development environment in a way that using a pre-built framework never teaches you.

So yes, this template is ready to use. But building your own is even more valuable. Start with the basics, add features as you need them, and learn every step of the way.`,
      },
      {
        type: 'heading',
        level: 2,
        content: 'Final Thoughts',
      },
      {
        type: 'text',
        content: `This template has become my default starting point for non-framework projects. It's fast, it's understandable, and it gets out of my way.

More importantly, it taught me that modern tooling doesn't have to be complicated or opaque. With proper configuration and good documentation, even Webpack becomes approachable.

Build what works for you. Understand your tools. Ship fast. And maybe, just maybe, you don't need that framework after all.`,
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
