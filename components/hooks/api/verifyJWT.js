const jwt = require('jsonwebtoken')

const verifyJWT = ({ req }) => {

    try {
        const { token } = (req.headers);
        const { email } = jwt.verify(token, process.env.SECRET_KEY)
        if (email == req.query.email) {
            return true
        }
        else {
            return false
        }
    }
    catch {
        return false
    }
};

export default verifyJWT;