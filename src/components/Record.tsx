import React from 'react'

import Markdown from '@/components/Markdown'
import Section from '@/components/Section'

import { type ContentfulRecordPropsFragment } from '@/lib/__generated/sdk'

import styles from './record.module.scss'

export default function Record({
  data,
}: {
  data: ContentfulRecordPropsFragment
}) {
  return (
    <Section className={styles.wrap}>
      <div className={styles.grid}>
        {data?.fieldsCollection?.items?.map((item) => (
          <React.Fragment key={item?.sys?.id}>
            <div className={styles.label}>{item?.label}</div>
            <Markdown md={item?.value ?? null} listInline={true} />
          </React.Fragment>
        ))}
      </div>
    </Section>
  )
}
