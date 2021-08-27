function setUser(req, res, next) {
    const {roles} = req.body
    if(!roles) {
        return res.json({
            msg: "Access Denied"
        })
    }

    req.user = { roles: req.body.roles};
    next()
}

module.exports = setUser