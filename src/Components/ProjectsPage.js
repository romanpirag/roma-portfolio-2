import React from "react"

class ProjectsPage extends React.Component {
  render() {
    return (
      <article>
        <div className="project-container">
          <div className="divider">
            <div>Development</div>
          </div>
          <h2 className="projects-header">Development</h2>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://outerbrainstudios.netlify.com/"
          >
            <img
              className="project-link"
              src="https://i.imgur.com/H4gmm4Q.png"
              alt="Outer Brain Website"
            />
          </a>
          <p className="project-description">
            <strong>Outer Brain:</strong>
            <span className="inner-description">
              Website for a Video Game Development Studio
            </span>
            <span className="small-app-description">
              Videgame development studio
            </span>
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://habitrack-app.herokuapp.com/"
          >
            <img
              className="project-link"
              src="https://i.imgur.com/i4DUMH0.png"
              alt="Habitrack"
            />
          </a>
          <p className="project-description">
            <strong>Habitrack:</strong>
            <span className="inner-description">
              Neon city inspired skill tracker app
            </span>
            <span className="small-app-description">Skill tracker app</span>
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://soundscape.netlify.com/"
          >
            <img
              className="project-link"
              src="https://i.imgur.com/DX8UKNe.png"
              alt="SoundScape"
            />
          </a>
          <p className="project-description">
            <strong>Soundscape:</strong>
            <span className="inner-description">
              Journal app which uses sound instead of words
            </span>
            <span className="small-app-description">Sound journal app</span>
          </p>
        </div>
      </article>
    )
  }
}

export default ProjectsPage
