// const contentful = require("contentful"); // Node environment (CommonJS)
import { createClient } from "contentful" // JS (module syntax)

const client = createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
})

export default client