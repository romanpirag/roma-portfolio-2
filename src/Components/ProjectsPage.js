import React from "react"

class ProjectsPage extends React.Component {
  render() {
    return (
      <section>
        <div className="project-container">
          <h2 className="projects-header">Projects</h2>
          <a href="http://google.com">
            <img
              className="project-link"
              src="https://i.imgur.com/H4gmm4Q.png"
              alt="Outer Brain Website"
            />
          </a>
          <p className="project-description">
            {" "}
            <strong>Outer Brain:</strong>{" "}
            <span className="inner-description">
              {" "}
              Website for a Video Game Development Studio
            </span>
          </p>
          <a href="http://google.com">
            <img
              className="project-link"
              src="https://i.imgur.com/i4DUMH0.png"
              alt="Habitrack"
            />
          </a>
          <p className="project-description">
            {" "}
            <strong>Habitrack:</strong>{" "}
            <span className="inner-description">
              {" "}
              Neon city inspired skill tracker app
            </span>
          </p>
          <a href="http://google.com">
            <img
              className="project-link"
              src="https://i.imgur.com/DX8UKNe.png"
              alt="SoundScape"
            />
          </a>
          <p className="project-description">
            {" "}
            <strong>Soundscape:</strong>{" "}
            <span className="inner-description">
              {" "}
              Journal that uses sound instead of words
            </span>
          </p>
        </div>
      </section>
    )
  }
}

export default ProjectsPage
