import ProjectNavigation from "../section-01-project-navigation/ProjectNavigation"
import { DetailFrame } from "../../components/DetailImage"
import "./cover-section.css"

/** Layered Attach_Website cover from updated Figma node 1:708. */
export default function CoverSection() {
  return (
    <section className="attach-cover" aria-label="Attach project cover" data-node-id="1:708">
      <div className="attach-cover__glow" aria-hidden="true" />

      <div className="attach-cover__artwork">
        <DetailFrame className="attach-cover__back-screen" label="Attach website home screen" src="/assets/attach/Attach web 1.png" />
        <DetailFrame className="attach-cover__front-screen" label="Attach blog page screen" src="/assets/attach/Blog page 1.png" />
      </div>

      <div className="attach-cover__navigation">
        <ProjectNavigation />
      </div>

      <div className="attach-cover__intro">
        <h1>Attach</h1>
        <p>Attach helps you connect with caring listeners in a safe and welcoming space designed for open conversations.</p>
      </div>
    </section>
  )
}
