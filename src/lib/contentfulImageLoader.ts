// Docs: https://www.contentful.com/developers/docs/references/images-api/
export default function contentfulImageLoader({
  src = '',
  aspectRatio,
  width,
  height,
  quality = 70,
  format = 'webp',
  fit,
  backgroundColor,
  focus,
  radius,
  border,
  rotate,
  blur,
}: {
  src: string | null | undefined
  aspectRatio?: string
  width?: number
  height?: number
  quality?: number
  format?: 'jpg' | 'png' | 'webp' | 'avif' | 'gif' | 'tif'
  fit?: 'pad' | 'fill' | 'crop' | 'scale' | 'thumb'
  backgroundColor?: string // HEX or CSS color, e.g. '000000' or 'rgba(255,255,255,0.5)'
  focus?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'center'
    | 'face'
    | 'faces'
    | 'entropy'
  radius?: number // value in pixels or percentage (e.g. 50 for 50px or 50% if string)
  border?: { width: number; color: string } // border width in px and color as HEX or CSS
  rotate?: number // rotation in degrees (0–360)
  blur?: number // blur radius (0–100)
}): string {
  if (!src) return ''

  const url = new URL(src)

  if (aspectRatio) {
    // Set dimensions based on aspect ratio
    const [w, h] = aspectRatio.split('x')
    if (!width) {
      url.searchParams.set('w', String(w))
      url.searchParams.set('h', String(h))
    } else {
      url.searchParams.set('w', String(width))
      url.searchParams.set(
        'h',
        String(Math.round((width / Number(w)) * Number(h)))
      )
    }
    url.searchParams.set('fit', 'fill')
  } else {
    // Set dimensions
    if (width != null && width > 0) {
      url.searchParams.set('w', String(width))
    }
    if (height != null && height > 0) {
      url.searchParams.set('h', String(height))
    }
    // Fit mode
    if (fit) {
      url.searchParams.set('fit', fit)
    }
  }

  // Set format
  if (format) {
    url.searchParams.set('fm', format)
  }

  // Set quality (only if between 1 and 100)
  if (quality != null && quality > 0 && quality <= 100) {
    url.searchParams.set('q', String(quality))
  }

  // Background color
  if (backgroundColor) {
    url.searchParams.set('bg', backgroundColor)
  }

  // Focus / focal point
  if (focus) {
    url.searchParams.set('f', focus)
  }

  // Radius (corner rounding)
  if (radius != null) {
    url.searchParams.set('r', String(radius))
  }

  // Border formatting: expects "width,color"
  if (border && border.width > 0 && border.color) {
    url.searchParams.set('border', `${border.width},${border.color}`)
  }

  // Rotation
  if (rotate != null && rotate >= 0 && rotate <= 360) {
    url.searchParams.set('rot', String(rotate))
  }

  // Blur
  if (blur != null && blur > 0 && blur <= 100) {
    url.searchParams.set('blur', String(blur))
  }

  return url.href
}
