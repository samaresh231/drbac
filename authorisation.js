function authorisation(role, permission) {

    return (req, res, next) => {
        const removed_permissions = req.user.removed_permissions
        if(removed_permissions.includes(permission)) {
            return res.json({
                msg: "Access Denied"
            })
        }

        const extra_permission = req.user.extra_permission
        const roles = req.user.roles
        if(extra_permission.includes(permission) || roles.includes(role)) {
            return next();
        }

        return res.json({
            msg: "Access Denied"
        })
    }
}

module.exports = authorisation;
