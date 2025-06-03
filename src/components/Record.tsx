import { ContentfulRecordPropsFragment } from '@/lib/__generated/sdk'
import Section from './Section'
import Grid from './Grid'
import React from 'react'
import Markdown from './Markdown'

import styles from './record.module.scss'

export default function Record({
  data,
}: {
  data: ContentfulRecordPropsFragment
}) {
  return (
    <Section className={styles.wrap}>
      <Grid columns={{ mobile: 1, tablet: 1, desktop: 2 }}>
        {data?.fieldsCollection?.items?.map((item) => {
          return (
            <React.Fragment key={item?.sys?.id}>
              <div>{item?.label}</div>
              <Markdown md={item?.value ?? null} listInline={true} />
            </React.Fragment>
          )
        })}
      </Grid>
    </Section>
  )
}
