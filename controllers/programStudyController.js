const { program_study, faculty } = require('../models');

exports.index = async(req, res) => {
    try{
        const programStudyList = await program_study.findAll({
            include: ['faculty'],
            order: [
                ['id', 'DESC']
            ]
        })

        const data = { 
            title: 'Data Program Studi',
            content: '../program-study/index',
            programStudyList
        }
        res.render('layouts/index', data)
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/program-studies');
    }
}
exports.show = async (req, res) => {
    try {
        const dataProgramStudy = await program_study.findOne({
            include: ['faculty'],
            where: {
                id: req.params.id
            }
        });

        res.json(dataProgramStudy);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/program-studies');
    }
}
exports.create = async (req, res) => {
    try {
        const facultyList = await faculty.findAll();

        const data = { 
            title: 'Tambah Data Program Studi',
            content: '../program-study/create',
            facultyList
        }
        res.render('layouts/index', data)
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/program-studies');
    }
}
exports.store = async (req, res) => {
    try {
        await program_study.create({
            facultyId: req.body.faculty,
            name: req.body.name,
        })

        req.flash('success', 'Data successfuly added');
        res.redirect('/program-studies');
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/program-studies');
    }
}
exports.destroy = async (req, res) => {
    try{
        await program_study.destroy({
            where: {
                id: req.params.id
            }
        })

        req.flash('success', 'Data successfuly deleted!');
        res.redirect('/program-studies');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/program-studies');
    }
}