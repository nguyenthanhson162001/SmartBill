const account = require('./account')
const me = require('./me')
const post = require('./post')
const verifyMiddleware = require('..//app/middlewarse/verifyToken')
function router(app) {
    app.use('/api/account', account)
    app.use('/api/me', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", "true");
        next();
    }, verifyMiddleware, me)
    app.use('/api/post', verifyMiddleware, post)
    app.get('/', (req, res) => res.status(200).send(`Well come you  visit to my server !!! This is server login API, ;;; login: /api/account/login - method: POST - {email,password}
    ;;; register: /api/account/register - method: POST - {email,password,lastName,firstName}
    ;;; infomation: /api/me/infomation -  method: GET - auth-token: --- `))
}
module.exports = router;