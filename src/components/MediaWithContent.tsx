import { format } from 'date-fns'
import Image from 'next/image'

import Button from '@/components/Button'
import Heading from '@/components/Heading'
import contentfulImageLoader from '@/lib/contentfulImageLoader'

import { type ContentfulPageBuilderFieldsFragment } from '@/lib/__generated/sdk'

import styles from './mediaWithContent.module.scss'

export default function MediaWithContent({
  date,
  description,
  slug,
  thumbnail,
  tags,
  title,
  layout = 'horizontal',
  showDate = false,
}: ContentfulPageBuilderFieldsFragment & {
  layout?: 'horizontal' | 'vertical'
  showDate?: boolean
}) {
  const formattedDate = date ? format(date, 'MM/dd/yyyy') : ''

  return (
    <div className={`${styles.wrap} ${styles[layout]}`}>
      {thumbnail?.url ? (
        <div className={styles.media}>
          <Image
            className={styles.image}
            src={contentfulImageLoader({
              src: thumbnail.url,
              width: 800,
              aspectRatio: '416x234',
              focus: 'top',
              format: 'jpg',
              progressive: true,
            })}
            alt=""
            width={416}
            height={234}
          />
        </div>
      ) : null}
      <div className={styles.content}>
        {title ? (
          <Heading as="h3" size="h6" className={styles.title}>
            {title}
          </Heading>
        ) : null}
        {showDate && formattedDate ? (
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
