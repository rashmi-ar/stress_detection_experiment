import * as fs from 'fs';
export default async function handler(req, res) {
    
        let data = await fs.promises.readdir('postData');
        fs.promises.writeFile(`postData/${data.length + 1}.json`, JSON.stringify(req.body))
        await res.status(200).json(req)

}
