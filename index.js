const express = require('express')
const app = express()
const authorisation = require('./authorisation')
const setUser = require('./setuser')

app.use(express.json())
app.use(setUser)

app.get('/apple', authorisation('a'), (req, res) => {
    res.json({
        msg: "apple"
    })
})

app.get('/ball', authorisation('b'), (req, res) => {
    res.json({
        msg: "ball"
    })
})

app.get('/cat', authorisation('c'), (req, res) => {
    res.json({
        msg: "cat"
    })
})

app.get('/dog', authorisation('d'), (req, res) => {
    res.json({
        msg: "dog"
    })
})


app.listen(3000, () => {
    console.log('listening on port 3000')
})