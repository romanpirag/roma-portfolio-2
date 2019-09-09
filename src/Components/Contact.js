import React from "react"

function Contact() {
  return (
    <div className="contact-container">
      <article className="contact-text">
        <h2>Contact</h2>
        <div>
          <strong>Email:</strong>{" "}
          <a href="mailto:mr.romanpirag@gmail.com">mr.romanpirag@gmail.com</a>
        </div>
        <div>
          <strong>Phone:</strong>{" "}
          <a href="tel:+1 917 498 9177">(917) 498 9177</a>
        </div>
        <div>
          <strong>LinkedIn:</strong>{" "}
          <a href="https://www.linkedin.com/in/roman-pirag-690979172/">
            Linkedin.com/romanpirag
          </a>
        </div>
        <div>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/romanpirag">GitHub.com/romanpirag</a>
        </div>
        <div>
          <strong>Resume:</strong>{" "}
          <a href="https://drive.google.com/file/d/1ItH7v8lM-nxVRUY2Yfw_YPkRPtQOts4w/view">
            Resumelink
          </a>
        </div>
      </article>
    </div>
  )
}

export default Contact
