## Contact Book using Redis-OM, Redisearch, and RedisJSON

This is a Next.js site that uses redis to store contact information, and allows for retrieval of contacts via searching. 

## How to run

1. Clone the repository `gh repo clone ulrokx/contactsearch`
2. Install dependencies `yarn` or `npm install`
3. Go to [redis hosting](redis.com/) or download [redis](redis.io/download).
4. Start a new database with Redisearch and RedisJSON modules installed.
5. Create a `.env.local` file and put the database in the following format:
    `REDIS_URL = redis://default:PASS@ADDRESS:PORT`
    filling in the password, endpoint address and port of the database
6. Run `npm run dev` or `yarn run dev`