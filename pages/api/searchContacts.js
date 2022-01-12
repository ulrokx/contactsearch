import {searchContacts} from '../../lib/redis';

const handler = async(req, res) => {
    const q = req.query.q;
    const results = await searchContacts(q);
    res.status(200).json({results})
}

export default handler;