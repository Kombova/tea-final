import { createClient } from "contentful";

const client = createClient({
    space:process.env.SPACE,
    accessToken:process.env.ACESSTOKEN
})

export default client;