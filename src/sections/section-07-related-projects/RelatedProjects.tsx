import { useRef } from "react"
import "./related-projects.css"

const projects = [
  { title: "Safe 2 Destination", description: "Book safe daily or monthly rides with a seamless travel experience.", image: "/assets/related/safe-2-destination.png" },
  { title: "Corezap", description: "Manage rides and fleet operations from one intelligent platform.", image: "/assets/related/corezap.png" },
  { title: "Cabzo", description: "A smart ride booking app designed for fast, convenient, and reliable travel.", image: "/assets/related/cabzo.png" },
]

/** Standalone related project carousel from Figma node 67:3793. */
export default function RelatedProjects() {
  const track = useRef<HTMLDivElement>(null)
  const move = (direction: -1 | 1) => {
    const element = track.current
    if (!element) return
    const card = element.querySelector<HTMLElement>(".website-related-card")
    element.scrollBy({ left: direction * (card?.offsetWidth ?? 400) + direction * 32, behavior: "smooth" })
  }

  return (
    <section className="website-section-08" aria-labelledby="website-related-title" data-node-id="67:3793">
      <div className="website-related-content">
        <header className="website-related-header">
          <h2 id="website-related-title">Related Projects</h2>
          <nav className="website-related-controls" aria-label="Related project carousel">
            <button type="button" onClick={() => move(-1)} aria-label="Previous projects"><img src="/assets/arrow-left.svg" alt="" /></button>
            <button type="button" onClick={() => move(1)} aria-label="Next projects"><img src="/assets/arrow-left.svg" alt="" /></button>
          </nav>
        </header>
        <div className="website-related-track" ref={track}>
          {projects.map((project) => (
            <article className="website-related-card" key={project.title}>
              <img className="website-related-cover" src={project.image} alt={`${project.title} project cover`} />
              <div className="website-related-card-content">
                <div className="website-related-meta">
                  <span>Mobile App Design</span>
                  <a className="website-related-card-arrow" href="#attach-project-footer" aria-label={`Open ${project.title} project`}>
                    <img src="/assets/section-08-related/project-arrow-alt.svg" alt="" />
                  </a>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
