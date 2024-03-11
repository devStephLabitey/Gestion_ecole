const express = require('express')
const cors = require('cors')
const app = express()
const userRoute = require('./route/userRoutes')

app.use(cors()),

app.use(express.json())

app.use('/user', userRoute)
app.listen(5000, () => {
    console.log("bonjour")
} );