const express = require('express')
const path = require('path')
var port = process.env.PORT || 3000

const app = express()

app.use(express.static(path.join(__dirname, 'resumeview')))
app.use(express.static(path.join(__dirname, 'printNameView')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'resumeview', 'resumeHTML.html'))
})

app.get('/print-name', (req, res) => {
    res.sendFile(path.join(__dirname, 'printNameView', 'printHTML.html'))
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})