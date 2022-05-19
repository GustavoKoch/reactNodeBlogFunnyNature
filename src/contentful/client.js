// const contentful = require("contentful"); // Node environment (CommonJS)
import { createClient } from "contentful" // JS (module syntax)

const client = createClient({
    space: "y6pddzpzaw48",
    accessToken: "nd6g3xPI2RZxVllwtkNB5q0vAtxlxVR9e2aFBJWJ43k"
})

export default client