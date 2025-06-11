import Link from 'next/link'

import styles from './button.module.scss'

export default function Button({
  children,
  className = '',
  href,
  onClick,
  target = '_self',
  variant = 'primary',
}: {
  children: React.ReactNode
  className?: string
  href?: string | null | undefined
  onClick?: () => void
  target?: '_self' | '_blank' | string | null | undefined
  variant?: 'primary' | 'ghost'
}) {
  const rel = target === '_blank' ? 'noopener noreferrer' : undefined
  const classes = `${styles.wrap} ${styles[variant]} ${className}`
  return href ? (
    <Link
      className={classes}
      href={href ?? undefined}
      target={target ?? undefined}
      rel={rel}
    >
      {children}
    </Link>
  ) : (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
