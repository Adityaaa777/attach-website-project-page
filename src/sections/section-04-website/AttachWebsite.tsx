import type { CSSProperties } from "react"
import { DetailFrame } from "../../components/DetailImage"
import "./attach-website.css"

const source = "/assets/attach/website-home.png"
const sourceWidth = 1248
const sourceHeight = 4096

type SourceCropProps = {
  alt: string
  className?: string
  x: number
  y: number
  width: number
  height: number
}

/** Displays a region of the unchanged, full-resolution Figma image. */
function SourceCrop({ alt, className = "", x, y, width, height }: SourceCropProps) {
  const style = {
    aspectRatio: `${width} / ${height}`,
    "--source-width": `${(sourceWidth / width) * 100}%`,
    "--source-left": `${(-x / width) * 100}%`,
    "--source-top": `${(-y / height) * 100}%`,
  } as CSSProperties

  if (className === "attach-site__hero-art" || className === "attach-site__start-phone") {
    return (
      <DetailFrame className={`attach-site-crop ${className}`} label={alt} src={source} style={style} viewCrop={{ sourceWidth, x, y, width, height }}>
        <img alt="" src={source} width={sourceWidth} height={sourceHeight} draggable="false" />
      </DetailFrame>
    )
  }

  return (
    <span className={`attach-site-crop ${className}`} style={style} role="img" aria-label={alt}>
      <img alt="" src={source} width={sourceWidth} height={sourceHeight} draggable="false" />
    </span>
  )
}

