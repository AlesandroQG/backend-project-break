const requireAuth = (req, res, next) => {
    // Verificar si el usuario tiene sesión de admin
    if (!req.session.isAdmin) {
        return res.redirect("/login");
    }
    req.isAdmin = req.session.isAdmin;
    next();
};

module.exports = requireAuth;