const requireAuth = (req, res, next) => {
	res.isAdmin = req.originalUrl.startsWith('/dashboard');
    next();
};

module.exports = requireAuth;