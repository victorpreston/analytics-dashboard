import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://eu2-massive-gopher-32566.upstash.io',
  token: process.env.REDIS_KEY!,
})
