function setUser(req, res, next) {
    const {roles, extra_permissions, removed_permissions} = req.body
    if(roles && extra_permissions && removed_permissions) {
        req.user = { roles, extra_permissions, removed_permissions};
        return next()
    }

    return res.json({
        msg: "Access Denied"
    })
}

module.exports = setUser
