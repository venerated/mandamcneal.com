import { type HeadingSize } from '@/components/Heading'
import { type ContentfulGenericContentFieldsFragment } from '@/lib/__generated/sdk'

type AutoReference = 'Blog' | 'Work' | null | undefined

export default function genericContent(
  data: ContentfulGenericContentFieldsFragment
) {
  const autoReference = data?.autoReference as AutoReference
  const autoReferenceLimit = data?.autoReferenceLimit ?? -1
  const copy = data?.copy ?? ''
  const ctas = data?.ctasCollection?.items ?? []
  const heading = data?.heading ?? ''
  const headingSize = (data?.headingSize ?? 'h2') as HeadingSize
  const headingTag = (data?.headingTag ?? 'h2') as HeadingSize
  const media = data?.mediaCollection?.items ?? []
  const references = data?.referencesCollection?.items ?? []

  return {
    autoReference,
    autoReferenceLimit,
    copy,
    ctas,
    heading,
    headingSize,
    headingTag,
    media,
    references,
  }
}
