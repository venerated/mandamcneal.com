'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Nav from '@/components/Nav'

import styles from './header.module.scss'

import { type ContentfulNavItemFieldsFragment } from '@/lib/__generated/sdk'

export default function Header({
  navItems,
}: {
  navItems: (ContentfulNavItemFieldsFragment | null)[]
}) {
  const [navOpen, setNavOpen] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    setNavOpen((prev) => (prev ? false : prev))
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
        <Button
          className={styles.hamburger}
          aria-label="Toggle Menu"
          variant="ghost"
        >
          <span></span>
          <span></span>
          <span></span>
        </Button>
      </div>
      <Nav className={styles.nav} data={navItems} />
    </header>
  )
}
