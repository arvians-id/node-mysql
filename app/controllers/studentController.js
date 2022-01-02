const { student, faculty, program_study } = require('../models');

exports.index = async (req, res) => {
    try{
        const studentList = await student.findAll({
            include: [{
                    model: program_study,
                    include: ['faculty']
            }],
            order: [
                ['id', 'DESC']
            ]
        });
        
        const data = { 
            title: 'Data Mahasiswa',
            content: '../student/index',
            studentList
        }

        res.render('layouts/index', data)
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/students');
    }
}

exports.show = async (req, res) => {
    try {
        const dataStudent = await student.findOne({
            include: [{
                    model: program_study,
                    include: ['faculty']
            }],
            where: {
                id: req.params.id
            }
        });

        res.json(dataStudent);
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/students');
    }
}

exports.create = async (req, res) => {
    try {
        const facultyList = await faculty.findAll();

        const data = { 
            title: 'Tambah Data Mahasiswa',
            content: '../student/create',
            facultyList,
        }
        res.render('layouts/index', data)
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/students');
    }
}
exports.store = async (req, res) => {
    try {
        await student.create({
            fullName: req.body.fullName,
            nim: req.body.nim,
            programStudyId: req.body.programStudy,
            jenisKelamin: req.body.jenisKelamin,
            noHandphone: req.body.noHandphone
        })

        req.flash('success', 'Data successfuly added');
        res.redirect('/students');
    } catch (error) {
        req.flash('fail', error.message);
        res.redirect('/students');
    }
}
exports.destroy = async (req, res) => {
    try{
        await student.destroy({
            where: {
                id: req.params.id
            }
        })

        req.flash('success', 'Data successfuly deleted!');
        res.redirect('/students');
    } catch(error) {
        req.flash('fail', error.message);
        res.redirect('/students');
    }
}

exports.getProgramStudies = async (req, res) => {
    try {
        const programStudyList = await program_study.findAll({
            where: {
                facultyId: req.params.facultyId
            }
        })

        res.json({
            status: 200,
            data: programStudyList,
            message: 'Data success'
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error.message
        });
    }
}