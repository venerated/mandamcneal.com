import React from 'react'

import GenericContentHeader from '@/components/GenericContent/Header'
import MediaWithContent from '@/components/MediaWithContent'
import Section from '@/components/Section'
import genericContent from '@/lib/genericContent'

import { type ContentfulGenericContentFieldsFragment } from '@/lib/__generated/sdk'

import styles from './cards.module.scss'

export default function Cards({
  data,
}: {
  data: ContentfulGenericContentFieldsFragment
}) {
  const { references } = genericContent(data)

  return (
    <React.Fragment>
      {references?.length ? (
        <Section>
          <GenericContentHeader data={data} />
          <div className={styles.content}>
            {references.map((item) => {
              if (item?.__typename === 'PageBuilder') {
                return (
                  <MediaWithContent
                    key={item?.sys?.id}
                    layout="vertical"
                    {...item}
                  />
                )
              }
            })}
          </div>
        </Section>
      ) : null}
    </React.Fragment>
  )
}
