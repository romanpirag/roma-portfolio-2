import React from "react"
import TopInfo from "./TopInfo"
import ProjectsPage from "./ProjectsPage"
import Contact from "./Contact"
import Blogs from "./Blogs"

function MainPage() {
  return (
    <div>
      <main>
        <section className="section">
          <TopInfo />
        </section>
        {/* <section class="section static">
          <h1>PROJECTS</h1>
        </section> */}
        <section class="section">
          <ProjectsPage />
        </section>

        <section class="section">
          <Blogs />
        </section>
        <section>
          <Contact />
        </section>
        <section className="copyright">
          <article>
            <h4>&copy; Roma all rights reserved 2019</h4>
          </article>
        </section>
      </main>
    </div>
  )
}

export default MainPage
