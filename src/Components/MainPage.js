import React from "react"
import TopInfo from "./TopInfo"

function MainPage() {
  return (
    <div>
      <main class="wrapper">
        <section className="section parallax bg1">
          <TopInfo/>
        </section>
        <section class="section static">
          <h1>PROJECTS</h1>
        </section>
        <section class="section parallax bg2">
          <h1>SO FWUFFY AWWW</h1>
        </section>
      </main>
    </div>
  )
}

export default MainPage
