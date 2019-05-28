import React from "react"
import TopInfo from "./TopInfo"
import ProjectsPage from "./ProjectsPage"
import Contact from "./Contact"

function MainPage() {
  return (
    <div>
      <main class="wrapper">
        <section className="section parallax bg1">
          <TopInfo />
        </section>
        {/* <section class="section static">
          <h1>PROJECTS</h1>
        </section> */}
        <section class="section parallax bg2">
          <ProjectsPage />
        </section>
          <Contact/>
      </main>
    </div>
  )
}

export default MainPage
