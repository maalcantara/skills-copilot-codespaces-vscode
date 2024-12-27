// create web server
// create a web server
const express = require('express')
const app = express()
const port = 3000

// create a route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})git