import Link from 'next/link'

import styles from './button.module.scss'

export default function Button({
  children,
  href,
  target = '_self',
}: {
  children: React.ReactNode
  href?: string | null | undefined
  target?: '_self' | '_blank' | string | null | undefined
}) {
  const rel = target === '_blank' ? 'noopener noreferrer' : undefined
  return href ? (
    <Link
      className={styles.wrap}
      href={href ?? undefined}
      target={target ?? undefined}
      rel={rel}
    >
      {children}
    </Link>
  ) : (
    <button className={styles.wrap}>{children}</button>
  )
}
