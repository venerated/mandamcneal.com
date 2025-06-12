import Link from 'next/link'
import React from 'react'
import sanitizeHtml from 'sanitize-html'

import { type ContentfulCallToActionFieldsFragment } from '@/lib/__generated/sdk'

import styles from './footer.module.scss'

export default function Footer({
  links,
}: {
  links: (ContentfulCallToActionFieldsFragment | null)[] | null | undefined
}) {
  return (
    <footer className={styles.wrap}>
      <div className={styles.legalText}>&copy; 2025 Amanda McNeal</div>
      {links?.length ? (
        <div className={styles.links}>
          {links.map((link) => {
            const svg = link?.svgIcon ?? ''
            const sanitized = sanitizeHtml(svg, {
              allowedTags: sanitizeHtml.defaults.allowedTags.concat([
                'path',
                'rect',
                'svg',
              ]),
              allowedAttributes: {
                svg: [
                  'fill',
                  'height',
                  'stroke',
                  'stroke-linecap',
                  'stroke-linejoin',
                  'stroke-width',
                  'viewBox',
                  'width',
                  'xmlns',
                ],
                path: ['d'],
                rect: ['x', 'y', 'width', 'height', 'rx'],
              },
            })
            return (
              <React.Fragment key={link?.sys.id}>
                {link?.url ? (
                  <Link
                    className={styles.link}
                    href={link.url}
                    aria-label={link.label ?? undefined}
                    dangerouslySetInnerHTML={{ __html: sanitized }}
                  >
                    {!link.svgIcon ? link?.label : null}
                  </Link>
                ) : null}
              </React.Fragment>
            )
          })}
        </div>
      ) : null}
    </footer>
  )
}
