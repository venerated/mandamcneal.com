import { draftMode } from 'next/headers'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Main'
import { client, previewClient } from '@/lib/client'

import styles from './layout.module.scss'
import { ContentfulCallToAction } from '@/lib/__generated/sdk'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isEnabled } = await draftMode()
  const preview = isEnabled || process.env.NODE_ENV === 'development'
  const gqlClient = preview ? previewClient : client

  const { globalSettingsCollection } = await gqlClient.globalSettings({
    preview,
  })
  const globalSettings = globalSettingsCollection?.items[0]
  const navCollection = globalSettings?.navigationCollection
  const footerLinks = globalSettings?.footerLinksCollection?.items

  return (
    <div className={styles.wrap}>
      {navCollection?.items?.length ? (
        <Header navItems={navCollection.items} />
      ) : null}
      <Main>{children}</Main>
      <Footer links={footerLinks} />
    </div>
  )
}
