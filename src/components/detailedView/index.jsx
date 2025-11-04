import React from "react";
import { useParams, Link } from "react-router-dom";
import projectsList from "../projectsList";
import Navbar from "../navbar";
import "./index.css";

function DetailedView() {
  const { id } = useParams();
  const project = projectsList.find(p => p.id === Number(id)); // ✅ FIXED

  if (!project) {
    return (
      <div style={{ color: "#fff", padding: "50px" }}>
        <h2>Project Not Found</h2>
        <Link to="/" className="back-btn">⬅ Back</Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="detailed-wrapper">

        <div className="dv-card">

          <div className="dv-img-box">
            <img src={project.image} alt={project.title} className="dv-img" />
          </div>

          <div className="dv-content">

            <h2 className="dv-title">{project.title}</h2>
            <p className="dv-category">📌 {project.category.toUpperCase()}</p>

            <p className="dv-desc">{project.description}</p>

            <h4 className="dv-subtitle">🛠 Tech Stack</h4>
            <div className="dv-tech-list">
              {project.techStack.map((tech, i) => (
                <span key={i} className="dv-tech">{tech}</span>
              ))}
            </div>

            <div className="dv-links">
        <a href={project.link} target="_blank" rel="noreferrer" className="dv-btn">🔗 Project Link</a>

        {project.github && (
            <>
            {project.github.frontend && (
                <a href={project.github.frontend} target="_blank" rel="noreferrer" className="dv-btn outline">
                💻 Frontend Git Repo
                </a>
            )}
            {project.github.backend && (
                <a href={project.github.backend} target="_blank" rel="noreferrer" className="dv-btn outline">
                🛠 Backend Git Repo
                </a>
            )}
            </>
        )}
        </div>


          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="bottom-back-btn-wrapper">
          <Link to="/" className="bottom-back-btn">⬅ Back to Projects</Link>
        </div>
      </div>
    </>
  );
}

export default DetailedView;
