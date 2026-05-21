const store = new Map<string, number[]>()

export function isRateLimited(
  key: string,
  { limit = 5, windowMs = 60_000 }: { limit?: number; windowMs?: number } = {}
): boolean {
  const now = Date.now()
  const cutoff = now - windowMs
  const hits = (store.get(key) ?? []).filter((t) => t > cutoff)
  if (hits.length >= limit) return true
  hits.push(now)
  store.set(key, hits)
  return false
}
