function authorisation(role) {
    return (req, res, next) => {
        if(!req.user.roles.includes(role)) {
            return res.json({
                msg: "Access Denied"
            })
        }

        next();
    }
}

module.exports = authorisation;