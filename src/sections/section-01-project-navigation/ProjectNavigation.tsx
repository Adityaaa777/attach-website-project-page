import "./project-navigation.css"

export type ProjectNavigationProps = {
  backHref?: string
  nextHref?: string
}

/** Navigation from updated Attach_Website Figma node 1:731. */
export default function ProjectNavigation({
  backHref = "#back",
  nextHref = "#next",
}: ProjectNavigationProps) {
  return (
    <nav className="attach-website-navigation" aria-label="Project navigation" data-node-id="1:731">
      <a className="attach-website-navigation__link" href={backHref}>
        <img src="/assets/arrow-left.svg" alt="" width="24" height="24" />
        <span>Go Back</span>
      </a>
      <a className="attach-website-navigation__link" href={nextHref}>
        <span>Next Project</span>
        <img className="attach-website-navigation__next-arrow" src="/assets/arrow-left.svg" alt="" width="24" height="24" />
      </a>
    </nav>
  )
}
