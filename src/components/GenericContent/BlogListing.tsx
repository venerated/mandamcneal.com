import { ContentfulGenericContentPropsFragment } from '@/lib/__generated/sdk'
import { draftMode } from 'next/headers'

import { client, previewClient } from '@/lib/client'
import Section from '@/components/Section'
import MediaWithContent from '@/components/MediaWithContent'
import GenericContentHeader from '@/components/GenericContent/Header'

import styles from './blogListing.module.scss'

export default async function BlogListing({
  data,
}: {
  data: ContentfulGenericContentPropsFragment
}) {
  const { isEnabled } = await draftMode()
  const preview = isEnabled || process.env.NODE_ENV === 'development'
  const gqlClient = preview ? previewClient : client

  const { pageBuilderCollection } = await gqlClient.pageBuilderCollection({
    where: {
      AND: [{ slug_contains: '/blog/' }, { slug_not: '/blog' }],
    },
    preview,
  })
  const blogPosts = pageBuilderCollection?.items

  return (
    <Section>
      <GenericContentHeader data={data} />
      <div className={styles.content}>
        {blogPosts?.map((post) => {
          return post ? (
            <MediaWithContent key={post?.sys?.id} {...post} />
          ) : null
        })}
      </div>
    </Section>
  )
}
