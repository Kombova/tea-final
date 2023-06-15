import { createClient } from "contentful";

const clientCreateOrder = createClient({
    space:process.env.SPACE,
    accessToken:process.env.ACESSTOKENCREATEORDER
})

export default clientCreateOrder;