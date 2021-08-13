const express = require('express');
const app = express();
const router = require('./router')
const morgan = require('morgan')
const port = process.env.port || 3001


// connect DB
require('./config/db/mongo').connect()

app.use("/public", express.static('./public'));
app.set('view engine', 'ejs');

// parse application/json
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({
    extended: true
}))

app.use(morgan('tiny'))
app.use(function (req, res, next) {
    res.header('Content-Type:application/json')
    res.header('Access-Control-Allow-Origin:*')
    console.log('vao day')
    next()
})
router(app)

app.listen(port, () => console.log(`Server started with http://localhost:${port}`))