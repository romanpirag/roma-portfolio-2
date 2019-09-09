import React from "react"

class Blogs extends React.Component {
  render() {
    return (
      <div className="project-container">
        <div className="divider">Technical Blogs</div>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@romabot/code-zombie-1-intro-to-classes-ruby-6d0d56372ee5"
        >
          <img
            className="project-link"
            src="https://i.imgur.com/5Sz1VMF.png"
            alt="Outer Brain Website"
          />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@romabot/code-zombie-2-how-to-avoid-burnout-survive-the-learning-curve-efc32b8efdb5"
        >
          <img
            className="project-link"
            src="https://i.imgur.com/RM2yGiR.png"
            alt="Outer Brain Website"
          />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@romabot/code-zombie-3-css-for-the-braindead-part-1-5657843a42ec"
        >
          <img
            className="project-link"
            src="https://i.imgur.com/tNBSRru.png"
            alt="Outer Brain Website"
          />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@romabot/code-zombie-4-css-for-the-braindead-part-2-17bb71c74396"
        >
          <img
            className="project-link"
            src="https://i.imgur.com/sNeDsJN.png"
            alt="Outer Brain Website"
          />
        </a>
      </div>
    )
  }
}

export default Blogs
