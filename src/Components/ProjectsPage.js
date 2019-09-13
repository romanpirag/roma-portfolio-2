import React from "react"

class ProjectsPage extends React.Component {
  render() {
    return (
      <div className="project-container">
        <div className="divider">Development</div>

        <h2 className="projects-header">Development</h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://habitrack.netlify.com/"
        >
          <img
            className="project-link"
            src="https://i.imgur.com/i4DUMH0.png"
            alt="Habitrack"
          />
        </a>

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

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://neonflix.netlify.com/"
        >
          <img
            className="project-link"
            src="https://i.imgur.com/dWVjOM7.png"
            alt="NeonFlix"
          />
        </a>

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
      </div>
    )
  }
}

export default ProjectsPage
