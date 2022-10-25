const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

app.use(cors())

const courses = require('./data/courses.json')

app.get('/', (req, res) =>{
    res.send('I am creating a server for programming workshop website!!')
})

app.listen(port, () =>{
    console.log('Running form port: ', port)
})

// load all courses
app.get('/courses', (req, res) =>{
    res.send(courses)
})

