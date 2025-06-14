import styles from './heading.module.scss'

export type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export default function Heading({
  size = 'h2',
  as,
  className = '',
  children,
}: {
  size?: HeadingSize
  as?: HeadingSize
  className?: string
  children: React.ReactNode
}) {
  const Component = as || size
  return (
    <Component className={`${styles.wrap} ${styles[size]} ${className}`}>
      {children}
    </Component>
  )
}
