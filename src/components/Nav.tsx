import Link from 'next/link'
import { usePathname } from 'next/navigation'

import ThemeSwitcher from '@/components/ThemeSwitcher'

import { type ContentfulNavItemFieldsFragment } from '@/lib/__generated/sdk'
import { type CSSProperties } from 'react'

import styles from './nav.module.scss'

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
        {data?.map((page) => {
          if (!page?.slug || !page?.title) return ''
          const isActive =
            page.slug === '/'
              ? pathname === '/'
              : pathname.startsWith(page.slug)
          return (
            <li key={page?.sys?.id} className={styles.listItem}>
              <Link
                className={`${styles.listLink} ${isActive ? styles.listLinkActive : ''}`}
                href={page.slug}
              >
                {page.title}
              </Link>
            </li>
          )
        })}
        <li className={styles.listItem}>
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  )
}
