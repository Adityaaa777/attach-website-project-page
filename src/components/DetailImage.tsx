import type { CSSProperties, ImgHTMLAttributes, KeyboardEvent, ReactNode } from "react"
import { ScreenViewer, useScreenViewer } from "./ScreenViewer"
import type { ScreenCrop } from "./ScreenViewer"
import "./detail-image.css"

type DetailImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  alt: string
  viewLabel?: string
  wide?: boolean
  viewCrop?: ScreenCrop
}

/** Opens an existing screen image and lets visitors browse the project screens. */
export function DetailImage({ alt, className = "", src, viewLabel, wide = false, viewCrop, ...imageProps }: DetailImageProps) {
  const viewer = useScreenViewer<HTMLImageElement>()
  const label = viewLabel || alt || "Screen"

  const openFromKeyboard = (event: KeyboardEvent<HTMLImageElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return
    event.preventDefault()
    viewer.open()
  }

  return (
    <>
      <img
        {...imageProps}
        alt={alt}
        aria-label={`View ${label} in detail`}
        aria-expanded={viewer.isOpen}
        aria-haspopup="dialog"
        className={`${className} detail-image-trigger`.trim()}
        data-screen-src={src}
        data-screen-label={label}
        data-screen-wide={wide ? "true" : undefined}
        data-screen-crop={viewCrop ? JSON.stringify(viewCrop) : undefined}
        onClick={viewer.open}
        onKeyDown={openFromKeyboard}
        ref={viewer.triggerRef}
        role="button"
        src={src}
        tabIndex={0}
      />
      <ScreenViewer viewer={viewer} />
    </>
  )
}

type DetailFrameProps = {
  children?: ReactNode
  className: string
  label: string
  src: string
  style?: CSSProperties
  viewCrop?: ScreenCrop
}

/** Makes an existing CSS-backed screen or image crop open in the same viewer. */
export function DetailFrame({ children, className, label, src, style, viewCrop }: DetailFrameProps) {
  const viewer = useScreenViewer<HTMLSpanElement>()

  const openFromKeyboard = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return
    event.preventDefault()
    viewer.open()
  }

  return (
    <>
      <span
        aria-expanded={viewer.isOpen}
        aria-haspopup="dialog"
        aria-label={`View ${label} in detail`}
        className={`${className} detail-image-trigger`}
        data-screen-src={src}
        data-screen-label={label}
        data-screen-wide="true"
        data-screen-crop={viewCrop ? JSON.stringify(viewCrop) : undefined}
        onClick={viewer.open}
        onKeyDown={openFromKeyboard}
        ref={viewer.triggerRef}
        role="button"
        style={style}
        tabIndex={0}
      >{children}</span>
      <ScreenViewer viewer={viewer} />
    </>
  )
}
