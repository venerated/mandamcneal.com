import Image from 'next/image'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

import Button from '@/components/Button'
import Heading from '@/components/Heading'

import styles from './mediaWithContent.module.scss'
import contentfulImageLoader from '@/lib/contentfulImageLoader'
import { ContentfulPageBuilderFieldsFragment } from '@/lib/__generated/sdk'

export default function MediaWithContent({
  date,
  description,
  slug,
  thumbnail,
  tags,
  title,
}: ContentfulPageBuilderFieldsFragment) {
  let formattedDate
  if (date) formattedDate = format(date, 'MM/dd/yyyy')

  return (
    <div className={styles.wrap}>
      {thumbnail?.url ? (
        <div className={styles.media}>
          <Image
            className={styles.image}
            src={contentfulImageLoader({ src: thumbnail.url, width: 800 })}
            alt=""
            width={thumbnail.width ?? 0}
            height={thumbnail.height ?? 0}
          />
        </div>
      ) : null}
      <div className={styles.content}>
        {title ? (
          <Heading as="h3" size="h6" className={styles.title}>
            {title}
          </Heading>
        ) : null}
        {formattedDate ? (
          <time className={styles.date}>{formattedDate}</time>
        ) : null}
        {description ? (
          <div className={styles.description}>{description}</div>
        ) : null}
        {tags?.length ? (
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <div key={index} className={styles.tag}>
                {tag}
              </div>
            ))}
          </div>
        ) : null}
        {slug ? (
          <div className={styles.cta}>
            <Button href={slug}>Read More</Button>
          </div>
        ) : null}
      </div>
    </div>
  )
}
