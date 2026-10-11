# Attach_Website project page

## Updated Figma reference (2026-10-10)

The replacement Figma file (`yeQBvsX6q3o3GyF3tUmj4f`) is accessible. All eight updated top-level frames were inspected with Figma design context and screenshots. The original image layers were downloaded into this project. Figma's Starter-plan tool limit blocked further child-node inspection after the eight frame reads.

This is a separate project from `ATTACH_APP_PROJECT_PAGE`. Sections are implemented in the order supplied by the user. The default route displays sections 2–8; `?section=1` through `?section=8` displays each frame independently.

| Section | Figma node | Status |
| --- | --- | --- |
| 1 — project navigation | `1:731` | Implemented with original SVG |
| 2 — cover | `1:708` | Implemented with two separate original image layers |
| 3 — introduction | `1:686` | Layout implemented; Attach-specific copy provisional because Figma contains Cabzo/NZCU template copy |
| 4 — home website screen | `1:683` | Rebuilt as responsive HTML/CSS sections; visual crops display the unchanged full-resolution Figma source |
| 5 — blog website screen | `1:680` | Implemented with its one original page image |
| 6 — colors and typography | `1:617` | Implemented; Product Sans font file unavailable, using a fallback font |
| 7 — related projects | `1:598` | Implemented with three original cover image files and original arrow SVG |
| 8 — project footer | `1:597` | Implemented with original SVG icons |

All used images and SVGs were downloaded from the updated Figma file and kept byte-for-byte. The cover uses its two image layers independently. Section 4 now contains separate HTML sections for the hero, listeners, blog, getting-started steps, reasons, FAQ, and footer. Photo and app-screen visuals are displayed as CSS crops of the original 1248 × 4096 Figma source image (`public/assets/attach/website-home.png`); the source bytes are unchanged. Section 5 uses its original single blog image layer.

`npm run build` passes, including TypeScript checking and the Vite production bundle. Since registry access is blocked and the local pnpm cache is incomplete, the ignored local `node_modules` is a junction to Cabzo's installed dependencies. The Attach_Website source and build output remain separate. The incomplete installation attempt is preserved in ignored `.incomplete-node-modules`.

No preview server is running. A browser security policy blocked the local preview tab in this pass, so in-browser visual verification could not be completed. A preview can be started with `npm run dev -- --host 127.0.0.1 --port 5175 --strictPort` when needed.
