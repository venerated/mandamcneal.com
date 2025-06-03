import { ContentfulGenericContentPropsFragment } from '@/lib/__generated/sdk'
import Heading, { HeadingSizes } from './Heading'

import styles from './genericContentHeader.module.scss'
import Button from './Button'

export default function GenericContentHeader({
  data,
}: {
  data: ContentfulGenericContentPropsFragment
}) {
  const tag = (data?.headingTag ?? 'h2') as HeadingSizes
  const size = (data?.headingSize ?? 'h2') as HeadingSizes
  const ctas = data?.ctasCollection?.items ?? []

  return (
    <div className={styles.header}>
      <div className={styles.heading}>
        {data?.heading ? (
          <Heading as={tag} size={size}>
            {data?.heading}
          </Heading>
        ) : null}
      </div>
      <div className={styles.cta}>
        {ctas?.map((cta) => (
          <Button key={cta?.sys?.id} href={cta?.url} target={cta?.target}>
            {cta?.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
