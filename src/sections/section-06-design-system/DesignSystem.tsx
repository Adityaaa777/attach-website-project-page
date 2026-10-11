import "./design-system.css"

const swatches = ["DDA15E", "180029", "271931", "FFFFFF"]
const typeRows = [
  { sample:"Your destination is just\none ride away.",role:"Heading",size:"36px",weight:"600" },
  { sample:"Your destination is just one\nride away.",role:"Subheading",size:"24px",weight:"500" },
  { sample:"Your destination is just one ride away.",role:"Body",size:"16px",weight:"400" },
  { sample:"Your destination is just one ride away.",role:"Body light",size:"16px",weight:"300" },
  { sample:"Your destination is just one ride away.",role:"Body Bold",size:"16px",weight:"700" },
]

/** Color and typography board from updated Figma frame 1:617. */
export default function DesignSystem() {
  return <section className="attach-design-system" data-node-id="1:617" aria-label="Attach design system">
    <div className="attach-design-system__card">
      <section className="attach-design-system__colors"><h2>Colors</h2><div className="attach-design-system__rule" /><div className="attach-design-system__swatches">{swatches.map(hex=><figure key={hex}><span style={{backgroundColor:`#${hex}`}} /><figcaption>{hex}</figcaption></figure>)}</div></section>
      <section className="attach-design-system__type"><h2>Typography</h2><div className="attach-design-system__rule" /><div className="attach-design-system__type-card"><header><strong>Product Sans<br />Black</strong><p>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz</p></header><div className="attach-design-system__divider" />{typeRows.map(row=><div className="attach-design-system__type-row" key={row.role}><p style={{fontWeight:row.weight}}>{row.sample}</p><span>{row.role}</span><span>{row.size}</span></div>)}</div></section>
    </div>
  </section>
}
