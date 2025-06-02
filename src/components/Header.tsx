import Nav from '@/components/Nav'

import styles from './header.module.scss'
import { ContentfulNavItemFieldsFragment } from '@/lib/__generated/sdk'

export default function Header({
  navItems,
}: {
  navItems: (ContentfulNavItemFieldsFragment | null)[]
}) {
  return (
    <header className={styles.wrap}>
      <Nav data={navItems} />
    </header>
  )
}
