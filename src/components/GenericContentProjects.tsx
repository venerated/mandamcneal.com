import { ContentfulGenericContentPropsFragment } from '@/lib/__generated/sdk'
import Section from './Section'
import MediaWithContent from './MediaWithContent'
import GenericContentHeader from './GenericContentHeader'

import styles from './genericContentProjects.module.scss'

export default function GenericContentProjects({
  data,
}: {
  data: ContentfulGenericContentPropsFragment
}) {
  const references = data?.referencesCollection?.items ?? []

  return (
    <Section>
      <GenericContentHeader data={data} />
      <div className={styles.content}>
        {references?.map((item) => {
          if (item?.__typename === 'PageBuilder') {
            return (
              <MediaWithContent
                key={item?.sys?.id}
                title={item?.title}
                description={item.description}
                media={item?.thumbnail}
                link={item?.slug}
              />
            )
          }
        })}
      </div>
    </Section>
  )
}
