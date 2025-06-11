import React from 'react'
import { isValidElementType } from 'react-is'

import BlogListing from '@/components/GenericContent/BlogListing'
import Cards from '@/components/GenericContent/Cards'
import Default from '@/components/GenericContent/Default'
import Listing from '@/components/GenericContent/Listing'
import Record from '@/components/Record'
import WorkShowcase from '@/components/GenericContent/WorkShowcase'

import type {
  ContentfulGenericContentPropsFragment,
  ContentfulRecordPropsFragment,
  ContentfulRecordFieldsFragment,
  ContentfulGenericContentFieldsFragment,
} from '@/lib/__generated/sdk'

const componentMap = {
  BlogListing,
  Cards,
  Default,
  Listing,
  WorkShowcase,
} as const

type RenderAs = keyof typeof componentMap

type DynamicComponent = ({
  data,
}: {
  data: ContentfulGenericContentPropsFragment
}) => React.JSX.Element

type AsyncDynamicComponent = ({
  data,
}: {
  data: ContentfulGenericContentPropsFragment
}) => Promise<React.JSX.Element>

function assertNever(x: never): never {
  throw new Error(`Unhandled content type: ${x}`)
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
    if (!contentType) return <div key={block?.sys?.id}>Missing contentType</div>

    const componentContentType = contentType
    let component: DynamicComponent | AsyncDynamicComponent | null = null
    if (contentType === 'GenericContent') {
      const renderAs = (block?.renderAs ?? 'Default') as RenderAs
      component = componentMap[renderAs]
      if (!isValidElementType(component)) {
        if (process.env.NODE_ENV === 'development') {
          throw new Error(`Invalid component for renderAs "${renderAs}"`)
        }
        return null
      }
    }

    switch (componentContentType) {
      case 'Record':
        return (
          <Record
            key={block?.sys?.id}
            data={block as ContentfulRecordPropsFragment}
          />
        )
      case 'GenericContent':
        return component
          ? React.createElement(component, {
              key: block?.sys?.id,
              data: block as ContentfulGenericContentPropsFragment,
            })
          : null
      default:
        return assertNever(componentContentType)
    }
  })
}
