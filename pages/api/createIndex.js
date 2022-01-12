import { createIndex } from "../../lib/redis";

const handler = async (req, res) => {
    await createIndex();
    res.status(200).send('ok')
};
export default handler;
