import {allContacts} from '../../lib/entities/contact'
const handler = async (req, res) => {
    const contacts = await allContacts();
    res.status(200).json({contacts})
}

export default handler;