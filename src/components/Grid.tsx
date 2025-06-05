import styles from './grid.module.scss'

export default function Grid({
  children,
  columns,
  gap = 8,
}: {
  children: React.ReactNode
  columns?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  gap?: number
}) {
  const style = {
    '--grid-columns--mobile': columns?.mobile,
    '--grid-columns--tablet': columns?.tablet,
    '--grid-columns--desktop': columns?.desktop,
    '--grid-gap': `var(--space-${gap})`,
  } as React.CSSProperties

  return (
    <div className={styles.wrap} style={style}>
      {children}
    </div>
  )
}
