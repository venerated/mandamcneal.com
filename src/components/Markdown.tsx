import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import remarkGfm from 'remark-gfm'

import Heading, { type HeadingSize } from '@/components/Heading'

import styles from './markdown.module.scss'

const markdownHeading = (
  size: HeadingSize,
  children: React.ReactNode,
  props: React.HTMLAttributes<HTMLHeadingElement>
) => {
  return (
    <Heading as={size} size={size} {...props}>
      {children}
    </Heading>
  )
}

const markdownLink = (
  href: string,
  children: React.ReactNode,
  props: React.HTMLAttributes<HTMLAnchorElement>
) => {
  return (
    <a
      {...props}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

const markdownList = (
  listInline: boolean,
  children: React.ReactNode,
  props: React.HTMLAttributes<HTMLUListElement>
) => {
  return (
    <ul className={listInline ? styles.commaList : ''} {...props}>
      {children}
    </ul>
  )
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
      rehypePlugins={[rehypeRaw, rehypeSanitize]}
      components={{
        h2: ({ children, ...props }) => markdownHeading('h2', children, props),
        h3: ({ children, ...props }) => markdownHeading('h3', children, props),
        a: ({ href = '', children, ...props }) =>
          markdownLink(href, children, props),
        ul: ({ children, ...props }) =>
          markdownList(listInline, children, props),
      }}
    >
      {md}
    </ReactMarkdown>
  )
}
