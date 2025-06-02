import styles from './grid.module.scss'

export default function Grid({
  children,
  columns = 1,
}: {
  children: React.ReactNode
  columns?: number
}) {
  return (
    <div
      className={styles.wrap}
      style={{ '--grid-columns': columns } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
