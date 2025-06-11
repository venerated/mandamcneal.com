import React from 'react'

import Section from '@/components/Section'
import Grid from '@/components/Grid'
import Card from '@/components/Card'
import GenericContentHeader from '@/components/GenericContent/Header'

import { type ContentfulGenericContentPropsFragment } from '@/lib/__generated/sdk'

export default function Cards({
  data,
}: {
  data: ContentfulGenericContentPropsFragment
}) {
  const references = data?.referencesCollection?.items ?? []

  return (
    <React.Fragment>
      {references?.length ? (
        <Section>
          <GenericContentHeader data={data} />
          <Grid columns={{ mobile: 1, tablet: 1, desktop: 2 }}>
            {references?.map((item) => {
              if (item?.__typename === 'PageBuilder') {
                return (
                  <Card
                    key={item?.sys?.id}
                    title={item?.title}
                    description={item.description}
                    media={item?.thumbnail}
                    link={item?.slug}
                  />
                )
              }
            })}
          </Grid>
        </Section>
      ) : null}
    </React.Fragment>
  )
}
