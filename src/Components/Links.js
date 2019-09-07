import React from "react"

class Links extends React.Component {
  render() {
    return (
      <div className="linkscontainer">
        <a
          className="social-link"
          href="https://github.com/romanpirag"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github-square" />
        </a>

        <a
          className="social-link"
          href="https://www.linkedin.com/in/romanpirag/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin" />
        </a>

        <a
          className="social-link"
          href="https://medium.com/@romabot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-medium" />
        </a>
        
      </div>
    )
  }
}

export default Links