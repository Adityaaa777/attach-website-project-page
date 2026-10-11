import ProjectNavigation from "./sections/section-01-project-navigation/ProjectNavigation"
import CoverSection from "./sections/section-02-cover/CoverSection"
import ProjectOverview from "./sections/section-03-project-overview/ProjectOverview"
import AttachWebsite from "./sections/section-04-website/AttachWebsite"
import BlogPage from "./sections/section-05-blog/BlogPage"
import DesignSystem from "./sections/section-06-design-system/DesignSystem"
import RelatedProjects from "./sections/section-07-related-projects/RelatedProjects"
import ProjectFooter from "./sections/section-08-footer/ProjectFooter"

/** Sections are assembled here in the order of the supplied Attach_Website frames. */
export default function App() {
  const section = new URLSearchParams(window.location.search).get("section")

  const sections = [
    <ProjectNavigation />,
    <CoverSection />,
    <ProjectOverview />,
    <AttachWebsite />,
    <BlogPage />,
    <DesignSystem />,
    <RelatedProjects />,
    <ProjectFooter />,
  ]

  const requested = Number(section)
  if (section && Number.isInteger(requested) && requested >= 1 && requested <= sections.length) {
    return <main className={`attach-website-page attach-website-page--section-${requested}`}>{sections[requested - 1]}</main>
  }

  return <main className="attach-website-page">{sections.slice(1).map((view, index) => <div key={index}>{view}</div>)}</main>
}
