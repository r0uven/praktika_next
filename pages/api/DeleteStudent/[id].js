import { kv } from '@vercel/kv';


export default async function handler(req, res) {
    const { id } = req.query;
    console.log(id)
    if (req.method === 'DELETE') {
        kv.hset(id, { isDeleted: true });
        const user = []
        for await (const key of kv.scanIterator()) {
            user.push(await kv.hgetall(key))
        }
        return res.status(200).json(user);
    } else {
        res.status(400).json({ message: 'Invalid request method!' });
    }
}
