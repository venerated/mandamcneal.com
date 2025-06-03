'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './nav.module.scss'
import { ContentfulNavItemFieldsFragment } from '@/lib/__generated/sdk'
import { CSSProperties } from 'react'

export default function Nav({
  data,
  className = '',
}: {
  data: (ContentfulNavItemFieldsFragment | null)[]
  className?: string
}) {
  const pathname = usePathname()

  return (
    <nav className={`${styles.wrap} ${className}`}>
      <ul
        className={styles.list}
        style={{ '--nav-item-count': data?.length } as CSSProperties}
      >
        {data?.map((page, index) =>
          page?.slug && page?.title ? (
            <li key={index} className={styles.listItem}>
              <Link
                className={`${styles.listLink} ${pathname === page?.slug ? styles.listLinkActive : ''}`}
                href={page?.slug}
              >
                {page?.title}
              </Link>
            </li>
          ) : null
        )}
      </ul>
    </nav>
  )
}
