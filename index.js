const express = require("express")
const app = express()
const path = require('path')

const port = process.env.PORT || 80

app.use(express.static(path.resolve(__dirname)))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(port, () => console.log(`Server started on port ${port}`))