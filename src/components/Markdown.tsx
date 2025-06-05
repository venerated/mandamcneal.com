import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/a11y-dark.css' // pick your poison
import Heading from './Heading'

type UlProps = {
  children?: React.ReactNode
  node: unknown
}

const InlineUl: React.FC<UlProps> = ({ children }) => {
  const nodes = React.Children.toArray(children)
  const textEls = nodes
    .map((node, i) =>
      React.isValidElement<{ children: React.ReactNode }>(node)
        ? node.props.children
        : node
    )
    .filter((item) => item !== '\n')
  const listItems = textEls?.join(', ')

  return <span>{listItems}</span>
}

export default function Markdown({
  md,
  listInline = false,
}: {
  md: string | null
  listInline?: boolean
}) {
  if (!md) return null

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeHighlight]}
      components={{
        h2: ({ children, ...props }) => (
          <Heading as="h2" size="h2" {...props}>
            {children}
          </Heading>
        ),
        h3: ({ children, ...props }) => (
          <Heading as="h3" size="h3" {...props}>
            {children}
          </Heading>
        ),
        a: ({ href = '', children, ...props }) => (
          <a
            {...props}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="underline decoration-blue-600 hover:opacity-80"
          >
            {children}
          </a>
        ),
        // code({ inline, className, children, ...props }) {
        //   const match = /language-(\w+)/.exec(className || '')
        //   if (!inline && match) {
        //     return (
        //       <pre className="mb-6 rounded bg-zinc-900 p-4 overflow-x-auto">
        //         <code {...props} className={className}>
        //           {children}
        //         </code>
        //       </pre>
        //     )
        //   }
        //   return (
        //     <code
        //       {...props}
        //       className="rounded bg-zinc-100 px-1 py-0.5 text-sm font-mono"
        //     >
        //       {children}
        //     </code>
        //   )
        // },
        ul({ children, node }) {
          return listInline ? (
            <InlineUl children={children} node={node} />
          ) : (
            <ul>{children}</ul>
          )
        },
      }}
    >
      {md}
    </ReactMarkdown>
  )
}
