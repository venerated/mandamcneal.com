'use client'

import { createContext, useLayoutEffect, useState, useContext } from 'react'

type Theme = 'light' | 'dark'
const ThemeCtx = createContext<{
  theme: Theme
  toggleTheme: () => void
} | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof window === 'undefined'
      ? 'light'
      : ((localStorage.getItem('theme') as Theme) ??
        (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
  )

  useLayoutEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))
  return (
    <ThemeCtx.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeCtx.Provider>
  )
}

export const useTheme = () => {
  const ctx = useContext(ThemeCtx)
  if (!ctx) throw new Error('useTheme must be inside <ThemeProvider>')
  return ctx
}
