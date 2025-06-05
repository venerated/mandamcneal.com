// src/components/RichText.tsx
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES, MARKS, Document } from '@contentful/rich-text-types'
import Image from 'next/image'

export default function RichText({ data }: { data: Document }) {
  if (!data) return null // defensive – Contentful lets editors leave RTF empty

  /** Custom renderers (add the ones you need) */
  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong className="font-semibold">{text}</strong>,
      [MARKS.CODE]: (text) => (
        <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm">{text}</code>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_2]: (_node, children) => (
        <h2 className="mt-10 text-2xl leading-snug">{children}</h2>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const file = node.data.target.fields.file
        return (
          <Image
            src={`${file.url}?w=1200&fm=auto`}
            width={file.details.image.width}
            height={file.details.image.height}
            alt={node.data.target.fields.title || ''}
            loading="lazy"
          />
        )
      },
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          target={node.data.uri.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          className="underline decoration-blue-600 hover:opacity-80"
        >
          {children}
        </a>
      ),
    },
    /** Example of text-level transform – turn “\n” into <br/> */
    renderText: (text) =>
      text.split('\n').reduce((acc, segment, i) => {
        if (i > 0) acc.push(<br key={i} />)
        acc.push(segment)
        return acc
      }, [] as React.ReactNode[]),
  }

  return documentToReactComponents(data, options)
}
