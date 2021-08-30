const express = require('express')
const app = express()
const authorisation = require('./authorisation')
const setUser = require('./setuser')

app.use(express.json())
app.use(setUser)

app.get('/apple', roleAuth('role1', 'a'), (req, res) => {
    res.json({
        msg: "apple"
    })
})

app.get('/ball', roleAuth('role1', 'b'), (req, res) => {
    res.json({
        msg: "ball"
    })
})

app.get('/cat', roleAuth('role1', 'c'), (req, res) => {
    res.json({
        msg: "cat"
    })
})

app.get('/dog', roleAuth('role2', 'd'), (req, res) => {
    res.json({
        msg: "dog"
    })
})

app.get('/eagle', roleAuth('role3', 'e'), (req, res) => {
    res.json({
        msg: "eagle"
    })
})

app.get('/fall', roleAuth('role3', 'f'), (req, res) => {
    res.json({
        msg: "fall"
    })
})

app.get('/goat', roleAuth('role3', 'g'), (req, res) => {
    res.json({
        msg: "goat"
    })
})


app.listen(3000, () => {
    console.log('listening on port 3000')
})
