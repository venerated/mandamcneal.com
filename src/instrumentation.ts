export function register() {
  if (process.env.VERCEL_ENV !== 'preview') return

  const realFetch = globalThis.fetch
  globalThis.fetch = async (...args) => {
    const res = await realFetch(...args)
    if (!res.ok) {
      console.error('FETCH-FAIL', res.status, args[0])
      // Try to dump the body if it looks like JSON from Contentful
      try {
        const clone = res.clone()
        const body = await clone.text()
        console.error(body.slice(0, 500))
      } catch (e) {
        console.log(e)
      }
    }
    return res
  }
}
