import { kv } from '@vercel/kv';


export default async function handler(req, res) {
    const { id } = req.query;
    const data = req.body;

    if (req.method === 'PUT') {
        kv.hset(id, { name: data.studentName, group: data.groupName, faculty: data.facultyName});
        const user = []
        for await (const key of kv.scanIterator()) {
            user.push(await kv.hgetall(key))
        }
        return res.status(200).json(user);
    } else {
        res.status(400).json({ message: 'Invalid request method!' });
    }
}
