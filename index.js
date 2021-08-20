const express = require('express')
const path = require('path')
var port = process.env.PORT || 3000

const app = express()

app.use(express.static(path.join(__dirname, 'resumeview')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'resumeview', 'resumeHTML.html'))
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})