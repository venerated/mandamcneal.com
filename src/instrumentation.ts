export function register() {
  if (process.env.VERCEL_ENV !== 'preview') return
  const realFetch = globalThis.fetch
  globalThis.fetch = async (...args) => {
    const res = await realFetch(...args)
    if (res.status === 429) console.error('RATE-LIMIT', args[0])
    return res
  }
}
