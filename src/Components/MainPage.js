import React from "react"
import TopInfo from "./TopInfo"
import ProjectsPage from "./ProjectsPage"
import Contact from "./Contact"
import Blogs from "./Blogs"

function MainPage() {
  return (
    <>
      <main>
        <section className="top-section">
          <TopInfo />
        </section>
        <section>
          <ProjectsPage />
        </section>
        <section>
          <Blogs />
        </section>
        
        <Contact /> 
        {/* <article className="copyright">
          <h4>&copy; Roma all rights reserved 2019</h4>
        </article> */}
      </main>
    </>
  )
}

export default MainPage
