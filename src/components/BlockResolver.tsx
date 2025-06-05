import type {
  ContentfulGenericContentPropsFragment,
  ContentfulRecordPropsFragment,
  ContentfulRecordFieldsFragment,
  ContentfulGenericContentFieldsFragment,
} from '@/lib/__generated/sdk'
import React, { lazy, LazyExoticComponent } from 'react'

type RenderAs = 'BlogListing' | 'Cards' | 'Default' | 'Listing' | 'WorkShowcase'

type ComponentId = 'GenericContent' | 'Record'

type LazyComponent = LazyExoticComponent<
  ({
    data,
  }: {
    data: ContentfulGenericContentPropsFragment
  }) => React.JSX.Element
>

type LazyAsyncComponent = LazyExoticComponent<
  ({
    data,
  }: {
    data: ContentfulGenericContentPropsFragment
  }) => Promise<React.JSX.Element>
>

const Record = lazy(() => import('@/components/Record'))

const componentMap: Record<string, LazyComponent | LazyAsyncComponent> = {
  BlogListing: lazy(() => import('@/components/GenericContent/BlogListing')),
  Cards: lazy(() => import('@/components/GenericContent/Cards')),
  Default: lazy(() => import('@/components/GenericContent/Default')),
  Listing: lazy(() => import('@/components/GenericContent/Listing')),
  WorkShowcase: lazy(() => import('@/components/GenericContent/WorkShowcase')),
}

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
    let component: LazyComponent | LazyAsyncComponent | null = null
    if (contentType === 'GenericContent') {
      const renderAs = (block?.renderAs ?? 'Default') as RenderAs
      component = componentMap[renderAs]
    }

    switch (componentId) {
      case 'Record':
        return (
          <Record
            key={block?.sys.id}
            data={block as ContentfulRecordPropsFragment}
          />
        )
      default:
        return component
          ? React.createElement(component, {
              key: block?.sys?.id,
              data: block as ContentfulGenericContentPropsFragment,
            })
          : null
    }
  })
}
