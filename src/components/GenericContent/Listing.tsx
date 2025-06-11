import { draftMode } from 'next/headers'
import React from 'react'

import GenericContentHeader from '@/components/GenericContent/Header'
import MediaWithContent from '@/components/MediaWithContent'
import Section from '@/components/Section'
import { client, previewClient } from '@/lib/client'

import {
  type ContentfulPageBuilderCollectionQueryVariables,
  type ContentfulPageBuilderFieldsFragment,
  type ContentfulGenericContentFieldsFragment,
} from '@/lib/__generated/sdk'

import styles from './listing.module.scss'
import genericContent from '../../lib/genericContent'

const getPageBuilderCollection = async (
  limit: number,
  options: ContentfulPageBuilderCollectionQueryVariables
) => {
  const { isEnabled } = await draftMode()
  const preview = isEnabled || process.env.NODE_ENV === 'development'
  const gqlClient = preview ? previewClient : client
  const { pageBuilderCollection } =
    await gqlClient.pageBuilderCollection(options)
  return pageBuilderCollection?.items?.slice(0, limit) ?? []
}

export default async function Listing({
  data,
}: {
  data: ContentfulGenericContentFieldsFragment
}) {
  const { autoReference, autoReferenceLimit, references } = genericContent(data)

  let items: (ContentfulPageBuilderFieldsFragment | null)[] = []

  if (references?.length) {
    items =
      references.filter((item) => item?.__typename === 'PageBuilder') ?? []
  }

  if (!items?.length && autoReference) {
    const { isEnabled } = await draftMode()
    const preview = isEnabled || process.env.NODE_ENV === 'development'

    if (autoReference === 'Blog') {
      items = await getPageBuilderCollection(autoReferenceLimit, {
        where: {
          AND: [{ slug_contains: '/blog/' }, { slug_not: '/blog' }],
        },
        preview,
      })
    }

    if (autoReference === 'Work') {
      items = await getPageBuilderCollection(autoReferenceLimit, {
        where: {
          AND: [{ slug_contains: '/work/' }, { slug_not: '/work' }],
          tags_contains_none: ['Case Study'],
        },
        preview,
      })
      console.log(items)
    }
  }

  return (
    <React.Fragment>
      {items?.length ? (
        <Section>
          <GenericContentHeader data={data} />
          <div className={styles.content}>
            {items.map((item) =>
              item ? <MediaWithContent key={item?.sys?.id} {...item} /> : null
            )}
          </div>
        </Section>
      ) : null}
    </React.Fragment>
  )
}
