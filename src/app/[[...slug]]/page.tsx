import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import Article from '@/components/Article'
import BlockResolver from '@/components/BlockResolver'
import { client, previewClient } from '@/lib/client'

import styles from './page.module.scss'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  if (!process.env.NEXT_PUBLIC_BASE_URL)
    throw new Error('Public base URL missing.')
  const { isEnabled } = await draftMode()
  const preview = isEnabled || process.env.NODE_ENV === 'development'
  const gqlClient = preview ? previewClient : client

  const { slug } = await params
  const slugAsString = slug?.length ? `/${slug.join('/')}` : '/'
  const { pageBuilderCollection } = await gqlClient.pageBuilder({
    slug: slugAsString,
    preview,
  })
  const page = pageBuilderCollection?.items[0]

  const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
    alternates: { canonical: slugAsString },
  }

  metadata.title = page?.title
    ? `Amanda McNeal | ${page.title}`
    : `Amanda McNeal`
  if (page?.description) metadata.description = page.description

  return metadata
}

export const dynamicParams = false
export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  const preview = process.env.NODE_ENV === 'development'
  const gqlClient = preview ? previewClient : client
  const { pageBuilderCollection } = await gqlClient.pageBuilderCollectionList({
    preview,
  })

  if (!pageBuilderCollection?.items) throw new Error('No pages found')

  // Map each page.slug (a string like "blog/my-post") into string[] segments
  const routes = pageBuilderCollection.items
    .filter((page): page is NonNullable<typeof page> => Boolean(page?.slug))
    .map((page) => {
      const slugArray = page
        .slug!.split('/')
        .filter((segment) => segment.length > 0)
      return { slug: slugArray }
    })

  // Include the root path so "/" is generated
  routes.push({ slug: [] })

  return routes
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { isEnabled } = await draftMode()
  const preview = isEnabled || process.env.NODE_ENV === 'development'
  const gqlClient = preview ? previewClient : client

  const { slug } = await params
  const slugAsString = slug?.length ? `/${slug.join('/')}` : '/'
  const { pageBuilderCollection } = await gqlClient.pageBuilder({
    slug: slugAsString,
    preview,
  })
  const page = pageBuilderCollection?.items[0]
  const blocks = page?.blocksCollection

  const isArticle = page?.copy && slug.includes('blog')

  if (!page) {
    notFound()
  }

  return (
    <div className={styles.wrap}>
      {blocks?.items?.length ? <BlockResolver data={blocks?.items} /> : null}
      {isArticle ? <Article data={page} /> : null}
    </div>
  )
}
