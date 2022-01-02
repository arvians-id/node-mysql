const { user } = require('../../models'); 
const bcrypt = require('bcrypt');

exports.index = (req, res) => {
    try{
        const data = { 
            title: 'Registrasi',
            content: '../auth/register',
        }

        res.render('layouts/index', data)
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/register');
    }
}

exports.register = async (req, res) => {
    try{
        const password = await bcrypt.hash(req.body.password, 10);
        
        await user.create({
            name: req.body.name,
            email: req.body.email,
            password: password
        })

        req.flash('success', 'Data successfuly added, you can login now!');
        res.redirect('/');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/register');
    }
}