import React from "react"

class TopInfo extends React.Component {
  render() {
    return (
      <article className="top-info">
        <div className="headline-container">
          <img
            className="romaimage"
            src="https://i.imgur.com/NIjwK6W.jpg"
            alt="Roma"
          />
          <div className="headline">
            <h1 className="romanpirag">Roman Pirag</h1>
            <div className="frontend-text">
              Full Stack Developer / Creative Technologist
            </div>
            {/* <p className="bio">
              Software developer with a passion for creating compelling
              interactive user experiences and visual designs. Combining
              JavaScript, React, Ruby on Rails experience with a background
              in videography, graphic design and music production.
            </p> */}
          </div>
        </div>
      </article>
    )
  }
}

export default TopInfo
