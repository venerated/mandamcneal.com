import styles from './grid.module.scss'

export default function Grid({
  children,
  columns,
}: {
  children: React.ReactNode
  columns?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
}) {
  const style = {
    '--grid-columns--mobile': columns?.mobile,
    '--grid-columns--tablet': columns?.tablet,
    '--grid-columns--desktop': columns?.desktop,
  } as React.CSSProperties

  return (
    <div className={styles.wrap} style={style}>
      {children}
    </div>
  )
}
