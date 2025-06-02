// Docs: https://www.contentful.com/developers/docs/references/images-api/
export default function contentfulImageLoader({
  src = '',
  width = 0,
  quality = 70,
}) {
  const url = new URL(src)
  url.searchParams.set('fm', 'webp')
  url.searchParams.set('w', width.toString())
  url.searchParams.set('q', (quality || 75).toString())
  return url.href
}
