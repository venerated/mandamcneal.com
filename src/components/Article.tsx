import Image from 'next/image'

import { ContentfulPageBuilderFieldsFragment } from '@/lib/__generated/sdk'
import Heading from './Heading'
import CopyBlock from './CopyBlock'
import RichText from './RichText'

import styles from './article.module.scss'
import contentfulImageLoader from '@/lib/contentfulImageLoader'

export default function Article({
  data,
}: {
  data: ContentfulPageBuilderFieldsFragment
}) {
  return (
    <article className={styles.wrap}>
      {data?.title ? (
        <div className={styles.header}>
          <Heading size="h4" as="h2">
            {data?.title}
          </Heading>
        </div>
      ) : null}
      {data?.thumbnail?.url ? (
        <div className={styles.media}>
          <Image
            className={styles.image}
            src={contentfulImageLoader({
              src: data?.thumbnail?.url,
              width: 1600,
            })}
            alt=""
            width={data?.thumbnail?.width ?? 0}
            height={data?.thumbnail?.height ?? 0}
          />
        </div>
      ) : null}
      {data?.richText ? (
        <CopyBlock>
          <RichText data={data?.richText?.json} />
        </CopyBlock>
      ) : null}
    </article>
  )
}
