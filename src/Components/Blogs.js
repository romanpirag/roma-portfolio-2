import React from "react"

class Blogs extends React.Component {
  render() {
    return (
      <section>
        <div className="blogs-container">
          <div className="divider">
            <h1>Blogs</h1>
          </div>
          <h2 className="projects-header">Blogs</h2>

          <a href="https://medium.com/@romabot/code-zombie-1-intro-to-classes-ruby-6d0d56372ee5">
            <img
              className="project-link"
              src="https://i.imgur.com/nql15cp.png"
              alt="Outer Brain Website"
            />
          </a>
          <p className="project-description">
            {" "}
            <strong>[code]Zombie #1: </strong>{" "}
            <span className="inner-description">
              Intro to Classes (Ruby)
            </span>
          </p>

          <a href="https://medium.com/@romabot/code-zombie-2-how-to-avoid-burnout-survive-the-learning-curve-efc32b8efdb5">
            <img
              className="project-link"
              src="https://i.imgur.com/G6MtQbW.png"
              alt="Outer Brain Website"
            />
          </a>
          <p className="project-description">
            {" "}
            <strong>[code]Zombie #2: </strong>{" "}
            <span className="inner-description">
              How to avoid burnout & survive the learning curve
            </span>
          </p>

          <a href="https://medium.com/@romabot/code-zombie-3-css-for-the-braindead-part-1-5657843a42ec">
            <img
              className="project-link"
              src="https://i.imgur.com/G3wsdqH.png"
              alt="Outer Brain Website"
            />
          </a>
          <p className="project-description">
            {" "}
            <strong>[code]Zombie #3: </strong>{" "}
            <span className="inner-description">
              CSS for the living dead(part 1)
            </span>
          </p>

          <a href="https://medium.com/@romabot/code-zombie-4-css-for-the-braindead-part-2-17bb71c74396">
            <img
              className="project-link"
              src="https://i.imgur.com/dsQfgjs.png"
              alt="Outer Brain Website"
            />
          </a>
          <p className="project-description">
            {" "}
            <strong>[code]Zombie #4: </strong>{" "}
            <span className="inner-description">
              CSS for the living dead(part 2)
            </span>
          </p>
          
        </div>
      </section>
    )
  }
}

export default Blogs
