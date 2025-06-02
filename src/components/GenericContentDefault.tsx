import { ContentfulGenericContentDefaultPropsFragment } from '@/lib/__generated/sdk'
import Section from './Section'
import Heading, { HeadingSizes } from './Heading'
import RichText from './RichText'
import CopyBlock from './CopyBlock'

export default function GenericContentDefault({
  data,
}: {
  data: ContentfulGenericContentDefaultPropsFragment
}) {
  const tag = (data?.headingTag ?? 'h2') as HeadingSizes
  const size = (data?.headingSize ?? 'h2') as HeadingSizes
  const copy = data?.richText?.json ?? ''

  return (
    <Section>
      {data?.heading ? (
        <Heading as={tag} size={size}>
          {data?.heading}
        </Heading>
      ) : null}
      {copy ? (
        <CopyBlock>
          <RichText data={copy} />
        </CopyBlock>
      ) : null}
    </Section>
  )
}
