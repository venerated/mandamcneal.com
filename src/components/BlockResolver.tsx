import type {
  ContentfulGenericContentPropsFragment,
  ContentfulRecordPropsFragment,
  ContentfulRecordFieldsFragment,
} from '@/lib/__generated/sdk'
import React, { lazy } from 'react'

const GenericContentCards = lazy(
  () => import('@/components/GenericContentCards')
)
const GenericContentDefault = lazy(
  () => import('@/components/GenericContentDefault')
)
const GenericContentProjects = lazy(
  () => import('@/components/GenericContentProjects')
)
const Record = lazy(() => import('@/components/Record'))

type ComponentId =
  | 'GenericContent'
  | 'GenericContentCards'
  | 'GenericContentDefault'
  | 'GenericContentProjects'
  | 'Record'

export default function BlockResolver({
  data,
}: {
  data:
    | (
        | (
            | ContentfulGenericContentPropsFragment
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
        case 'Projects':
          componentId = 'GenericContentProjects'
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
            data={block as ContentfulGenericContentPropsFragment}
          />
        )
      case 'GenericContentDefault':
        return (
          <GenericContentDefault
            key={block?.sys.id}
            data={block as ContentfulGenericContentPropsFragment}
          />
        )
      case 'GenericContentProjects':
        return (
          <GenericContentProjects
            key={block?.sys.id}
            data={block as ContentfulGenericContentPropsFragment}
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
