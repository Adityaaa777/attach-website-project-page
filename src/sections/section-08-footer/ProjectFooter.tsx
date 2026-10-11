import "./project-footer.css"

const icons = "/assets/section-09-footer"

/** Closing project footer from Figma node 65:1750. */
export default function ProjectFooter() {
  return (
    <footer id="contact" className="website-section-09" aria-labelledby="website-footer-title" data-node-id="65:1750">
      <div className="website-footer-content">
        <h2 id="website-footer-title">Thanks for Exploring <span>This Project</span></h2>
        <div className="website-footer-message">
          <p>I hope you enjoyed the process as much as I enjoyed creating it.</p>
          <p>Let’s build something impactful together.</p>
        </div>
        <div className="website-footer-actions">
          <a className="website-footer-contact" href="mailto:shrutipandey040307@gmail.com">Contact Me <img src={`${icons}/send.svg`} alt="" /></a>
          <a className="website-footer-projects" href="#attach-related-heading">Explore More Projects <img src={`${icons}/arrow-right.svg`} alt="" /></a>
        </div>
        <div className="website-footer-links" aria-label="Contact options">
          <a href="mailto:shrutipandey040307@gmail.com"><img src={`${icons}/email.svg`} alt="" />Email</a>
          <a href="https://www.linkedin.com/in/shruti-pandey-0a7715243/"><img src={`${icons}/linkedin.svg`} alt="" />LinkedIn</a>
          <a href="tel:"><img src={`${icons}/phone.svg`} alt="" />Phone no.</a>
        </div>
      </div>
      <div className="website-footer-copyright">©&nbsp; 2026, Shruti</div>
    </footer>
  )
}
