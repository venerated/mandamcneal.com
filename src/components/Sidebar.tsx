import Link from 'next/link'

import Logo from '@/components/Logo'
import Wordmark from './Wordmark'

import styles from './sidebar.module.scss'

export default function Sidebar() {
  return (
    <div className={styles.wrap}>
      <Link href="/">
        <Logo />
      </Link>
      <Wordmark />
    </div>
  )
}
