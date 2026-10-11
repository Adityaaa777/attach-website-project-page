import { DetailImage } from "../../components/DetailImage"
import "./blog-page.css"

/** Figma 1:680 contains one original blog website page image. */
export default function BlogPage() {
  return (
    <section className="attach-blog-frame" data-node-id="1:680" aria-label="Attach blog page">
      <div className="attach-blog-frame__panel">
        <DetailImage
          className="attach-blog-frame__image"
          src="/assets/attach/website-blog-original.png"
          alt="Attach blog page with six stories and a footer"
          draggable="false"
          wide
        />
      </div>
    </section>
  )
}
