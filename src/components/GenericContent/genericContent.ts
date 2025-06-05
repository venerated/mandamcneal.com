import { ContentfulGenericContentPropsFragment } from '@/lib/__generated/sdk'

export default function genericContent(
  data: ContentfulGenericContentPropsFragment
) {
  const copy = data?.richText?.json ?? ''
  const heading = data?.heading ?? ''
  const media = data?.mediaCollection?.items ?? []

  return { copy, heading, media }
}
