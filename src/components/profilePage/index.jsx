import React from "react";
import Navbar from "../navbar";
import "./index.css";

function Profile() {
  return (
    <>
      <Navbar />

      <div className="profile-container">

        <div className="profile-left">
          <img
            src="https://res.cloudinary.com/dodfv5sbg/image/upload/v1762071734/1735623794100_xng5xj.jpg"
            alt="profile"
            className="profile-photo"
          />

          <h2 className="profile-name">Vaibhava Raju Nadakuditi</h2>
          <p className="profile-role">Full-Stack Developer | Ethical Hacking Enthusiast</p>

          <div className="profile-social">
            <a href="https://github.com/Vaibhava2424" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/vaibhava-raju-nadakuditi" target="_blank">LinkedIn</a>
            <a href="mailto:vaibhava2424@gmail.com">Email</a>
          </div>
        </div>

        <div className="profile-right">

          <section className="profile-section">
            <h3>About Me</h3>
            <p>
                I am a versatile full-stack developer with expertise in Python, JavaScript, TypeScript, React.js, Next.js, and Linux. I have built projects like
                Tasty Kitchen (full stack with APIs), Jobby App (frontend), Tourism Website (HTML, Bootstrap), Food Munch (HTML, CSS), TechTrends
                India (React.js), Law Guide (team project with legal APIs), and SubTrack (UI/UX for subscription tracking). Skilled in API integration,
                responsive design, and cloud hosting, I focus on delivering scalable, user-friendly, and innovative digital products.            </p>
          </section>

          <section className="profile-section">
            <h3>Education</h3>
            <ul>
              <li><b>B.Sc Computer Science</b> – BITS Hyderabad</li>
              <li><b>NxtWave CCBP 4.0</b> – NIAT Program (Software Development)</li>
            </ul>
          </section>

          <section className="profile-section">
            <h3>Skills</h3>
            <div className="skills-grid">
                <span>HTML</span><span>CSS</span><span>JavaScript</span>
                <span>React.js</span><span>Next.js</span><span>TypeScript</span>
                <span>JSX</span><span>React Router</span><span>API Integration</span>
                <span>Responsive Design</span><span>UI/UX</span><span>Component Reusability</span>
                <span>Node.js</span><span>Express.js</span><span>REST API</span>
                <span>JWT Authentication</span><span>Axios</span><span>bcrypt.js</span>
                <span>MongoDB</span><span>Mongoose</span><span>MySQL</span>
                <span>Figma</span><span>Design Thinking</span><span>Git</span><span>GitHub</span>
            </div>
            </section>


          <section className="profile-section">
            <h3>Certifications</h3>
            <p>✅ Ethical Hacking 101 – NxtWave (2025)</p>
          </section>
        </div>

      </div>
    </>
  );
}

export default Profile;
