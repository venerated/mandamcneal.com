'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import Nav from '@/components/Nav'
import Heading from './Heading'

import styles from './header.module.scss'

import { type ContentfulNavItemFieldsFragment } from '@/lib/__generated/sdk'
import { usePathname } from 'next/navigation'

export default function Header({
  navItems,
}: {
  navItems: (ContentfulNavItemFieldsFragment | null)[]
}) {
  const [navOpen, setNavOpen] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    if (navOpen) {
      setNavOpen(false)
    }
  }, [pathname])

  return (
    <header className={`${styles.wrap} ${navOpen ? styles.open : ''}`}>
      <Link className={styles.logo} href="/">
        <Heading size="h4" as="h1" className={styles.logoText}>
          Amanda McNeal
        </Heading>
      </Link>
      <div
        className={styles.mobileMenuTrigger}
        onClick={() => setNavOpen(!navOpen)}
      >
        <button className={styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <Nav className={styles.nav} data={navItems} />
    </header>
  )
}
