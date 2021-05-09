const express = require('express')
const PORT = process.env.PORT || 5000
const HOST = '0.0.0.0'

const app = express()

app.get('/', (req, res) => res.send("hello from node with docker!"))

app.listen(PORT, HOST, () => console.log(`Server listening at http://${HOST}:${PORT}`))
