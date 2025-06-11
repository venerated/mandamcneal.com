export const runtime = 'node' // force Node runtime

export async function register() {
  console.log('[instrumentation] hook alive') // should print every build
  if (process.env.VERCEL_ENV !== 'preview') return

  const realFetch = globalThis.fetch
  globalThis.fetch = async (...args) => {
    const res = await realFetch(...args)
    if (res.status >= 400) {
      console.error('FETCH-FAIL', res.status, args[0])
      // try dumping first 300 bytes for context
      try {
        const clone = res.clone()
        const txt = await clone.text()
        console.error(txt.slice(0, 300))
      } catch {
        /* ignore */
      }
    }
    return res
  }
}
