const account = require('./account')
const me = require('./me')
const verifyMiddleware = require('..//app/middlewarse/verifyToken')
function router(app) {
    app.use('/api/account', account)
    app.use('/api/me', verifyMiddleware, me)
    app.use('/', (req, res) => res.send(`this is server login API, \n login: /api/account/login - method: POST - {email,password}
    \n register: /api/account/register - method: POST - {email,password,lastName,firstName}
    \n infomation: /api/me/-infomation -  method: GET - auth-token: --- `))
}
module.exports = router;