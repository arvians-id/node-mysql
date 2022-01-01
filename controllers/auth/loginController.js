exports.index = (req, res) => {
    try{
        const data = { 
            title: 'Login',
            content: '../auth/login',
        }

        res.render('layouts/index', data)
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/register');
    }
}

exports.login = (res, req) => {
    console.log("OK");
}