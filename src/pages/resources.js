export function renderResources() {
  return `
    <div class="page-header">
      <h1 style="color: var(--cyan);">resources</h1>
      <p style="color: var(--comment); margin-top: 10px;">what i'm learning & useful tools</p>
    </div>

    <div class="resources-section">
      <h2 style="color: var(--yellow); margin-top: 30px;">currently learning</h2>
      
      <div class="learning-item">
        <div class="learning-header">
          <a href="https://www.theodinproject.com" target="_blank" class="resource-link">
            The Odin Project
          </a>
          <span class="status-badge in-progress">in progress</span>
        </div>
        <p class="learning-desc">Full-stack web development curriculum (JavaScript path)</p>
        <div class="progress-container">
          <div class="progress-label">Full Stack JavaScript Path</div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 55%; background-color: var(--yellow);"></div>
          </div>
        </div>
        
        <div class="sub-resources">
          <div class="sub-header">recommended resources:</div>
          <div class="sub-list">
            <a href="https://developer.mozilla.org" target="_blank" class="sub-link">MDN Web Docs</a>
            <a href="https://javascript.info" target="_blank" class="sub-link">JavaScript.info</a>
            <a href="https://www.w3schools.com" target="_blank" class="sub-link">W3Schools</a>
            <a href="https://www.youtube.com/@TraversyMedia" target="_blank" class="sub-link">Traversy Media</a>
            <a href="https://www.youtube.com/@WebDevSimplified" target="_blank" class="sub-link">Web Dev Simplified</a>
          </div>
        </div>
      </div>

      <div class="learning-item">
        <div class="learning-header">
          <span class="resource-link">SAP ABAP Learning Journey</span>
          <span class="status-badge in-progress">in progress</span>
        </div>
        <p class="learning-desc">Acquiring core ABAP programming skills for SAP development</p>
        
        <div class="course-list">
          <div class="course-item">
            <div class="course-header">
              <span class="course-number">S4D400</span>
              <span class="course-title">Learning Basic ABAP Programming</span>
              <span class="course-status completed">✓ completed</span>
            </div>
            <p class="course-time">16 hr</p>
          </div>
          
          <div class="course-item">
            <div class="course-header">
              <span class="course-number">S4D401</span>
              <span class="course-title">Deepening Your ABAP Programming Knowledge</span>
              <span class="course-status current">→ ch 1/9</span>
            </div>
            <p class="course-time">23 hr</p>
          </div>
          
          <div class="course-item">
            <div class="course-header">
              <span class="course-number">S4D430</span>
              <span class="course-title">Building Data Models with ABAP Dictionary & CDS</span>
              <span class="course-status pending">→ ch 0/7</span>
            </div>
            <p class="course-time">20 hr</p>
          </div>
          
          <div class="course-item">
            <div class="course-header">
              <span class="course-number">S4Dxxx</span>
              <span class="course-title">Practicing Clean Core Extensibility for S/4HANA</span>
              <span class="course-status current">ch 2/5</span>
            </div>
          </div>
        </div>
      </div>

      <div class="learning-item">
        <div class="learning-header">
          <a href="https://www.mavenanalytics.io/course/microsoft-power-bi-desktop" target="_blank" class="resource-link">
            Power BI Desktop
          </a>
          <span class="status-badge completed">completed</span>
        </div>
        <p class="learning-desc">Business intelligence & data visualization (Maven Analytics)</p>
      </div>

     <div class="learning-item">
<div class="learning-header">
<a href="https://www.coursera.org/specializations/machine-learning-introduction" target="_blank" class="resource-link">
Machine Learning Specialization
</a>
<span class="status-badge completed">completed</span>
</div>
<p class="learning-desc">Andrew Ng's foundational ML course (Stanford/Coursera)</p>


<div class="course-list">
<div class="course-item">
<div class="course-header">
<span class="course-title">Course 1: Supervised Machine Learning</span>
<span class="course-status completed">✓ completed</span>
</div>
</div>


<div class="course-item">
<div class="course-header">
<span class="course-title">Course 2: Advanced Learning Algorithms</span>
<span class="course-status completed">✓ completed</span>
</div>
</div>


<div class="course-item">
<div class="course-header">
<span class="course-title">Course 3: Unsupervised Learning & Recommender Systems</span>
<span class="course-status completed">✓ completed</span>
</div>
</div>
</div>
</div>


      <h2 style="color: var(--yellow); margin-top: 40px;">documentation</h2>
      <div class="resource-list">
        <div class="resource-item">
          <a href="https://www.typescriptlang.org/docs/" target="_blank" class="resource-link">
            TypeScript Docs
          </a>
          <span class="resource-desc">— typescript documentation</span>
        </div>
        <div class="resource-item">
          <a href="https://go.dev/doc/" target="_blank" class="resource-link">
            Go Documentation
          </a>
          <span class="resource-desc">— golang reference</span>
        </div>
        <div class="resource-item">
          <a href="https://webpack.js.org" target="_blank" class="resource-link">
            Webpack
          </a>
          <span class="resource-desc">— module bundler docs</span>
        </div>
      </div>

      <h2 style="color: var(--yellow); margin-top: 40px;">communities</h2>
      <div class="resource-list">
        <div class="resource-item">
          <a href="https://discord.com/invite/theodinproject" target="_blank" class="resource-link">
            The Odin Project Discord
          </a>
          <span class="resource-desc">— learning & peer support</span>
        </div>
        <div class="resource-item">
          <a href="https://www.reddit.com/r/webdev/" target="_blank" class="resource-link">
            r/webdev
          </a>
          <span class="resource-desc">— web development subreddit</span>
        </div>
        <div class="resource-item">
          <a href="https://discord.com/invite/frontendmentor" target="_blank" class="resource-link">
            Frontend Mentor Discord
          </a>
          <span class="resource-desc">— frontend challenges & feedback</span>
        </div>
        <div class="resource-item">
          <a href="https://twitter.com/search?q=%23buildinpublic" target="_blank" class="resource-link">
            #buildinpublic (X/Twitter)
          </a>
          <span class="resource-desc">— sharing progress & learning publicly</span>
        </div>
      </div>
    </div>
  `;
}
