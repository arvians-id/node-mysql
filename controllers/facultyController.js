const { Faculty } = require('../models');

exports.index = async (req, res) => {
    const faculties = await Faculty.findAll({
        order: [
            ['id', 'DESC']
        ]
    });
    
    const data = { 
        title: 'Data Fakultas',
        content: '../faculty/index',
        faculties
    }
    res.render('layouts/index', data)
}

exports.show = async (req, res) => {
    const faculty = await Faculty.findAll({
        where: {
            id: req.params.id
        }
    })
    res.json(faculty)
}

exports.create = (req, res) => {
    const data = { 
        title: 'Data Fakultas',
        content: '../faculty/create',
    }
    res.render('layouts/index', data)
}

exports.store = async (req, res) => {
    await Faculty.create({
        name: req.body.name
    });

    req.flash('success', 'Data successfuly added!');
    res.redirect('/faculties');
}

exports.destroy = async (req, res) => {
    await Faculty.destroy({
        where: {
            id: req.params.id
        }
    })

    req.flash('success', 'Data successfuly deleted!');
    res.redirect('/faculties');
}