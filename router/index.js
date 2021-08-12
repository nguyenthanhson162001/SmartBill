const account = require('./account')
const me = require('./me')
const verifyMiddleware = require('..//app/middlewarse/verifyToken')
function router(app) {
    app.use('/api/account', account)
    app.use('/api/me', verifyMiddleware, me)
}
module.exports = router;