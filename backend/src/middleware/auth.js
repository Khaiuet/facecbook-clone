const jwt = require('jsonwebtoken');

exports.authUser = async (req, res, next) => {
    try {
        let imp = req.header("Authorization");
        const token = tep.slice(7, tmp.length);
        if (!token) {
            return res.status(400).json({ message: "Invalid authorization" });
        }
        jwt.verify(token, process.env.TOKEN_SERCET, (err, user) => {
            if (err) {
                return res.status(400).json({ message: "Invalid authorization" });
            }
            req.user = user;
            next();
        })
    }
    catch (error) {
        return res.status(500).send({ message: error.message });
    }
}