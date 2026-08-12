import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <h2 className="logo">sk_sahithya</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hello">Hello, I'm</p>

          <h1>Sunkara Krishna Sahithya</h1>

          <h2>
            Computer Science & Business Systems Student
          </h2>

          <p className="description">
            I am a B.Tech student passionate about software development,
            problem solving, and building useful technology.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View My Projects
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section">
        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Who I Am</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am Krishna Sahithya Sunkara, a B.Tech student pursuing
              Computer Science & Business Systems at VNR VJIET, Hyderabad.
            </p>

            <p>
              I am interested in software development, data structures,
              databases, and building practical applications. I enjoy
              learning new technologies and applying them through projects.
            </p>

            <p>
              Currently, I am focused on strengthening my programming,
              problem-solving, and development skills while preparing for
              software engineering opportunities.
            </p>
          </div>

          <div className="about-details">

            <div className="detail-card">
              <span>Education</span>
              <h3>B.Tech - CSBS</h3>
              <p>VNR VJIET</p>
            </div>

            <div className="detail-card">
              <span>Graduation</span>
              <h3>2027</h3>
              <p>B.Tech Student</p>
            </div>

            <div className="detail-card">
              <span>Focus</span>
              <h3>Software Development</h3>
              <p>DSA & Full Stack Development</p>
            </div>

          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills-section">
        <div className="section-heading">
          <p>MY SKILLS</p>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Programming Languages</h3>

            <div className="skill-list">
              <span>Java</span>
              <span>C++</span>
              <span>Python</span>
              <span>C</span>
              <span>JavaScript</span>
              <span>SQL</span>
              <span>R</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Web Technologies</h3>

            <div className="skill-list">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>Angular</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Databases</h3>

            <div className="skill-list">
              <span>MySQL</span>
              <span>MongoDB</span>
              <span>JDBC</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Tools & Technologies</h3>

            <div className="skill-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>Linux</span>
              <span>Postman</span>
              <span>VS Code</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Core Concepts</h3>

            <div className="skill-list">
              <span>Data Structures</span>
              <span>Algorithms</span>
              <span>OOP</span>
              <span>DBMS</span>
              <span>Operating Systems</span>
              <span>Computer Networks</span>
            </div>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects-section">
        <div className="section-heading">
          <p>MY WORK</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">

          {/* Project 1 */}
          <div className="project-card">
            <div className="project-content">

              <span className="project-number">01</span>

              <h3>Project Tracker System</h3>

              <p>
                A web-based project management application designed to
                organize projects, tasks, and progress efficiently.
              </p>

              <div className="project-tech">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MySQL</span>
              </div>

              <div className="project-links">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo →
                </a>
              </div>

            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-content">

              <span className="project-number">02</span>

              <h3>Mee-Wallet</h3>

              <p>
                A Java-based student wallet application developed using
                JDBC and MySQL for managing student transactions and
                financial records.
              </p>

              <div className="project-tech">
                <span>Java</span>
                <span>JDBC</span>
                <span>MySQL</span>
              </div>

              <div className="project-links">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>
              </div>

            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-content">

              <span className="project-number">03</span>

              <h3>AI Music Composition System</h3>

              <p>
                An AI-powered music generation application that creates
                music from user prompts using generative AI models and
                provides an interactive interface.
              </p>

              <div className="project-tech">
                <span>Python</span>
                <span>Streamlit</span>
                <span>Hugging Face</span>
                <span>MusicGen</span>
              </div>

              <div className="project-links">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="experience-section">
        <div className="section-heading">
          <p>MY EXPERIENCE</p>
          <h2>Experience & Training</h2>
        </div>

        <div className="experience-container">

          <div className="experience-card">
            <div className="experience-header">

              <div>
                <h3>AI/ML Virtual Intern</h3>
                <h4>Infosys Springboard</h4>
              </div>

              <span className="experience-date">
                Aug 2024 - Oct 2024
              </span>

            </div>

            <p>
              Worked on an AI-based music composition system using
              generative AI technologies. Developed an interactive
              application and explored machine learning and generative
              AI concepts.
            </p>

            <div className="experience-tech">
              <span>Python</span>
              <span>Streamlit</span>
              <span>Hugging Face</span>
              <span>MusicGen</span>
              <span>AudioCraft</span>
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-header">

              <div>
                <h3>DSA Training Program</h3>
                <h4>Smart Interviews</h4>
              </div>

              <span className="experience-date">
                Training Program
              </span>

            </div>

            <p>
              Strengthened problem-solving and data structures skills
              through structured coding practice covering algorithms,
              arrays, strings, trees, graphs, recursion, and other
              fundamental DSA concepts.
            </p>

            <div className="experience-tech">
              <span>Data Structures</span>
              <span>Algorithms</span>
              <span>C++</span>
              <span>Problem Solving</span>
            </div>
          </div>

        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="achievements-section">
        <div className="section-heading">
          <p>ACHIEVEMENTS</p>
          <h2>Certifications & Achievements</h2>
        </div>

        <div className="achievements-grid">

          <div className="achievement-card">
            <div className="achievement-icon">01</div>

            <h3>OCI Generative AI Professional</h3>

            <p>
              Oracle Cloud Infrastructure certification focused on
              Generative AI concepts and technologies.
            </p>

            <span>Oracle • 2025</span>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">02</div>

            <h3>C++ Certification</h3>

            <p>
              Certified in C++ programming through GeeksforGeeks,
              demonstrating programming and problem-solving skills.
            </p>

            <span>GeeksforGeeks • 2025</span>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">03</div>

            <h3>JEE Main</h3>

            <p>
              Secured a 95.33 percentile in JEE Main 2023.
            </p>

            <span>JEE Main • 2023</span>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">04</div>

            <h3>CodeChef</h3>

            <p>
              Achieved a 2-star rating on CodeChef through competitive
              programming and coding practice.
            </p>

            <span>Competitive Programming</span>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">05</div>

            <h3>IUCEE AI Course</h3>

            <p>
              Completed an AI-focused course covering fundamental
              artificial intelligence concepts.
            </p>

            <span>AI Certification</span>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">06</div>

            <h3>Hackathons & Events</h3>

            <p>
              Participated in technical events and hackathons including
              KNOWINGIT 3.0 and VJ Hackathon.
            </p>

            <span>Technical Events</span>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="section-heading">
          <p>GET IN TOUCH</p>
          <h2>Let's Connect</h2>
        </div>

        <div className="contact-content">

          <div className="contact-intro">

            <h3>
              Have an opportunity or project in mind?
            </h3>

            <p>
              I'm open to internship opportunities, software development
              roles, technical collaborations, and interesting projects.
            </p>

            <a
              href="mailto:sunkarakrishnasahithya@gmail.com"
              className="contact-email"
            >
              sunkarakrishnasahithya@gmail.com
            </a>

          </div>

          <div className="contact-links">

            <a
              href="https://github.com/SKsahithya"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>GitHub</span>
              <span>→</span>
            </a>

            <a
              href="https://www.linkedin.com/in/sunkara-krishna-sahithya-7a2117295/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>LinkedIn</span>
              <span>→</span>
            </a>

            <a
              href="mailto:sunkarakrishnasahithya@gmail.com"
              className="contact-link"
            >
              <span>Email</span>
              <span>→</span>
            </a>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          © 2026 Krishna Sahithya Sunkara. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;