import type {
  ContentfulGenericContentDefaultPropsFragment,
  ContentfulRecordPropsFragment,
  ContentfulGenericContentFieldsFragment,
  ContentfulRecordFieldsFragment,
} from '@/lib/__generated/sdk'
import React, { lazy } from 'react'

const GenericContentCards = lazy(
  () => import('@/components/GenericContentCards'),
)
const GenericContentDefault = lazy(
  () => import('@/components/GenericContentDefault'),
)
const Record = lazy(() => import('@/components/Record'))

type ComponentId =
  | 'GenericContent'
  | 'GenericContentCards'
  | 'GenericContentDefault'
  | 'Record'

export default function BlockResolver({
  data,
}: {
  data:
    | (
        | (
            | ContentfulGenericContentFieldsFragment
            | ContentfulRecordFieldsFragment
          )
        | null
      )[]
    | null
}) {
  return data?.map((block) => {
    const contentType = block?.__typename
    if (!contentType) return <div>Missing contentType</div>

    let componentId: ComponentId = contentType
    if (contentType === 'GenericContent') {
      switch (block?.renderAs) {
        case 'Cards':
          componentId = 'GenericContentCards'
          break
        default:
          componentId = 'GenericContentDefault'
      }
    }

    switch (componentId) {
      case 'GenericContentCards':
        return (
          <GenericContentCards
            key={block?.sys.id}
            data={block as ContentfulGenericContentDefaultPropsFragment}
          />
        )
      case 'GenericContentDefault':
        return (
          <GenericContentDefault
            key={block?.sys.id}
            data={block as ContentfulGenericContentDefaultPropsFragment}
          />
        )
      case 'Record':
        return (
          <Record
            key={block?.sys.id}
            data={block as ContentfulRecordPropsFragment}
          />
        )
      default:
        return <div key={block?.sys.id}>Missing component</div>
    }
  })
}
