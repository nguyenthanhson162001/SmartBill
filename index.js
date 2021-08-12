const express = require('express');
const app = express();
const router = require('./router')
const morgan = require('morgan')
const port = process.env.port || 3001


// connect DB
require('./config/db/mongo').connect()

// parse application/json
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({
    extended: true
}))

app.use(morgan('tiny'))

router(app)

app.listen(port, () => console.log(`Server started with http://localhost:${port}`))