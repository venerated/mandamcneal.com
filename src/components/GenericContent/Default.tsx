import { ContentfulGenericContentPropsFragment } from '@/lib/__generated/sdk'
import Section from '@/components/Section'
import RichText from '@/components/RichText'
import CopyBlock from '@/components/CopyBlock'
import GenericContentHeader from '@/components/GenericContent/Header'

import styles from './default.module.scss'
import Markdown from '../Markdown'

export default function Default({
  data,
}: {
  data: ContentfulGenericContentPropsFragment
}) {
  const copy = data?.copy ?? ''

  return (
    <Section>
      {data?.heading ? <GenericContentHeader data={data} /> : null}
      {copy ? (
        <CopyBlock>
          <Markdown md={copy ?? null} />
        </CopyBlock>
      ) : null}
    </Section>
  )
}
