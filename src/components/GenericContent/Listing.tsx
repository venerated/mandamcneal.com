import React from 'react'

import GenericContentHeader from '@/components/GenericContent/Header'
import MediaWithContent from '@/components/MediaWithContent'
import Section from '@/components/Section'

import { type ContentfulGenericContentPropsFragment } from '@/lib/__generated/sdk'

import styles from './listing.module.scss'

export default function Listing({
  data,
}: {
  data: ContentfulGenericContentPropsFragment
}) {
  const references =
    data?.referencesCollection?.items?.filter(
      (item) => item?.__typename === 'PageBuilder'
    ) ?? []

  return (
    <React.Fragment>
      {references?.length ? (
        <Section>
          <GenericContentHeader data={data} />
          <div className={styles.content}>
            {references?.map((item) => (
              <MediaWithContent key={item?.sys?.id} {...item} />
            ))}
          </div>
        </Section>
      ) : null}
    </React.Fragment>
  )
}
