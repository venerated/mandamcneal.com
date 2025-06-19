import Link from 'next/link'

import styles from './button.module.scss'

export default function Button({
  children,
  className = '',
  href,
  onClick,
  target = '_self',
  variant = 'primary',
  ref,
  ...props
}: React.PropsWithChildren<{
  className?: string
  ref?: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
  variant?: 'primary' | 'ghost'
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const rel = target === '_blank' ? 'noopener noreferrer' : undefined
  const classes = `${styles.wrap} ${styles[variant]} ${className}`
  return href ? (
    <Link
      className={classes}
      href={href}
      target={target}
      rel={rel}
      ref={ref as React.Ref<HTMLAnchorElement>}
      {...props}
    >
      {children}
    </Link>
  ) : (
    <button
      className={classes}
      onClick={onClick}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...props}
    >
      {children}
    </button>
  )
}
