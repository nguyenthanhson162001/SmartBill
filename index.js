const express = require('express');
const app = express();
const router = require('./router')
const morgan = require('morgan')
const post = process.env.port || 3001


// connect DB
require('./config/db/mongo').connect()

// parse application/json
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({
    extended: true
}))

app.use(morgan('tiny'))

router(app)

app.listen(post, () => console.log(`Server started with http://localhost:${post}`))