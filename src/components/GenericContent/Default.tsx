import CopyBlock from '@/components/CopyBlock'
import GenericContentHeader from '@/components/GenericContent/Header'
import Markdown from '@/components/Markdown'
import Section from '@/components/Section'
import genericContent from '@/lib/genericContent'

import { type ContentfulGenericContentFieldsFragment } from '@/lib/__generated/sdk'

export default function Default({
  data,
}: {
  data: ContentfulGenericContentFieldsFragment
}) {
  const { copy, heading } = genericContent(data)

  return (
    <Section>
      {heading ? <GenericContentHeader data={data} /> : null}
      {copy ? (
        <CopyBlock>
          <Markdown md={copy ?? null} />
        </CopyBlock>
      ) : null}
    </Section>
  )
}
