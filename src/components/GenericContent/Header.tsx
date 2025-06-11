import Button from '@/components/Button'
import Heading from '@/components/Heading'
import genericContent from '@/lib/genericContent'

import { type ContentfulGenericContentFieldsFragment } from '@/lib/__generated/sdk'

import styles from './header.module.scss'

export default function Header({
  data,
}: {
  data: ContentfulGenericContentFieldsFragment
}) {
  const { ctas, heading, headingTag, headingSize } = genericContent(data)

  return (
    <div className={styles.header}>
      <div className={styles.heading}>
        {heading ? (
          <Heading as={headingTag} size={headingSize}>
            {heading}
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
