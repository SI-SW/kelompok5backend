const jwt = require('jsonwebtoken')
const prisma = require ('./database')

const userSession = async (req, res, next) => {
    let token = req.cookies.token

        try {
            if (token == null) return res.sendStatus(401)

            const decode = jwt.verify(token, 'secret-code-token')
            console.log(decode)

            const user = await prisma.user.findUnique({
                where: {
                    id: decode.id
                }
            })

            console.log(user)

            if (user) {
                //data user

                req.user = {
                    id: user.id,
                    email: user.email
                }

                console.log(req.user.id)

                next()
            } else {
                res.status(403).send({
                    status: false,
                    error: 'Not authentic'
                })
            }
        } catch (error) {
            console.error('userSession middleware helpers Error:', error)

            res.status(403).send({
                status: false,
                error: 'Not Authorize'
            })
        }

    
    if (!token) {
        res.status(401).send({
            status: false,
            error: 'Not authorize, not token'
        })
    }
}

module.exports = userSession