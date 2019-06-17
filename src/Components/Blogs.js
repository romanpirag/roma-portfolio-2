import React from "react"

class Blogs extends React.Component {
  render() {
    return (
      <article>
        <div className="blogs-container">
          <div className="divider">
            <div>Technical Blogs</div>
          </div>
          <h2 className="projects-header">Technical Blogs</h2>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@romabot/code-zombie-1-intro-to-classes-ruby-6d0d56372ee5"
          >
            <img
              className="project-link"
              src="https://i.imgur.com/fFf6KWh.png"
              alt="Outer Brain Website"
            />
          </a>
          <p className="project-description">
            <strong>[code]Zombie #1: </strong>
            <span className="blog-description">Intro to Classes (Ruby)</span>
          </p>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@romabot/code-zombie-2-how-to-avoid-burnout-survive-the-learning-curve-efc32b8efdb5"
          >
            <img
              className="project-link"
              src="https://i.imgur.com/N2mwo7Y.png"
              alt="Outer Brain Website"
            />
          </a>
          <p className="project-description">
            {" "}
            <strong>[code]Zombie #2: </strong>{" "}
            <span className="blog-description">
              How to avoid burnout & survive the learning curve
            </span>
          </p>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@romabot/code-zombie-3-css-for-the-braindead-part-1-5657843a42ec"
          >
            <img
              className="project-link"
              src="https://i.imgur.com/RBi4Ote.png"
              alt="Outer Brain Website"
            />
          </a>
          <p className="project-description">
            {" "}
            <strong>[code]Zombie #3: </strong>{" "}
            <span className="blog-description">
              CSS for the living dead(part 1)
            </span>
          </p>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@romabot/code-zombie-4-css-for-the-braindead-part-2-17bb71c74396"
          >
            <img
              className="project-link"
              src="https://i.imgur.com/TWHgCXO.png"
              alt="Outer Brain Website"
            />
          </a>
          <p className="project-description">
            {" "}
            <strong>[code]Zombie #4: </strong>{" "}
            <span className="blog-description">
              CSS for the living dead(part 2)
            </span>
          </p>
        </div>
      </article>
    )
  }
}

export default Blogs
