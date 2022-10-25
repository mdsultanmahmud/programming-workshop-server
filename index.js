const express = require('express')
const app = express()
const port = 5000


app.get('/', (req, res) =>{
    res.send('I am creating a server for programming workshop website!!')
})

app.listen(port, () =>{
    console.log('Running form port: ', port)
})