const listeners = [
  { name: "Roshan", age: "22 Yrs", avatar: [76, 738], topic: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { name: "Rehan Khan", age: "22 Yrs", avatar: [448, 738], topic: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { name: "Priya", age: "22 Yrs", avatar: [820, 738], topic: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { name: "Muskan", age: "22 Yrs", avatar: [76, 954], topic: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { name: "Roshni", age: "22 Yrs", avatar: [448, 954], topic: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { name: "Rohit", age: "22 Yrs", avatar: [820, 954], topic: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
]

const steps = [
  { title: "Download Attach", detail: "Start by installing the Attach app. Get it from the stores." },
  { title: "Discover Listeners That Fit You", detail: "Discover listeners that fit you. Browse trained, compassionate listeners." },
  { title: "Start Talking", detail: "Connect instantly, talk freely. Begin a private call and speak your heart out." },
]

const reasons = [
  { x: 70, title: "Daily Issues" },
  { x: 350, title: "Daily Issues" },
  { x: 632, title: "Daily Issues" },
  { x: 916, title: "Daily Issues" },
]

const faqs = [
  "What is your favorite template from BRIX Templates?",
  "What is your favorite template from BRIX Templates?",
  "What is your favorite template from BRIX Templates?",
  "What is your favorite template from BRIX Templates?",
  "What is Webflow and why is it the best website builder?",
]

/** Section 4 rebuilt as HTML; every photographic/screen crop uses the original Figma bytes. */
export default function AttachWebsite() {
  return (
    <section className="attach-website-frame" data-node-id="1:683" aria-label="Attach website home page">
      <div className="attach-website-frame__panel">
        <div className="attach-site" id="attach-home">
          <header className="attach-site__header">
            <a className="attach-site__logo" href="#attach-home">Attach</a>
            <nav aria-label="Attach website navigation">
              <a href="#attach-home">Home</a>
              <a href="#attach-listeners">Meet Our Listeners</a>
              <a href="#attach-blog">Blog</a>
            </nav>
            <a className="attach-site__download" href="#attach-start">Download ↓</a>
          </header>

          <section className="attach-site__hero" aria-labelledby="attach-site-hero-title">
            <div className="attach-site__hero-copy">
              <h1 id="attach-site-hero-title">Attached when you<br />feel <em>sad</em></h1>
              <p>Talk to someone who truly listens — via Chat, Call, or Video. No pressure. Just support.</p>
              <small>You&apos;re Not Alone Anymore</small>
              <div className="attach-site__stores"><a href="#attach-start">▶ <b>Google Play</b></a><a href="#attach-start">● <b>App Store</b></a></div>
            </div>
            <SourceCrop alt="Two Attach mobile screens" className="attach-site__hero-art" x={702} y={145} width={480} height={440} />
          </section>

          <section className="attach-site__listeners" id="attach-listeners" aria-labelledby="attach-listeners-title">
            <h2 id="attach-listeners-title">Meet Our Listeners</h2>
            <div className="attach-site__listener-grid">{listeners.map((listener, index) => <article className="attach-site__listener" key={listener.name}>
              <div className="attach-site__listener-top">
                <SourceCrop alt="" className="attach-site__avatar" x={listener.avatar[0]} y={listener.avatar[1]} width={54} height={54} />
                <div><b>{listener.name} <span>✹</span></b><small>Female : {listener.age}<br />Experience : 1+ hrs</small></div>
                <strong>Following<br /><span>★★★★★</span></strong>
              </div>
              <p>{listener.topic}</p>
              <div className="attach-site__listener-actions"><a href="#attach-start" aria-label={`Chat with ${listener.name}`}>▣</a><a href="#attach-start" aria-label={`Call ${listener.name}`}>♧</a><a href="#attach-start" aria-label={`Video chat with ${listener.name}`}>▣</a></div>
              <span className="attach-site__listener-index">{String(index + 1).padStart(2, "0")}</span>
            </article>)}</div>
          </section>

          <section className="attach-site__blog" id="attach-blog" aria-labelledby="attach-blog-title">
            <h2 id="attach-blog-title">From the Heart – Our Blog</h2>
            <div className="attach-site__blog-grid">{[0, 1, 2].map(index => <article key={index}>
              <SourceCrop alt="Woman seated beside a laptop, holding her head" className="attach-site__blog-photo" x={74} y={1302} width={346} height={260} />
              <div className="attach-site__blog-author"><span>◉ Priya gupta</span><span>↗ Share</span></div>
              <h3>When the World Fell Apart, She Held It Together</h3>
              <p>She was just a daughter — someone who loved quietly, lived simply, and never expected the weight of the world to fall on her shoulders.</p>
              <a className="attach-site__read-more" href="?section=5">Read more</a>
            </article>)}</div>
          </section>

          <section className="attach-site__start" id="attach-start" aria-labelledby="attach-start-title">
            <div><h2 id="attach-start-title">How to Start with Attach</h2><ol>{steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.detail}</p>{index === 0 && <div className="attach-site__stores"><a href="#attach-start">▶ <b>Google Play</b></a><a href="#attach-start">● <b>App Store</b></a></div>}</div></li>)}</ol></div>
            <SourceCrop alt="Attach mobile welcome screen" className="attach-site__start-phone" x={838} y={1970} width={270} height={468} />
          </section>

          <section className="attach-site__reasons" aria-labelledby="attach-reasons-title"><h2 id="attach-reasons-title">Why you choose Attach</h2><div>{reasons.map((reason, index) => <article key={index}>
            <SourceCrop alt="Person needing emotional support" x={reason.x} y={2600} width={260} height={168} />
            <div><h3>{reason.title}</h3><p>No issue is too small if it&apos;s making you anxious. Daily life can be daunting, but listeners are here to support you with compassion and empathy.</p></div>
          </article>)}</div></section>

          <section className="attach-site__faq" id="attach-faq" aria-label="Frequently asked questions">{faqs.map((question, index) => <details key={index} open={index === 4}><summary>{question}</summary><p>Webflow is a powerful visual development platform that allows designers to build fully responsive websites without writing a single line of code.</p></details>)}</section>

          <footer className="attach-site__footer"><div><strong>Attach</strong><p>Attach is a safe space to talk,<br />connect, and heal.</p><div className="attach-site__social">f&nbsp;&nbsp;▣&nbsp;&nbsp;◎&nbsp;&nbsp;𝕏</div></div><div><b>Explore Attach</b><a href="#attach-home">Home</a><a href="#attach-listeners">Meet Our Listeners</a><a href="#attach-blog">Blog</a><a href="#attach-faq">FAQs</a></div><div><b>Support &amp; Policies</b><strong>FAQs</strong><a href="#attach-faq">Privacy Policy</a><a href="#attach-faq">Terms And Conditions</a><a href="#attach-faq">Contact Us</a><a href="#attach-faq">Delete Account</a><small>Download Attach and Start Talking</small><div className="attach-site__stores"><a href="#attach-start">▶ <b>Google Play</b></a><a href="#attach-start">● <b>App Store</b></a></div></div></footer>
        </div>
      </div>
    </section>
  )
}
