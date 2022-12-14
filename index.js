const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

app.use(cors())

const courses = require('./data/courses.json')
const project = require('./data/demoProject.json')
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


// load single course 
app.get('/courses/:courseId', (req, res) =>{
    const id = req.params.courseId 
    const singleCourse = courses.find(course => course.index == id)
    res.send(singleCourse)
})

app.get('/project', (req, res) =>{
    res.send(project)
})


