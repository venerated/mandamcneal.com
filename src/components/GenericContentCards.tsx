import { ContentfulGenericContentCardsPropsFragment } from '@/lib/__generated/sdk'
import Section from './Section'
import Heading, { HeadingSizes } from './Heading'
import Grid from './Grid'
import Button from './Button'
import Card from './Card'

import styles from './genericContentCards.module.scss'

export default function GenericContentCards({
  data,
}: {
  data: ContentfulGenericContentCardsPropsFragment
}) {
  const tag = (data?.headingTag ?? 'h2') as HeadingSizes
  const size = (data?.headingSize ?? 'h2') as HeadingSizes
  const cards = data?.referencesCollection?.items ?? []
  const ctas = data?.ctasCollection?.items ?? []

  return (
    <Section>
      <div className={styles.header}>
        {data?.heading ? (
          <Heading as={tag} size={size}>
            {data?.heading}
          </Heading>
        ) : null}
        {ctas?.map((cta) => (
          <Button key={cta?.sys?.id} href={cta?.url} target={cta?.target}>
            {cta?.label}
          </Button>
        ))}
      </div>
      <Grid columns={2}>
        {cards?.map((item) => {
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
  )
}
