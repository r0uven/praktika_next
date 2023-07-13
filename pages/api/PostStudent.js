import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    const data = req.body;
    if (req.method === 'POST') {
        const user = []
        let id
        for await (const key of kv.scanIterator()) {
            user.push(await kv.hgetall(key))
        }
        if (user.length == 0) {
            id = 1
        } else {
            let j = 0
            for (let i = 0; i < user.length; i++) {
                if (user[i].id >= j)
                    j = user[i].id
            }
            id = j+1
        }
        kv.hset(id.toString(), { id: id.toString(), name: data.studentName, group: data.groupName, faculty: data.facultyName, isDeleted: false });
        res.status(200).json({ message: 'Data received!', data: data });
    } else {
        res.status(400).json({ message: 'Invalid request method!' });
    }
}
