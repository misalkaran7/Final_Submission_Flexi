import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  // --- IMPORTANT ---
  // For the "Download Resume" button to work:
  // 1. Create a folder named "public" inside your "frontend" folder.
  // 2. Place your resume file inside it, named exactly: "karan_misal_resume.pdf"
  // Full path: frontend/public/karan_misal_resume.pdf

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h2 className="welcome-user">Welcome, {user?.name}!</h2>
        <button onClick={logout} className="logout-button">Logout</button>
      </header>

      <main>
        <section className="hero">
          <h1>KARAN MISAL</h1>
          <p className="bio">
            Student at Symbiosis Institute of Technology, Nagpur.
          </p>
          <a 
            href="/karan_misal_resume.pdf" 
            download="Karan_Misal_Resume.pdf" 
            className="cta-button"
          >
            Download Resume
          </a>
        </section>

        <section className="portfolio-section">
          <h3>Summary of Skills</h3>
          <ul className="skills-list">
            <li>C / C++</li>
            <li>Python</li>
            <li>Data Structures</li>
            <li>Operating Systems</li>
            <li>SQL</li>
            <li>HTML & CSS</li>
            <li>React</li>
            <li>Node.js & Express</li>
          </ul>
        </section>

        <section className="portfolio-section">
          <h3>Experience</h3>
          {/* Add your experiences here. Here is a template: */}
          <div className="item">
            <h4>Your Job Title (e.g., Web Dev Intern)</h4>
            <p className="item-sub">Company Name | May 2024 - Aug 2024</p>
            <ul className="item-details">
              <li>Your first responsibility or accomplishment.</li>
              <li>Your second responsibility or accomplishment.</li>
            </ul>
          </div>
          <div className="item">
            <h4>Another Job Title</h4>
            <p className="item-sub">Another Company | Jan 2023 - May 2023</p>
            <ul className="item-details">
              <li>Description of your work.</li>
            </ul>
          </div>
        </section>

        <section className="portfolio-section">
          <h3>Projects</h3>
          <div className="item">
            <h4>Personal Portfolio Website</h4>
            <p className="item-sub">The website you are currently on.</p>
            <ul className="item-details">
              <li>Built a full-stack MERN application with secure JWT authentication.</li>
              <li>Features a React frontend and a Node.js/Express backend API.</li>
            </ul>
            <a href="https://github.com/your-github-username/your-repo-name" target="_blank" rel="noopener noreferrer" className="item-link">View on GitHub</a>
          </div>
          {/* Add more projects here */}
          <div className="item">
            <h4>Another Project Title</h4>
            <p className="item-sub">Tech stack (e.g., Python, SQL)</p>
            <ul className="item-details">
              <li>What this project does and what you learned.</li>
            </ul>
            <a href="#" target="_blank" rel="noopener noreferrer" className="item-link">View Project</a>
          </div>
        </section>
        
        <section className="portfolio-section">
          <h3>Certificates</h3>
          <div className="item">
            <h4>Certificate Name (e.g., Python for Everybody)</h4>
            <p className="item-sub">Issued by Coursera | Jan 2024</p>
          </div>
          <div className="item">
            <h4>Another Certificate (e.g., SQL Basics)</h4>
            <p className="item-sub">Issued by HackerRank | Feb 2024</p>
          </div>
        </section>
      </main>

      <footer className="portfolio-footer">
        <h3>Contact Me</h3>
        <ul className="contact-list">
          <li>
            <strong>Phone:</strong> <a href="tel:8999877481">8999877481</a>
          </li>
          <li>
            <strong>Email:</strong> <a href="mailto:misalkaran071@gmail.com">misalkaran071@gmail.com</a>
          </li>
          <li>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/karan-misal-4b4117284/" target="_blank" rel="noopener noreferrer">your-linkedin-username</a>
          </li>
          <li>
            <strong>GitHub:</strong> <a href="https://github.com/misalkaran7" target="_blank" rel="noopener noreferrer">your-github-username</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
