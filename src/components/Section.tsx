import styles from './section.module.scss'

export default function Section({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <section className={`${styles.wrap} ${className}`}>{children}</section>
}
