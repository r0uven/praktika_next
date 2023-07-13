import { kv } from '@vercel/kv';
const fs = require('fs')



export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        fs.readFile('Schet.txt', (err, id) => {
            if (err) throw err;
            console.log(id.toString());
            fs.truncate('Schet.txt', 0, function () { console.log('done') })
            fs.writeFile("Schet.txt", (parseInt(id,10) + 1).toString(), function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            });
            kv.hset(id.toString(), { id: id.toString(), name: data.studentName, group: data.groupName, faculty: data.facultyName, isDeleted: false });
            res.status(200).json({ message: 'Data received!', data: data });
        })

    } else {
        res.status(400).json({ message: 'Invalid request method!' });
    }
}
