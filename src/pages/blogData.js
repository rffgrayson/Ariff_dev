export const blogPosts = [
  {
    id: 1,
    title: 'Classic ABAP vs ABAP Cloud (The Glow Up)',
    date: 'Dec 11, 2025',
    tags: ['abap', 'sap', 'cloud'],
    excerpt:
      'Comparing classic ABAP to ABAP Cloud — basically the old uncle vs the new gym bro version.',
    content: `
      <p><strong>Classic ABAP vs ABAP Cloud — the quick version</strong></p>
      <p>Classic ABAP is like your old kampung house. Cozy, full access, you can modify anything, even the walls if you want. ABAP Cloud? More like a modern condo: clean, structured, and you can't simply knock the wall because "management doesn’t allow".</p>

      <h3>Main Differences (my version)</h3>
      <ul>
        <li><strong>Extensions:</strong> Classic ABAP: "modify lah". ABAP Cloud: "please use the proper API, sir".</li>
        <li><strong>APIs:</strong> Cloud gives you only the safe, stable ones. No playing with dangerous internals.</li>
        <li><strong>Environment:</strong> Classic = on-prem. Cloud = BTP + clean-core vibes.</li>
        <li><strong>Upgrades:</strong> Cloud won't break because SAP literally doesn't let you touch the forbidden stuff.</li>
      </ul>

      <p>Conclusion? If you want a future-proof SAP career, you better start speaking ABAP Cloud before SAP leaves you behind like you're still using Nokia 3310.</p>
    `,
  },
  {
    id: 2,
    title: 'Why Study DSA? (Short answer: suffering builds character)',
    date: 'Dec 11, 2025',
    tags: ['dsa', 'learning'],
    excerpt: 'DSA isn’t just for interviews. It’s basically gym training but for your brain.',
    content: `
      <p><strong>Why DSA?</strong></p>
      <p>DSA is that one thing everyone complains about but still has to learn. Like cardio. Or taxes. But the truth is — knowing DSA makes you think better as a developer.</p>

      <h3>Benefits (trust me lah)</h3>
      <ul>
        <li>You actually understand what your code is doing instead of "hope it works".</li>
        <li>You can solve problems faster (good when deadlines are chasing you).</li>
        <li>You stop writing O(n^999) nonsense.</li>
        <li>Interviews feel less like torture.</li>
      </ul>

      <p>Even if you don’t use DSA daily, the thinking skill you get from it is priceless. It's like learning how to fight even if you’re not planning to masuk UFC.</p>
    `,
  },
  {
    id: 3,
    title: 'OOP, SOLID, and Clean Code (The survival guide)',
    date: 'Dec 11, 2025',
    tags: ['oop', 'solid', 'clean-code'],
    excerpt: 'OOP, SOLID, and clean code explained in the simplest, non-boring way possible.',
    content: `
      <p><strong>OOP in simple words</strong></p>
      <p>OOP is just a fancy way of organizing code so you don’t cry when maintaining it later.</p>

      <ul>
        <li><strong>Encapsulation:</strong> Hide the mess inside, show only what people need.</li>
        <li><strong>Abstraction:</strong> Give the user the simple version, keep the complicated stuff behind the curtain.</li>
        <li><strong>Inheritance:</strong> Reuse code without ctrl+c ctrl+v like a savage.</li>
        <li><strong>Polymorphism:</strong> Same function name, different behavior. Basically, code cosplay.</li>
      </ul>

      <h3>The 5 SOLID Principles (translated to human language)</h3>
      <ul>
        <li><strong>S:</strong> One job only. Don’t make a class that does everything from logging to making coffee.</li>
        <li><strong>O:</strong> Add new features without breaking old ones. Simple.</li>
        <li><strong>L:</strong> Subclasses shouldn’t behave like weird stepchildren.</li>
        <li><strong>I:</strong> Don’t force classes to implement functions they don’t need.</li>
        <li><strong>D:</strong> Depend on interfaces, not concrete things. More flexibility, fewer regrets.</li>
      </ul>

      <h3>Clean Code Basics</h3>
      <ul>
        <li>Write code like someone else will read it. Because they will.</li>
        <li>Short functions. Not novels.</li>
        <li>Good names. No more <code>data2</code> or <code>xFinalFinalV3</code>.</li>
        <li>Refactor a bit every time so future-you doesn’t hate past-you.</li>
      </ul>

      <p>Writing clean code won’t make you a genius overnight, but it will make your life way easier. And your teammates won’t complain about your code. Maybe.</p>
    `,
  },
];
