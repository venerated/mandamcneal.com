'use client'

import { useTheme } from 'next-themes'

import Button from '@/components/Button'

import styles from './themeSwitcher.module.scss'
import NoSsr from './NoSsr'

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <div className={styles.wrap}>
      <NoSsr>
        <Button
          className={styles.button}
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          variant="ghost"
          aria-label={
            resolvedTheme === 'dark'
              ? 'Activate Light Mode'
              : 'Activate Dark Mode'
          }
          aria-pressed={resolvedTheme === 'dark'}
        >
          {resolvedTheme === 'dark' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v8" />
              <path d="m4.93 10.93 1.41 1.41" />
              <path d="M2 18h2" />
              <path d="M20 18h2" />
              <path d="m19.07 10.93-1.41 1.41" />
              <path d="M22 22H2" />
              <path d="m8 6 4-4 4 4" />
              <path d="M16 18a4 4 0 0 0-8 0" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 10V2" />
              <path d="m4.93 10.93 1.41 1.41" />
              <path d="M2 18h2" />
              <path d="M20 18h2" />
              <path d="m19.07 10.93-1.41 1.41" />
              <path d="M22 22H2" />
              <path d="m16 6-4 4-4-4" />
              <path d="M16 18a4 4 0 0 0-8 0" />
            </svg>
          )}
        </Button>
      </NoSsr>
    </div>
  )
}
