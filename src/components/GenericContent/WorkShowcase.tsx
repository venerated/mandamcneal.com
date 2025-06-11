import Image from 'next/image'
import React from 'react'

import CopyBlock from '@/components/CopyBlock'
import GenericContentHeader from '@/components/GenericContent/Header'
import Markdown from '@/components/Markdown'
import Section from '@/components/Section'
import contentfulImageLoader from '@/lib/contentfulImageLoader'
import genericContent from '@/lib/genericContent'

import { type ContentfulGenericContentFieldsFragment } from '@/lib/__generated/sdk'

import styles from './workShowcase.module.scss'

export default function WorkShowcase({
  data,
}: {
  data: ContentfulGenericContentFieldsFragment
}) {
  const { copy, heading, media } = genericContent(data)
  const desktopImage = media?.length ? media[0] : null
  const mobileImage = media?.length > 1 ? media[1] : null

  return (
    <Section>
      {heading ? <GenericContentHeader data={data} /> : null}
      {copy ? (
        <CopyBlock>
          <Markdown md={copy ?? null} />
        </CopyBlock>
      ) : null}
      {desktopImage || mobileImage ? (
        <div className={styles.media}>
          <div className={styles.desktop}>
            {desktopImage ? (
              <Image
                className={styles.desktopImage}
                src={contentfulImageLoader({
                  src: desktopImage.url,
                  width: 2056,
                  aspectRatio: '2056x1080',
                  focus: 'top',
                })}
                alt=""
                width={2056}
                height={1080}
              />
            ) : null}
          </div>
          <div className={styles.mobile}>
            {mobileImage ? (
              <Image
                className={styles.mobileImage}
                src={contentfulImageLoader({
                  src: mobileImage.url,
                  width: 1024,
                  aspectRatio: '430x932',
                  focus: 'top',
                })}
                alt=""
                width={430}
                height={932}
              />
            ) : null}
          </div>
        </div>
      ) : null}
    </Section>
  )
}
