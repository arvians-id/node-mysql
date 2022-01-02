const { faculty } = require('../models');

exports.index = async (req, res) => {
    try{
        const facultiesList = await faculty.findAll({
            order: [
                ['id', 'DESC']
            ]
        });
        
        const data = { 
            title: 'Data Fakultas',
            content: '../faculty/index',
            facultiesList
        }

        res.render('layouts/index', data)
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/faculties');
    }
}

exports.show = async (req, res) => {
    try{
        const dataFaculty = await faculty.findByPk(req.params.id)

        res.json(dataFaculty)
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/faculties');
    }
}

exports.create = (req, res) => {
    try{
        const data = { 
            title: 'Tambah Data Fakultas',
            content: '../faculty/create',
        }
        
        res.render('layouts/index', data)
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/faculties');
    }
}

exports.store = async (req, res) => {
    try{
        await faculty.create({
            name: req.body.name
        });

        req.flash('success', 'Data successfuly added!');
        res.redirect('/faculties');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/faculties');
    }
}

exports.destroy = async (req, res) => {
    try{
        await faculty.destroy({
            where: {
                id: req.params.id
            }
        })

        req.flash('success', 'Data successfuly deleted!');
        res.redirect('/faculties');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/faculties');
    }
}