module.exports = {
    isAuthenticated: (req, res, next) => {
        if(req.isAuthenticated())
            return next();
            
        res.redirect("/");
    },
    isNotAuthenticated: (req, res, next) => {
        if(req.isAuthenticated())
            return res.redirect("/faculties");
        
        next();
    }
}