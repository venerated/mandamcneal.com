import Link from 'next/link'

import styles from './nav.module.scss'
import { ContentfulNavItemFieldsFragment } from '@/lib/__generated/sdk'

export default function Nav({
  data,
}: {
  data: (ContentfulNavItemFieldsFragment | null)[]
}) {
  return (
    <nav className={styles.wrap}>
      <ul className={styles.list}>
        {data?.map((page, index) =>
          page?.slug && page?.title ? (
            <li key={index} className={styles.listItem}>
              <Link className={styles.listLink} href={page?.slug}>
                {page?.title}
              </Link>
            </li>
          ) : null,
        )}
      </ul>
    </nav>
  )
}
