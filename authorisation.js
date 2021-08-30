function authorisation(permission) {
    return (req, res, next) => {
        if(!req.user.permissions.includes(permission)) {
            return res.json({
                msg: "Access Denied"
            })
        }

        next();
    }
}

module.exports = authorisation;
