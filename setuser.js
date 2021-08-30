const role_permissions = new Map();
role_permissions.set('userA', ['a', 'b', 'c'])
role_permissions.set('userB',  ['a', 'b', 'c', 'd'])
role_permissions.set('userC', ['e', 'f', 'g'])
role_permissions.set('userD', ['a', 'b','c', 'e', 'f', 'g'])

function setUser(req, res, next) {
    const {role} = req.body
    if(role && role_permissions.has(role)) {
        req.user = { role: role, permissions: role_permissions.get(role)};
        return next()
    }

    return res.json({
        msg: "Access Denied"
    })
}

module.exports = setUser
