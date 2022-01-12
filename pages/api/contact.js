import { createContact } from "../../lib/entities/contact";

const handler = async(req, res) => {
    const id = await createContact(req.body);
    res.status(200).json({id})
}
export default handler;