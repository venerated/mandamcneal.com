import styles from './copyblock.module.scss'

export default function CopyBlock({ children }: { children: React.ReactNode }) {
  return <div className={styles.wrap}>{children}</div>
}
