import { ContentfulGenericContentPropsFragment } from '@/lib/__generated/sdk'
import Section from './Section'
import RichText from './RichText'
import CopyBlock from './CopyBlock'
import GenericContentHeader from './GenericContentHeader'

import styles from './genericContentDefault.module.scss'

export default function GenericContentDefault({
  data,
}: {
  data: ContentfulGenericContentPropsFragment
}) {
  const copy = data?.richText?.json ?? ''

  return (
    <Section>
      {data?.heading ? <GenericContentHeader data={data} /> : null}
      {copy ? (
        <CopyBlock>
          <RichText data={copy} />
        </CopyBlock>
      ) : null}
    </Section>
  )
}
