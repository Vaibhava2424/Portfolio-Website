import React, { useState } from "react";
import { Link } from "react-router-dom";
import projectsList from "../projectsList";
import Navbar from "../navbar";
import "./index.css";

function Home() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = ["All", "mern", "responsive", "AI", "other","frontend"];

  const filteredProjects = projectsList.filter(project => {
    const matchFilter = filter === "All" || project.category.toLowerCase() === filter.toLowerCase();
    const matchSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <>
      <Navbar />

      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search projects by it's Title..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="home-layout">

        <div className="filter-sidebar">
          <h3>Filter By Category</h3>
          {filters.map(f => (
            <button
              key={f}
              className={filter === f ? "active" : ""}
              onClick={() => setFilter(f)}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="projects-section">
          <h2>Projects</h2>

          <div className="projects-container">
            {filteredProjects.map(project => (
              <div className="card" key={project.id}>
                <img src={project.image} alt={project.title} className="project-img" />

                <h3>{project.title}</h3>
                <p className="desc">{project.description.substring(0, 100)}...</p>

                <ul className="tech-list">
                  {project.techStack.map((tech, i) => <li key={i}>{tech}</li>)}
                </ul>

                <Link to={`/project/${project.id}`} className="view-btn-link">
                  <button className="view-btn">🔍 View Details</button>
                </Link>
              </div>
            ))}
          </div>

        </div>

      </div>
    </>
  );
}

export default Home;
