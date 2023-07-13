import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  if (req.method === 'GET'){
    const user = []
    for await (const key of kv.scanIterator()) {
      user.push(await kv.hgetall(key))
    }
    return res.status(200).json(user);
  }
}
