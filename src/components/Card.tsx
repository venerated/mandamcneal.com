import Image from 'next/image'

import Button from '@/components/Button'
import Heading from '@/components/Heading'

import styles from './card.module.scss'
import contentfulImageLoader from '@/lib/contentfulImageLoader'

export default function Card({
  title = '',
  description = '',
  link = '',
  media,
}: {
  title: string | null | undefined
  description: string | null | undefined
  link: string | null | undefined
  media:
    | {
        height?: number | null | undefined
        width?: number | null | undefined
        url?: string | null | undefined
      }
    | null
    | undefined
}) {
  return (
    <div className={styles.wrap}>
      {media?.url ? (
        <div className={styles.media}>
          <Image
            className={styles.image}
            src={contentfulImageLoader({ src: media.url, width: 800 })}
            alt=""
            width={media.width ?? 0}
            height={media.height ?? 0}
          />
        </div>
      ) : null}
      <div className={styles.content}>
        {title ? (
          <Heading as="h3" size="h6" className={styles.title}>
            {title}
          </Heading>
        ) : null}
        {description ? (
          <div className={styles.description}>{description}</div>
        ) : null}
        {link ? (
          <div className={styles.cta}>
            <Button href={link}>Read More</Button>
          </div>
        ) : null}
      </div>
    </div>
  )
}
