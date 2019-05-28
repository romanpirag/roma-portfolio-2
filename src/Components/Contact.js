import React from "react"

function Contact() {
  return (
    <div className="contact-container">
      <section className="contact-text">
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
      </section>
    </div>
  )
}

export default Contact
